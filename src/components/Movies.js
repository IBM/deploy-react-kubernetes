import React, { PropTypes, Component } from 'react'

export default class Movies extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movie, i) =>
          <li key={i}>{movie}</li>
        )}
      </ul>
    )
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}