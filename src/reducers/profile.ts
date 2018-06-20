import { LOG_OUT, LOGGED_IN, POST_AUTH, REQUEST_FAILED } from '../actions'
import { Action, ProfileState } from '../typings'

const profile = (
  state: ProfileState = {
    isLoggedIn: false,
    isFetching: true,
    isPosting: false,
  },
  action: Action,
) => {
  const { type } = action

  switch (type) {
    case REQUEST_FAILED: {
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
      }
    }
    case POST_AUTH: {
      return {
        ...state,
        isPosting: true,
      }
    }
    case LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: true,
        isPosting: false,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default: {
      return state
    }
  }
}

export default profile
