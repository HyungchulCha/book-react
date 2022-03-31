import React, { Component } from 'react';

class Counter extends Component {
  /*
  constructor(props) {
    // constructor를 작성할 때는 반드시 super(props)를 호출해줘야 한다.
    // 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다.
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  */
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            /*
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState, props) => ({
              number: prevState.number + 1,
            }));
            */
            // setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 두 번째 파라미터로 콜백함수를 등록하여 작업을 처리할 수 있다.
            this.setState({ number: number + 1 }, () => {
              console.log(`callBack`);
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
