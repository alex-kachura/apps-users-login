import axios from 'axios'
import { Dispatch } from 'react-redux'

import { fetch, post, put } from '../services/backend'
import {
  AccessTokenTestResponse,
  App,
  AppId,
  AppsResponse,
  LoginData,
  LoginResponse,
  RequestError,
  User,
  UsersResponse,
} from '../typings'
import { AUTH_KEY, USERS_LIMIT } from '../consts'

export const FETCH_DATA = 'FETCH_DATA'
export const requestData = () => ({
  type: FETCH_DATA,
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
  dispatch(requestData())

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

export const fetchUsers = (id: AppId, offset: number) => (dispatch: Dispatch) => {
  return fetch(`/apps/${id}/users?limit=${USERS_LIMIT}&offset=${offset}`)
    .then(({ users }: UsersResponse) => dispatch(receiveUsers(users, id)))
}

export const POST_AUTH = 'POST_AUTH'
export const postAuth = () => ({
  type: POST_AUTH,
})
export const login = (auth: LoginData) => (dispatch: Dispatch) => {
  dispatch(postAuth())

  return post(`/login`, auth)
    .then(({ accessToken }: LoginResponse) => {
      axios.defaults.headers.common.Authorization = accessToken

      return fetch(`/`)
        .then(({ token: { exp } }: AccessTokenTestResponse) => {
          localStorage.setItem(AUTH_KEY, JSON.stringify({
            accessToken,
            exp,
          }))

          dispatch(loggedIn())
        })
    })
    .catch((error: RequestError) => dispatch(requestFailed(error)))
}

export const LOG_OUT = 'LOG_OUT'
export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem(AUTH_KEY)

  dispatch({
    type: LOG_OUT,
  })
}

export const LOGGED_IN = 'LOGGED_IN'
export const loggedIn = () => ({
  type: LOGGED_IN,
})

export const UPDATE_APP = 'UPDATE_APP'
export const putApp = () => ({
  type: UPDATE_APP,
})
export const updateApp = (app: App) => (dispatch: Dispatch) => {
  dispatch(putApp())

  return put(`/apps`, app)
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
