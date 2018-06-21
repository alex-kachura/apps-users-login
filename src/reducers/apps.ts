import { APP_UPDATED, APPS_RECEIVED, FETCH_DATA, REQUEST_FAILED, UPDATE_APP } from '../actions'
import { Action, AppsState } from '../typings'

const apps = (
  state: AppsState = {
    items: [],
    isFetching: true,
    isPosting: false,
  },
  action: Action,
) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_DATA: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        items: [],
        isFetching: false,
      }
    }
    case APPS_RECEIVED: {
      return {
        ...state,
        items: payload,
        isFetching: false,
      }
    }
    case UPDATE_APP: {
      return {
        ...state,
        isPosting: true,
      }
    }
    case APP_UPDATED: {
      return {
        ...state,
        isPosting: false,
      }
    }
    default: {
      return state
    }
  }
}

export default apps
