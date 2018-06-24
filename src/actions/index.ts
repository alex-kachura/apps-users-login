import { Dispatch } from 'react-redux'

import { fetch, post, put, setAuthorizationHeaders } from '../services/backend'
import { AUTH_EXPIRY_KEY, AUTH_TOKEN_KEY, USERS_LIMIT } from '../consts'
import {
  AccessTokenTestResponse,
  App,
  AppId,
  AppsResponse,
  AppUpdate,
  LoginData,
  LoginResponse,
  RequestError,
  User,
  UsersResponse,
} from '../typings'

export const FETCHING_APPS = 'FETCHING_APPS'
export const requestApps = () => ({
  type: FETCHING_APPS,
})

export const APPS_RECEIVED = 'APPS_RECEIVED'
export const receiveApps = (apps: App[]) => ({
  payload: apps,
  type: APPS_RECEIVED,
})

export const REQUEST_FAILED = 'REQUEST_FAILED'
export const requestFailed = (error: Error | RequestError) => ({
  payload: error,
  type: REQUEST_FAILED,
})

export const fetchApps = () => (dispatch: Dispatch) => {
  dispatch(requestApps())

  return fetch('/apps')
    .then(({ apps }: AppsResponse) => dispatch(receiveApps(apps)))
    .catch((error: Error | RequestError) => dispatch(requestFailed(error)))
}

export const USERS_RECEIVED = 'USERS_RECEIVED'
export const receiveUsers = (users: User[], appId: AppId) => ({
  payload: {
    items: users,
    appId,
  },
  type: USERS_RECEIVED,
})

export const FETCHING_USERS = 'FETCHING_USERS'
export const requestUsers = () => ({
  type: FETCHING_USERS,
})

export const fetchUsers = (id: AppId, offset: number) => (dispatch: Dispatch) => {
  dispatch(requestUsers())

  return fetch(`/apps/${id}/users?limit=${USERS_LIMIT}&offset=${offset}`)
    .then(({ users }: UsersResponse) => dispatch(receiveUsers(users, id)))
    .catch((error: Error | RequestError) => dispatch(requestFailed(error)))
}

export const LOGGING_IN = 'LOGGING_IN'
export const postAuth = () => ({
  type: LOGGING_IN,
})
export const login = (auth: LoginData) => (dispatch: Dispatch) => {
  dispatch(postAuth())

  return post(`/login`, auth)
    .then(({ accessToken }: LoginResponse) => {
      localStorage.setItem(AUTH_TOKEN_KEY, accessToken)
      setAuthorizationHeaders()
      dispatch(loggedIn())
    })
    .catch((error: RequestError) => dispatch(requestFailed(error)))
}

export const testAccessToken = () => (dispatch: Dispatch) => {
  dispatch(checkAuth())
  setAuthorizationHeaders()

  return fetch(`/`)
    .then(({ token: { exp } }: AccessTokenTestResponse) => {
      localStorage.setItem(AUTH_EXPIRY_KEY, exp.toString())
      dispatch(loggedIn())
    })
    .catch(() => dispatch(loggedOut()))
}

export const CHECKING_AUTH = 'CHECKING_AUTH'
export const checkAuth = () => ({
  type: CHECKING_AUTH,
})

export const LOGGED_OUT = 'LOGGED_OUT'
export const loggedOut = () => ({
  type: LOGGED_OUT,
})

export const LOGGED_IN = 'LOGGED_IN'
export const loggedIn = () => ({
  type: LOGGED_IN,
})

export const UPDATING_APP = 'UPDATING_APP'
export const putApp = () => ({
  type: UPDATING_APP,
})
export const updateApp = (app: AppUpdate) => (dispatch: Dispatch) => {
  dispatch(putApp())

  return put(`/apps/${app.id}`, app)
    .then(() => dispatch(appUpdated()))
    .catch((error: Error) => dispatch(requestFailed(error)))
}

export const APP_UPDATED = 'APP_UPDATED'
export const appUpdated = () => ({
  type: APP_UPDATED,
})

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
})
