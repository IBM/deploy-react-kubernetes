import React, { Component, PropTypes } from 'react'
import '../style/main.css';

class Input extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  //Callbacks for when user input changes or 'search' is clicked
  handleChange(e) {
    const { handleChange } = this.props;
    handleChange(e);
  }

  handleKeyPress(target) {
    const { handleKeyPress } = this.props;
    handleKeyPress(target);
  }

  handleResponse() {
    const { handleResponse, input } = this.props;
    handleResponse(input);
  }

  render() {
    const { input } = this.props;
    return (
      <div className="set">
        <input type="text" className="input" placeholder="Enter movie..." value={input} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <button className="button" onClick={this.handleResponse}>Search</button>
      </div>
    );
  }
}

Input.PropTypes = {
  input: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleResponse: PropTypes.func,
}

export default Input;
