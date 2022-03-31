import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MyComponent3 extends Component {
  static defaultProps = {
    name: '홍길동',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{favoriteNumber}</h1>
        <h1>{children}</h1>
      </div>
    );
  }
}

export default MyComponent3;
