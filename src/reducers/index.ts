import { combineReducers } from 'redux'

import apps from './apps'
import users from './users'
import profile from './profile'
import errorMessage from './errorMessage'

const rootReducer = combineReducers({
  apps,
  users,
  profile,
  errorMessage,
})

export default rootReducer
