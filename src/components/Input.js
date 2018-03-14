/*Copyright [2018] IBM Corp. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
