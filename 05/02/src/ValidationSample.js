import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  input = React.createRef();
  handleFocus = () => {
    this.input.current.focus();
  };
  state = {
    password: '',
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '000',
    });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input type='password' ref={(ref) => (this.input = ref)} value={this.state.password} onChange={this.handleChange} className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
        <button onClick={this.handleButtonClick}>Validation</button>
      </div>
    );
  }
}

export default ValidationSample;
