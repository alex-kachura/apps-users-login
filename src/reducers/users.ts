import { USERS_RECEIVED } from '../actions'
import { USERS_LIMIT } from '../consts'
import { Action, UsersState } from '../typings'

const users = (
  state: UsersState = {},
  action: Action,
) => {
  const { type, payload } = action

  switch (type) {
    case USERS_RECEIVED: {
      const { items, appId } = payload
      const app = state[appId]

      return {
        ...state,
        [appId]: {
          items: app ? [...app.items, ...items] : items,
          hasMore: items.length === USERS_LIMIT,
          offset: app ? app.offset + USERS_LIMIT : 0,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default users
