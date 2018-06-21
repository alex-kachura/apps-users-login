import { Action, ErrorMessageState } from '../typings'
import { RESET_ERROR_MESSAGE } from '../actions'

const errorMessage = (state: ErrorMessageState = null, action: Action) => {
  const { type, payload } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (payload) {
    if (payload.message) {
      return payload.message
    } else if (payload.error) {
      return payload.error
    }
  }

  return state
}

export default errorMessage
