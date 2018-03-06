import fetch from 'isomorphic-fetch'
import ActionTypes from '../constants'

// Actions for retrieving movie
const retrieveMoviesStart = () => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_START,
  };
}

const retrieveMoviesError = (error) => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_ERROR,
    payload: error
  };
}

const retrieveMoviesSuccess = (response) => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_SUCCESS,
    payload: response
  };
}

export const retrieveMovies = (userInput) => {
  return dispatch => {
  // Insert your api key on line 30
  const URL = `http://www.omdbapi.com/?apikey=[apiKey]&t=${userInput}`;
  let request = new Request(URL, {
    method: 'GET',
  });

  dispatch(retrieveMoviesStart())
  return fetch(request)
    .then(response => response.json())
    .then(result => dispatch(retrieveMoviesSuccess(result)))
    .catch(error => dispatch(retrieveMoviesError(error)));
  };
}
