import PropTypes from 'prop-types';

//const MyComponent = (props) => {
//const { name, children } = props;
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{favoriteNumber}</h1>
      <h1>{children}</h1>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '홍길동',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
  /*
  array
  arrayOf(다른 PropType)
  bool
  func
  number
  object
  string
  symbol
  node : 렌더링 할 수 있는 모든 것(숫자, 문자열, jsx, children 등)
  instanceOf(클래스) : 특정 클래스의 인스턴스(예: instanceOf(MyClass))
  oneOf(['dog', 'cat'])
  oneOfType([React.PropTypes.string, PropTypes.number])
  objectOf(React.PropTypes.number)
  shape({ name: PropTypes.string, num: PropTypes.number }) : 주어진 스키마를 가진 객체
  any
  */
};

export default MyComponent;
