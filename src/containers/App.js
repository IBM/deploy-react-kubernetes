import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
// import Movies from '../components/Movies'
import * as MoviesAction from '../actions/action'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: '',
      getMovies: false
    }
  }

  retrieveMovies(callback) {
    this.props.retrieveMovies(this.state.movie);
    this.setState({ getMovies: true });
  }

  handleChange(e) {
    this.setState({ movie: e.target.value });
    if(this.state.movie === '') {
      this.setState({ getMovies: false });
    }
  }

  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
        <input type="text" className="movie-info" value={this.state.movie} onChange={this.handleChange.bind(this)}/>
        <button onClick={() => this.retrieveMovies()}/>
        { this.state.getMovies ? <p>{JSON.stringify(this.props.movies.items, undefined, 4)}</p> : null }
      </div>
    );
  }
}

App.propTypes = {
  movies: PropTypes.object.isRequired,
  retrieveMovies: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, MoviesAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);