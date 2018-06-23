export const BASE_URL = 'https://guarded-thicket-22918.herokuapp.com'

export const USERS_LIMIT = 25

export const SESSION_EXPIRY_PERIOD = '10h'
export const AUTH_TOKEN_KEY = 'token'
export const AUTH_EXPIRY_KEY = 'exp'

export enum AUTH_FIELDS {
  email = 'email',
  password = 'password',
  expiry = 'expiry'
}

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
