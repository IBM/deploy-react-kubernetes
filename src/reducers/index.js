// import { combineReducers } from 'redux'
import ActionTypes from '../constants'
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

const initialState = {
  isFetching: false,
  items: [],
  errorDetails: '',
  result: ''
};

// export const handlers = {
//   [ActionTypes.RETRIEVE_MOVIES_START](state, action) {
//     return {
//       ...state,
//       isFetching: true,
//     };
//   },
//   [ActionTypes.RETRIEVE_MOVIES_ERROR](state, action) {
//     return {
//       ...state,
//       isFetching: false,
//       errorDetails: action.payload.error,
//     };
//   },
//   [ActionTypes.RETRIEVE_MOVIES_SUCCESS](state, action) {
//     return {
//       ...state,
//       isFetching: false,
//       items: action.payload.response,
//     };
//   },
//   [ActionTypes.RETRIEVE_MOVIES_SUCCESS](state, action) {
//     return {
//       ...state,
//       results: action.payload.response,
//     };
//   },
// };

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
      case ActionTypes.SET_RESULTS:
      return Object.assign({}, state, {
        results: action.payload,
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
