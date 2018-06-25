import reducer from './profile'
import { CHECKING_AUTH, LOGGED_IN, LOGGED_OUT, LOGGING_IN } from '../actions'

const initialState = {
  isChecking: true,
  isLoggedIn: false,
  isPosting: false,
}

describe('reducers', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'SOME_ACTION',
    }

    expect(reducer(undefined, action)).toEqual(initialState)
  })

  it('should handle LOGGING_IN', () => {
    const action = {
      type: LOGGING_IN,
    }
    const expectedState = {
      isChecking: true,
      isLoggedIn: false,
      isPosting: true,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle CHECKING_AUTH', () => {
    const action = {
      type: CHECKING_AUTH,
    }

    expect(reducer(initialState, action)).toEqual(initialState)
  })

  it('should handle LOGGED_IN', () => {
    const action = {
      type: LOGGED_IN,
    }
    const expectedState = {
      isChecking: false,
      isLoggedIn: true,
      isPosting: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle LOGGED_OUT', () => {
    const action = {
      type: LOGGED_OUT,
    }
    const expectedState = {
      isChecking: false,
      isLoggedIn: false,
      isPosting: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
