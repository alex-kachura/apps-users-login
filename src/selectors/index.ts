import { createSelector } from 'reselect'

import { AppId, StoreState, UsersState } from '../typings'

const getUsers = (state: StoreState) => state.users
const getAppId = (state: StoreState, ownProps: any) => ownProps.match.params.appId

export const getAppUsers = () => createSelector(
  getUsers,
  getAppId,
  (users: UsersState, id: AppId) => users.byAppId[id] ? users.byAppId[id].items : [],
)

export const getHasMore = () => createSelector(
  getUsers,
  getAppId,
  (users: UsersState, id: AppId) => users.byAppId[id] ? users.byAppId[id].hasMore : true,
)

export const getOffset = () => createSelector(
  getUsers,
  getAppId,
  (users: UsersState, id: AppId) => users.byAppId[id] ? users.byAppId[id].offset : 0,
)
