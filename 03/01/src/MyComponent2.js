import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MyComponent2 extends Component {
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

MyComponent2.defaultProps = {
  name: '홍길동',
};

MyComponent2.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent2;
