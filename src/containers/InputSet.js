import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input'
import * as MoviesAction from '../actions'
import { bindActionCreators } from 'redux'
import '../style/main.css';

class InputSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse(input) {
    const { retrieveMovies } = this.props;
    const result = retrieveMovies(input);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleKeyPress(target) {
    const { input } = this.state;
   if(target.charCode===13){
     this.handleResponse(input);
   }
 }

  render() {
    const { input } = this.state;
    const { handleResponse } = this.props;
    return (
      <div className="input-set">
        <Input movieValue={input} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} handleResponse={this.handleResponse}/>
      </div>
    );
  }
}

InputSet.propTypes = {
  movies: PropTypes.object,
  retrieveMovies: PropTypes.func
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, MoviesAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSet);
