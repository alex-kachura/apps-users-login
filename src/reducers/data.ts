import { APP_UPDATED, DATA_RECEIVED, FETCH_DATA, REQUEST_FAILED, UPDATE_APP } from '../actions'
import { Action, DataState } from '../typings'

const data = (
  state: DataState = {
    apps: [],
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
    case DATA_RECEIVED: {
      return {
        ...state,
        apps: payload,
        isFetching: false,
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        apps: [],
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

export default data
