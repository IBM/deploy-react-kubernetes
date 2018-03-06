import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from './List'
import InputSet from './InputSet';
import * as MoviesAction from '../actions'
import { bindActionCreators } from 'redux'
import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Movie Finder</h1>
        <InputSet />
        <List />
      </div>
    );
  }
}

export default App;
