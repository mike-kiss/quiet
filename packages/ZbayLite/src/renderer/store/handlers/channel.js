import Immutable from 'immutable'
import BigNumber from 'bignumber.js'
import { DateTime } from 'luxon'
import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

import operationsHandlers, { operationTypes, PendingMessageOp } from './operations'
import notificationsHandlers from './notifications'
import messagesQueueHandlers from './messagesQueue'
import messagesHandlers from './messages'
import channelsHandlers from './channels'
import channelSelectors from '../selectors/channel'
import identitySelectors from '../selectors/identity'
import { getClient } from '../../zcash'
import { messages } from '../../zbay'
import { getVault } from '../../vault'
import { errorNotification, LoaderState } from './utils'
import { channelToUri } from '../../zbay/channels'

export const ChannelState = Immutable.Record({
  spentFilterValue: new BigNumber(0),
  id: null,
  message: '',
  shareableUri: '',
  loader: LoaderState({ loading: true }),
  members: null
}, 'ChannelState')

export const initialState = ChannelState()

const setSpentFilterValue = createAction('SET_SPENT_FILTER_VALUE', (_, value) => value)
const setMessage = createAction('SET_CHANNEL_MESSAGE', R.path(['target', 'value']))
const setChannelId = createAction('SET_CHANNEL_ID')
const setLoading = createAction('SET_CHANNEL_LOADING')
const setLoadingMessage = createAction('SET_CHANNEL_LOADING_MESSAGE')
const setShareableUri = createAction('SET_CHANNEL_SHAREABLE_URI')

export const actions = {
  setLoading,
  setLoadingMessage,
  setSpentFilterValue,
  setMessage,
  setShareableUri,
  setChannelId
}

const loadChannel = (id) => async (dispatch, getState) => {
  dispatch(setLoading(true))
  dispatch(setLoadingMessage('Loading messages'))
  try {
    dispatch(setChannelId(id))

    // Calculate URI on load, that way it won't be outdated, even if someone decides
    // to update channel in vault manually
    const channel = channelSelectors.data(getState())
    const uri = await channelToUri(channel.toJS())
    dispatch(setShareableUri(uri))

    await dispatch(updateLastSeen())
    await dispatch(messagesHandlers.epics.fetchMessages())
  } catch (err) {}
  dispatch(setLoading(false))
}

const sendOnEnter = (event) => async (dispatch, getState) => {
  const enterPressed = event.nativeEvent.keyCode === 13
  const shiftPressed = event.nativeEvent.shiftKey === true
  if (enterPressed && !shiftPressed) {
    event.preventDefault()
    const message = messages.createMessage({
      identity: identitySelectors.data(getState()).toJS(),
      messageData: {
        type: messages.messageType.BASIC,
        data: event.target.value
      }
    })
    const channel = channelSelectors.data(getState()).toJS()
    dispatch(messagesQueueHandlers.epics.addMessage({ message, channelId: channel.id }))
    dispatch(setMessage(''))
  }
}

const resendMessage = (message) => async (dispatch, getState) => {
  dispatch(operationsHandlers.actions.removeOperation(message.id))
  const channel = channelSelectors.data(getState()).toJS()
  const transfer = await messages.messageToTransfer({
    message,
    channel
  })
  try {
    const opId = await getClient().payment.send(transfer)
    await dispatch(operationsHandlers.epics.observeOperation({
      opId,
      type: operationTypes.pendingMessage,
      meta: PendingMessageOp({
        channelId: channel.id,
        message: Immutable.fromJS(message)
      })
    }))
  } catch (err) {
    notificationsHandlers.actions.enqueueSnackbar(
      errorNotification({
        message: 'Couldn\'t send the message, please check node connection.'
      })
    )
  }
}

const updateLastSeen = () => async (dispatch, getState) => {
  const identity = identitySelectors.data(getState())
  const channelId = channelSelectors.channelId(getState())
  const lastSeen = DateTime.utc()
  getVault().channels.updateLastSeen({
    identityId: identity.get('id'),
    channelId,
    lastSeen
  })
  dispatch(channelsHandlers.actions.setLastSeen({ channelId, lastSeen }))
}

const clearNewMessages = () => async (dispatch, getState) => {
  const channelId = channelSelectors.channelId(getState())
  dispatch(messagesHandlers.actions.cleanNewMessages({ channelId }))
}

export const epics = {
  sendOnEnter,
  loadChannel,
  resendMessage,
  clearNewMessages,
  updateLastSeen
}

// TODO: we should have a global loader map
export const reducer = handleActions({
  [setLoading]: (state, { payload: loading }) => state.setIn(['loader', 'loading'], loading),
  [setLoadingMessage]: (state, { payload: message }) => state.setIn(['loader', 'message'], message),
  [setSpentFilterValue]: (state, { payload: value }) => state.set('spentFilterValue', new BigNumber(value)),
  [setMessage]: (state, { payload: value }) => state.set('message', value),
  [setChannelId]: (state, { payload: id }) => state.set('id', id),
  [setShareableUri]: (state, { payload: uri }) => state.set('shareableUri', uri)
}, initialState)

export default {
  reducer,
  epics,
  actions
}
