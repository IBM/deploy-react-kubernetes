import React, { PropTypes, Component } from 'react'
import '../style/main.css';

export default class List extends Component {
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

List.propTypes = {
  movies: PropTypes.object.isRequired
}
