import reducer from './errorMessage'
import { RESET_ERROR_MESSAGE } from '../actions'

const initialState = null

describe('reducers', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'SOME_ACTION',
    }

    expect(reducer(undefined, action)).toEqual(initialState)
  })

  it('should handle RESET_ERROR_MESSAGE', () => {
    const action = {
      payload: {
        message: 'foo',
      },
      type: 'SOME_ACTION',
    }

    expect(reducer(initialState, action)).toEqual('foo')
  })

  it('should handle RESET_ERROR_MESSAGE', () => {
    const action = {
      payload: {
        error: 'foo',
      },
      type: 'SOME_ACTION',
    }

    expect(reducer(initialState, action)).toEqual('foo')
  })

  it('should handle RESET_ERROR_MESSAGE with no payload', () => {
    const action = {
      type: RESET_ERROR_MESSAGE,
    }

    expect(reducer(initialState, action)).toEqual(initialState)
  })
})
