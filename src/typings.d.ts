import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { AUTH_FIELDS } from './consts'

declare module 'redux' {
  export type GenericStoreEnhancer = any;
}

export interface LoginData {
  [AUTH_FIELDS.email]: string
  [AUTH_FIELDS.password]: string
  [AUTH_FIELDS.expiry]?: string
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
}

export interface AppUpdate {
  id: AppId
  name: string
  logo: string
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

export interface ProfileState {
  isLoggedIn: boolean
  isChecking: boolean
  isPosting: boolean
}

export interface AppsState {
  items: App[]
  isPosting: boolean
  isFetching: boolean
}

export interface UsersState {
  byAppId: UsersByAppIdState
  isFetching: boolean
}

interface UsersByAppIdState {
  [key: string]: UsersInAppState
}

export interface UsersInAppState {
  items: User[]
  hasMore: boolean
  offset: number
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

export interface ListAction<T> {
  title: string
  icon: IconProp

  fn(item: T, ...args: any[]): any
}

export type ListActions<T> = ListAction<T>[]
