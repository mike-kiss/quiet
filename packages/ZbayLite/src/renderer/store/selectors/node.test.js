/* eslint import/first: 0 */
import { DateTime } from 'luxon'

import each from 'jest-each'
import create from '../create'
import { initialState } from '../handlers/modals'
import { NodeState } from '../handlers/node'
import selectors from './node'

describe('node selectors', () => {
  let store = null
  beforeEach(() => {
    store = create({
      node: {
        ...initialState,
        currentBlock: 123,
        latestBlock: 1000,
        isTestnet: true,
        connections: 15,
        status: 'healthy',
        startedAt: DateTime.utc(2019, 3, 5, 9, 34, 48).toISO(),
        bootstrappingMessage: 'Test loader message',
        loading: true
      }
    })
    jest.clearAllMocks()
  })

  it('currentBlock', () => {
    expect(selectors.currentBlock(store.getState())).toEqual(123)
  })

  it('latestBlock', () => {
    expect(selectors.latestBlock(store.getState())).toEqual(1000)
  })

  it('connections', () => {
    expect(selectors.connections(store.getState())).toEqual(15)
  })

  it('status', () => {
    expect(selectors.status(store.getState())).toEqual('healthy')
  })

  it('node', () => {
    expect(selectors.node(store.getState())).toMatchSnapshot()
  })

  it('network when testnet', () => {
    expect(selectors.network(store.getState())).toEqual('testnet')
  })

  it('network when mainnet', () => {
    process.env.ZBAY_IS_TESTNET = 0
    expect(selectors.network(store.getState())).toEqual('mainnet')
  })

  each(['healthy', 'syncing']).test('isConnected when status %s', async status => {
    store = create({
      node: {
        ...NodeState,
        status
      }
    })
    expect(selectors.isConnected(store.getState())).toBeTruthy()
  })

  each(['restarting', 'down', 'connecting']).test('isConnected when status %s', async status => {
    store = create({
      node: {
        ...NodeState,
        status
      }
    })
    expect(selectors.isConnected(store.getState())).toBeFalsy()
  })

  it('bootstrapping', () => {
    expect(selectors.bootstrapping(store.getState())).toMatchSnapshot()
  })

  it('bootstrappingMessage', () => {
    expect(selectors.bootstrappingMessage(store.getState())).toMatchSnapshot()
  })
})
