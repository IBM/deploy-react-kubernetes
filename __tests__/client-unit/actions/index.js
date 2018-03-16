
import {
  retrieveMoviesStart,
  retrieveMoviesError,
  retrieveMoviesSuccess,
} from '../../../src/actions'
import ActionTypes from '../../../src/constants'

const testObject = {
  title: 'Finding Nemo',
  year: '2002',
  plot: 'testing'
}

describe('actions', () => {
  it('should start retrieving movies', () => {
    const retrieveMoviesStartAction = {
      type: ActionTypes.RETRIEVE_MOVIES_START
    }
    expect(retrieveMoviesStart()).toEqual(retrieveMoviesStartAction)
  })
  it('should give an error', () => {
    const retrieveMoviesErrorAction = {
      type: ActionTypes.RETRIEVE_MOVIES_ERROR,
      payload: 'error'
    }
    expect(retrieveMoviesError('error')).toEqual(retrieveMoviesErrorAction)
  })
  it('should give a successful response', () => {
    const retrieveMoviesSuccessAction = {
      type: ActionTypes.RETRIEVE_MOVIES_SUCCESS,
      payload: testObject
    }
    expect(retrieveMoviesSuccess(testObject)).toEqual(retrieveMoviesSuccessAction)
  })
})
