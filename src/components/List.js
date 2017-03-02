import React, { PropTypes, Component } from 'react'
import '../style/main.css';

export default class List extends Component {
  render() {
    return (
      <div className="list">
      <p>Title: {JSON.stringify(this.props.movies.items.Title)}</p>
      <p>Year: {JSON.stringify(this.props.movies.items.Year)}</p>
      <p>Rated: {JSON.stringify(this.props.movies.items.Rated)}</p>
      <p>Released: {JSON.stringify(this.props.movies.items.Released)}</p>
      <p>Runtime: {JSON.stringify(this.props.movies.items.Runtime)}</p>
      <p>Genre: {JSON.stringify(this.props.movies.items.Genre)}</p>
      <p>Director: {JSON.stringify(this.props.movies.items.Director)}</p>
      <p>Actors: {JSON.stringify(this.props.movies.items.Actors)}</p>
      <p>Plot: {JSON.stringify(this.props.movies.items.Plot)}</p>
    </div>
    )
  }
}

List.propTypes = {
  movies: PropTypes.object.isRequired
}