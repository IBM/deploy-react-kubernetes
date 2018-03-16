import { movies } from '../../../src/reducers'
import ActionTypes from '../../../src/constants'

const testObject = {
  title: 'Finding Nemo',
  year: '2002',
  plot: 'testing'
}

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(
      {
        isFetching: false,
        items: [],
        errorDetails: ''
      }
    )
  })
  it('should handle RETRIEVE_MOVIES_START', () => {
    expect(
      movies([], {
        type: ActionTypes.RETRIEVE_MOVIES_START,
      })
    ).toEqual(
      {
        isFetching: true
      }
    )
  })
  it('should handle RETRIEVE_MOVIES_ERROR', () => {
    expect(
      movies([], {
        type: ActionTypes.RETRIEVE_MOVIES_ERROR,
        payload: 'error',
      })
    ).toEqual(
      {
        isFetching: false,
        errorDetails: 'Error'
      }
    )
  })
  it('should handle RETRIEVE_MOVIES_SUCCESS', () => {
    expect(
      movies([], {
        type: ActionTypes.RETRIEVE_MOVIES_SUCCESS,
        payload: testObject,
      })
    ).toEqual(
      {
        isFetching: false,
        items: testObject
      }
    )
  })
})
