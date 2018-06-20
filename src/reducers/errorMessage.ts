import { Action, ErrorMessageState } from '../typings'
import { RESET_ERROR_MESSAGE } from '../actions'

const errorMessage = (state: ErrorMessageState = null, action: Action) => {
  const { type, payload } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (payload && payload.message) {
    return payload.message
  }

  return state
}

export default errorMessage
