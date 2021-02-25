import { mapStateToProps } from './SyncLoader'
import create from '../../store/create'
import { initialState as NodeState } from '../../store/handlers/node'

jest.mock('../../../shared/electronStore', () => ({
  set: () => {},
  get: () => {}
}))

describe('SyncLoader', () => {
  let store = null
  beforeEach(() => {
    jest.clearAllMocks()
    store = create({
      node: {
        ...NodeState,
        currentBlock: 1,
        latestBlock: 100
      }
    })
  })

  it('will receive right props', async () => {
    const props = mapStateToProps(store.getState())
    expect(props).toMatchSnapshot()
  })
})
