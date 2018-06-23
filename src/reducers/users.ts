import { FETCHING_USERS, REQUEST_FAILED, USERS_RECEIVED } from '../actions'
import { USERS_LIMIT } from '../consts'
import { Action, UsersState } from '../typings'

const users = (
  state: UsersState = {
    byAppId: {},
    isFetching: false,
  },
  action: Action,
) => {
  const { type, payload } = action

  switch (type) {
    case FETCHING_USERS: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case USERS_RECEIVED: {
      const { items, appId } = payload
      const byAppId = { ...state.byAppId }
      const app = state.byAppId[appId]

      return {
        ...state,
        byAppId: {
          ...byAppId,
          [appId]: {
            items: app ? [...app.items, ...items] : items,
            hasMore: items.length === USERS_LIMIT,
            offset: app ? app.offset + USERS_LIMIT : 0,
          },
        },
        isFetching: false,
      }
    }
    default: {
      return state
    }
  }
}

export default users
