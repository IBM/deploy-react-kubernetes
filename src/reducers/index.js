import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import ActionTypes from '../constants'

const initialState = {
  isFetching: false,
  items: [],
  errorDetails: ''
};

function movies(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RETRIEVE_MOVIES_START:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.RETRIEVE_MOVIES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errorDetails: 'Error'
      })
    case ActionTypes.RETRIEVE_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  router: routerStateReducer,
  movies: movies
});

export default rootReducer;
