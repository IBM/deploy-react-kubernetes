import fetch from 'isomorphic-fetch'

export const RETRIEVE_MOVIES_START = 'RETRIEVE_MOVIES_START'
export const RETRIEVE_MOVIES_ERROR = 'RETRIEVE_MOVIES_ERROR'
export const RETRIEVE_MOVIES_SUCCESS = 'RETRIEVE_MOVIES_SUCCESS'

function retrieveMoviesStart() {
  return {
    type: RETRIEVE_MOVIES_START
  };
}

function retrieveMoviesError(error) {
  return {
    type: RETRIEVE_MOVIES_ERROR,
    payload: error
  };
}

function retrieveMoviesSuccess(response) {
  return {
    type: RETRIEVE_MOVIES_SUCCESS,
    payload: response
  };
}

export function retrieveMovies(userInput) {
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
