import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import InputSet from './InputSet';
import * as MoviesAction from '../actions'
import { bindActionCreators } from 'redux'
import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Find That Movie</h1>
        <InputSet />
        <List movies={this.props.movies} />
      </div>
    );
  }
}

export default App;
