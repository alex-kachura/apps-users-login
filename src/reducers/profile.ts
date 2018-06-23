import { CHECKING_AUTH, LOGGED_IN, LOGGED_OUT, LOGGING_IN } from '../actions'
import { Action, ProfileState } from '../typings'

const profile = (
  state: ProfileState = {
    isLoggedIn: false,
    isChecking: true,
    isPosting: false,
  },
  action: Action,
) => {
  const { type } = action

  switch (type) {
    case LOGGING_IN: {
      return {
        ...state,
        isPosting: true,
      }
    }
    case CHECKING_AUTH: {
      return {
        ...state,
        isChecking: true,
      }
    }
    case LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: true,
        isPosting: false,
        isChecking: false,
      }
    }
    case LOGGED_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        isChecking: false,
      }
    }
    default: {
      return state
    }
  }
}

export default profile
