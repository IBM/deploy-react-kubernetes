import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import * as MoviesAction from '../actions/action'
import { bindActionCreators } from 'redux'
import '../style/main.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      movie: '',
      getMovies: false
    }
  }

  retrieveMovies(callback) {
    console.log(this.state.movie);
    if(this.props.retrieveMovies(this.state.movie)) {
      this.setState({getMovies: true});
    }
  }

  handleChange(e) {
    this.setState({ movie: e.target.value });
    if(this.state.movie === '') {
      this.setState({ getMovies: false });
    }
  }

  handleKeyPress(target) {
   if(target.charCode===13){
     this.retrieveMovies();
   }
 }

  render() {
    return (
      <div className="container">
        <h1>Find That Movie</h1>
        <div className="set">
          <input type="text" className="input" placeholder="Enter movie..." value={this.state.movie} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <button className="button" onClick={() => this.retrieveMovies()}>Search</button>
        </div>
        { this.state.getMovies ?
          <List movies={this.props.movies} />
        : null }
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
