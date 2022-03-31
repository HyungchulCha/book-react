import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';

class App extends Component {
  render() {
    const name = 'a';
    return (
      <Fragment>
        <div className='a'>{name}</div>
        {/* <MyComponent /> */}
        {/* <MyComponent name={3}>자식텍스트</MyComponent> */}
        <MyComponent name={'ckgudcjf1'} favoriteNumber={11}>
          자식텍스트1
        </MyComponent>
        <MyComponent2 name={'ckgudcjf2'} favoriteNumber={12}>
          자식텍스트2
        </MyComponent2>
        <MyComponent3 name={'ckgudcjf3'} favoriteNumber={13}>
          자식텍스트3
        </MyComponent3>
      </Fragment>
    );
  }
}

export default App;
