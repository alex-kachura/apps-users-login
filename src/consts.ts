export const BASE_URL = 'https://guarded-thicket-22918.herokuapp.com'
export const SESSION_EXPIRY = '10h'
export const AUTH_KEY = 'auth'
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export enum AUTH_FIELDS {
  email = 'email',
  password = 'password',
  expiry = 'expiry'
}
