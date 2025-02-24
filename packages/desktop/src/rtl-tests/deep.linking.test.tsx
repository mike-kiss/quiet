import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'
import { AnyAction } from 'redux'
import { take } from 'typed-redux-saga'
import MockedSocket from 'socket.io-mock'
import { ioMock } from '../shared/setupTests'
import { prepareStore } from '../renderer/testUtils/prepareStore'
import { renderComponent } from '../renderer/testUtils/renderComponent'
import { getValidInvitationUrlTestData, validInvitationCodeTestData } from '@quiet/common'
import { communities } from '@quiet/state-manager'

describe('Deep linking', () => {
  let socket: MockedSocket

  beforeEach(async () => {
    socket = new MockedSocket()
    // @ts-ignore
    socket.emitWithAck = jest.fn()
    ioMock.mockImplementation(() => socket)
  })

  test('does not override network data if triggered twice', async () => {
    const { store, runSaga } = await prepareStore({}, socket)

    // Log all the dispatched actions in order
    const actions: AnyAction[] = []
    runSaga(function* (): Generator {
      while (true) {
        const action = yield* take()
        actions.push(action.type)
      }
    })

    renderComponent(<></>, store)

    store.dispatch(
      communities.actions.customProtocol([getValidInvitationUrlTestData(validInvitationCodeTestData[0]).deepUrl()])
    )
    await act(async () => {})

    const originalPair = communities.selectors.invitationCodes(store.getState())

    // Redo the action to provoke renewed saga runs
    store.dispatch(
      communities.actions.customProtocol([getValidInvitationUrlTestData(validInvitationCodeTestData[1]).deepUrl()])
    )
    await act(async () => {})

    const currentPair = communities.selectors.invitationCodes(store.getState())

    expect(originalPair).toEqual(currentPair)

    expect(actions).toMatchInlineSnapshot(`
      Array [
        "Communities/customProtocol",
        "Communities/createNetwork",
        "Communities/setInvitationCodes",
        "Communities/addNewCommunity",
        "Communities/setCurrentCommunity",
        "Communities/customProtocol",
      ]
    `)
  })
})
