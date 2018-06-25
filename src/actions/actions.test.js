import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {
  APP_UPDATED,
  APPS_RECEIVED,
  CHECKING_AUTH,
  fetchApps,
  FETCHING_APPS,
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING_IN,
  login,
  REQUEST_FAILED,
  RESET_ERROR_MESSAGE,
  resetErrorMessage,
  testAccessToken,
  updateApp,
  UPDATING_APP,
} from './index'
import { AUTH_EXPIRY_KEY, AUTH_FIELDS, AUTH_TOKEN_KEY } from '../consts'

const mockStore = configureMockStore([thunk])
const mockAuth = {
  [AUTH_FIELDS.email]: 'foo',
  [AUTH_FIELDS.password]: 'bar',
  [AUTH_FIELDS.expiry]: '10s',
}
const mockApp = {
  id: 'foo',
  logo: 'bar',
  name: 'baz',
}

describe('actions', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates LOGGED_IN after successful login', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {
          accessToken: 'qux',
        },
        status: 200,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: LOGGING_IN },
      { type: LOGGED_IN },
    ]

    return store.dispatch(login(mockAuth)).then(() => {
      expect(localStorage.getItem(AUTH_TOKEN_KEY)).toEqual('qux')
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates LOGGED_OUT after unsuccessful login', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {},
        status: 404,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: LOGGING_IN },
      {
        payload: new Error('Request failed with status code 404'),
        type: REQUEST_FAILED,
      },
    ]

    return store.dispatch(login(mockAuth)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates LOGGED_IN after successful access token test', () => {
    const store = mockStore({})
    const expiry = '10s'
    const expectedActions = [
      { type: CHECKING_AUTH },
      { type: LOGGED_IN },
    ]

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: { token: { exp: expiry } },
        status: 200,
      })
    })

    return store.dispatch(testAccessToken()).then(() => {
      expect(localStorage.getItem(AUTH_EXPIRY_KEY)).toEqual(expiry)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates LOGGED_OUT after unsuccessful access token test', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {},
        status: 404,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: CHECKING_AUTH },
      { type: LOGGED_OUT },
    ]

    return store.dispatch(testAccessToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates APPS_RECEIVED after successfully fetching apps', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {
          apps: [],
        },
        status: 200,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: FETCHING_APPS },
      {
        payload: [],
        type: APPS_RECEIVED,
      },
    ]

    return store.dispatch(fetchApps()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REQUEST_FAILED after fetching apps errors', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {},
        status: 404,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: FETCHING_APPS },
      {
        payload: new Error('Request failed with status code 404'),
        type: REQUEST_FAILED,
      },
    ]

    return store.dispatch(fetchApps()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates APP_UPDATED after successfully updating app', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {},
        status: 200,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: UPDATING_APP },
      { type: APP_UPDATED },
    ]

    return store.dispatch(updateApp(mockApp)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REQUEST_FAILED after updating app errors', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: {},
        status: 404,
      })
    })

    const store = mockStore({})
    const expectedActions = [
      { type: UPDATING_APP },
      {
        payload: new Error('Request failed with status code 404'),
        type: REQUEST_FAILED,
      },
    ]

    return store.dispatch(updateApp(mockApp)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates RESET_ERROR_MESSAGE', () => {
    const store = mockStore({})
    const expectedActions = [
      { type: RESET_ERROR_MESSAGE },
    ]

    store.dispatch(resetErrorMessage())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
