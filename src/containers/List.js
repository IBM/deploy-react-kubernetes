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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import createList from '../utils'

class List extends Component {
  render() {
    const { movies } = this.props;
    const myList = createList(movies);
    return (
      <div className="list">
        {myList.length > 0 && <ListItem list={myList} />}
    </div>
    );
  }
}

// Map Redux state to props
function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(List);
