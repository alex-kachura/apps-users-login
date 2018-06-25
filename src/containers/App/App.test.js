import * as React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import App from './App'
import { MOCK_STATE } from '../../../mock/consts'

const mockStore = configureStore([thunk])
const store = mockStore(MOCK_STATE)

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App store={store} />)
  })

  it('should call componentDidMount', () => {
    const spyComponentDidMount = sinon.spy(App.prototype, 'componentDidMount')

    shallow(<App store={store} />)
    expect(spyComponentDidMount).toHaveProperty('callCount', 1)
    spyComponentDidMount.restore()
  })
})
