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

export interface LoginFailure {
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

export interface App {
  id: string
  name: string
  created: string
  logo: string
}

export interface AppsResponse {
  apps: App[]
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
}

export interface UsersResponse {
  users: User[]
}

export interface DataState {
  apps: App[]
  isPosting: boolean
  isFetching: boolean
}

export interface ProfileState {
  isLoggedIn: boolean
  isPosting: boolean
  isFetching: boolean
}

export type ErrorMessageState = string | null

export interface StoreState {
  data: DataState
  profile: ProfileState
  errorMessage: ErrorMessageState
}

export interface Action {
  type: string
  payload?: any
}
