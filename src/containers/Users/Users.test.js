import * as React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'

import Users from './Users'
import { MOCK_STATE } from '../../../mock/consts'

const mockStore = configureStore([thunk])
const store = mockStore(MOCK_STATE)

describe('<Users />', () => {
  it('renders without crashing', () => {
    shallow(<Router><Users store={store} /></Router>)
  })
})
