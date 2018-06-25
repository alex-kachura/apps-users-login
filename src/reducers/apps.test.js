import reducer from './apps'
import { APP_UPDATED, APPS_RECEIVED, FETCHING_APPS, REQUEST_FAILED, UPDATING_APP } from '../actions'

const initialState = {
  isFetching: true,
  isPosting: false,
  items: [],
}

describe('reducers', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'SOME_ACTION',
    }

    expect(reducer(undefined, action)).toEqual(initialState)
  })

  it('should handle FETCHING_APPS', () => {
    const action = {
      type: FETCHING_APPS,
    }

    expect(reducer(initialState, action)).toEqual(initialState)
  })

  it('should handle APPS_RECEIVED', () => {
    const action = {
      payload: [{
        created: '2018-01-31T16:21:24.001Z',
        id: '7964112f-c961-4fd4-8754-30dcd8cd1863',
        logo: 'http://lorempixel.com/48/48/animals',
        name: 'Ergonomic Wooden Chair',
      }],
      type: APPS_RECEIVED,
    }
    const expectedState = {
      isFetching: false,
      isPosting: false,
      items: [{
        created: '2018-01-31T16:21:24.001Z',
        id: '7964112f-c961-4fd4-8754-30dcd8cd1863',
        logo: 'http://lorempixel.com/48/48/animals',
        name: 'Ergonomic Wooden Chair',
      }],
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle REQUEST_FAILED', () => {
    const action = {
      type: REQUEST_FAILED,
    }
    const expectedState = {
      isFetching: false,
      isPosting: false,
      items: [],
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle UPDATING_APP', () => {
    const action = {
      type: UPDATING_APP,
    }
    const expectedState = {
      isFetching: true,
      isPosting: true,
      items: [],
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle APP_UPDATED', () => {
    const action = {
      type: APP_UPDATED,
    }

    expect(reducer(initialState, action)).toEqual(initialState)
  })
})
