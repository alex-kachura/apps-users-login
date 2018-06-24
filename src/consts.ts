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

export const MODAL_STYLE = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    boxShadow: '0 1px 2px rgba(0, 0, 0, .24)',
  },
  overlay: {
    backgroundColor: 'rgba(243, 243, 243, .6)',
  },
}
