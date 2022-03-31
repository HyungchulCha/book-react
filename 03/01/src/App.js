import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const name = 'a';
    return (
      <Fragment>
        <div class='a'>{name}</div>
        <MyComponent />
      </Fragment>
    );
  }
}

export default App;
