declare module 'redux' {
  export type GenericStoreEnhancer = any;
}

import { AUTH_FIELDS } from './consts'

export interface LoginData {
  [AUTH_FIELDS.email]: string
  [AUTH_FIELDS.password]: string
  [AUTH_FIELDS.expiry]?: string
}

export interface Auth {
  accessToken: string
  exp: number
}

export interface LoginResponse {
  accessToken: string
}

export interface RequestError {
  error: string
}

export interface AccessTokenTestResponse {
  message: string
  token: {
    email: string
    iat: number
    exp: number
  }
}

export type AppId = string

export interface App {
  id: AppId
  name: string
  created: string
  logo: string
  users: User[]
}

export interface AppsResponse {
  apps: App[]
}

export type UserId = string

export interface User {
  id: UserId
  name: string
  email: string
  avatar: string
}

export interface UsersResponse {
  users: User[]
}

export interface AppsState {
  items: App[]
  isPosting: boolean
  isFetching: boolean
}

export interface UsersState {
  [key: string]: UsersInAppState
}

export interface UsersInAppState {
  items: User[]
  hasMore: boolean
  offset: number
}

export interface ProfileState {
  isLoggedIn: boolean
  isPosting: boolean
  isFetching: boolean
}

export type ErrorMessageState = string | null

export interface StoreState {
  apps: AppsState
  users: UsersState
  profile: ProfileState
  errorMessage: ErrorMessageState
}

export interface Action {
  type: string
  payload?: any
}
