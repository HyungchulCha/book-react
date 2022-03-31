import { Fragment } from 'react';
import './App.css';

function App() {
  const name = 'a';
  const age = 1;
  const number = 0;
  const not = undefined;
  const style = {
    backgroundColor: 'red',
    color: 'aqua',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: 16, // 단위를 생략하면 px로 지정된다.
  };
  return (
    <Fragment>
      <h1 style={style}>hi</h1>
      <h1
        style={{
          backgroundColor: 'red',
          color: 'aqua',
          fontSize: '24px',
          fontWeight: 'bold',
          padding: 16, // 단위를 생략하면 px로 지정된다.
        }}
      >
        {name}
      </h1>
      {age === 1 ? <h1 className="css-test">1</h1> : <h1>2</h1>}
      {number && <h1>falsy</h1>}
      <h1>
        {not /* 화면에 감싼 태그말고 내용은 ㄴ아무것도 출력되지 않는다. */}
      </h1>
      <br />
      <input />
      /* 주석 그대로 노출된다. */
      {/* 주석작성 */}
    </Fragment>
  );
}

export default App;
