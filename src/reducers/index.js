/*Copyright [2018] IBM Corp. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.*/

 import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
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
