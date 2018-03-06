import React, { Component } from 'react'
import List from './List'
import InputSet from './InputSet'

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
