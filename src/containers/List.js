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
