import reducer from './users'
import { FETCHING_USERS, REQUEST_FAILED, USERS_RECEIVED } from '../actions'
import { USERS_LIMIT } from '../consts'

const initialState = {
  byAppId: {},
  isFetching: false,
}

describe('reducers', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'SOME_ACTION',
    }

    expect(reducer(undefined, action)).toEqual(initialState)
  })

  it('should handle FETCHING_USERS', () => {
    const action = {
      type: FETCHING_USERS,
    }
    const expectedState = {
      byAppId: {},
      isFetching: true,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle REQUEST_FAILED', () => {
    const action = {
      type: REQUEST_FAILED,
    }
    const expectedState = {
      byAppId: {},
      isFetching: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle USERS_RECEIVED', () => {
    const action = {
      payload: {
        appId: 'foo',
        items: ['bar'],
      },
      type: USERS_RECEIVED,
    }
    const expectedState = {
      byAppId: {
        'foo': {
          hasMore: false,
          items: ['bar'],
          offset: 0,
        },
      },
      isFetching: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle USERS_RECEIVED hasMore', () => {
    const items = new Array(USERS_LIMIT)
    const action = {
      payload: {
        appId: '7964112f-c961-4fd4-8754-30dcd8cd1863',
        items,
      },
      type: USERS_RECEIVED,
    }
    const expectedState = {
      byAppId: {
        '7964112f-c961-4fd4-8754-30dcd8cd1863': {
          hasMore: true,
          items,
          offset: 0,
        },
      },
      isFetching: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle USERS_RECEIVED offset', () => {
    const offset = 5
    const state = {
      byAppId: {
        '7964112f-c961-4fd4-8754-30dcd8cd1863': {
          hasMore: true,
          items: [],
          offset,
        },
      },
      isFetching: false,
    }
    const action = {
      payload: {
        appId: '7964112f-c961-4fd4-8754-30dcd8cd1863',
        items: [],
      },
      type: USERS_RECEIVED,
    }
    const expectedState = {
      byAppId: {
        '7964112f-c961-4fd4-8754-30dcd8cd1863': {
          hasMore: false,
          items: [],
          offset: offset + USERS_LIMIT,
        },
      },
      isFetching: false,
    }

    expect(reducer(state, action)).toEqual(expectedState)
  })
})
