import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import '../style/main.css';

class List extends Component {
  render() {
    var myList = [];
    for (var prop in this.props.movies.items) {
      if(myList.length < 13) {
        myList.push(<li key={prop}><p>{`${prop}: ${this.props.movies.items[prop]}`}</p></li>);
      }
  }
    return (
      <div className="list">
        <ul>
          {myList}
        </ul>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(List);
