import { APP_UPDATED, APPS_RECEIVED, FETCHING_APPS, REQUEST_FAILED, UPDATING_APP } from '../actions'
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
    case FETCHING_APPS: {
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
    case UPDATING_APP: {
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
