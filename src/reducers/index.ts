import { combineReducers } from 'redux'

import data from './data'
import profile from './profile'
import errorMessage from './errorMessage'

const rootReducer = combineReducers({
  data,
  profile,
  errorMessage,
})

export default rootReducer
