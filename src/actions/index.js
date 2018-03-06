import fetch from 'isomorphic-fetch';
import ActionTypes from '../constants';

function retrieveMoviesStart() {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_START,
  };
}

function retrieveMoviesError(error) {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_ERROR,
    payload: error
  };
}

function retrieveMoviesSuccess(response) {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_SUCCESS,
    payload: response
  };
}

export function retrieveMovies(userInput) {
  return dispatch => {
  // Insert your api key on line 30
  const URL = `http://www.omdbapi.com/?apikey=d8c6a83b&t=${userInput}`;
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
