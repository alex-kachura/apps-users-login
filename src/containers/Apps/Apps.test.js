import * as React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Apps from './Apps'
import { MOCK_STATE } from '../../../mock/consts'

const mockStore = configureStore([thunk])
const store = mockStore(MOCK_STATE)

describe('<Apps />', () => {
  it('renders without crashing', () => {
    shallow(<Apps store={store} />)
  })

  it('should call componentDidMount', () => {
    const spyComponentDidMount = sinon.spy(Apps.prototype, 'componentDidMount')

    shallow(<Apps store={store} />)
    expect(spyComponentDidMount).toHaveProperty('callCount', 1)
    spyComponentDidMount.restore()
  })
})
