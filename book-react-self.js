/* React Component Return Value */
function ReactComponentReturnValue() {
  return <MyComponent title='a' />;
  return <p>hi</p>;
  return 'a';
  return 1;
  return [<p key='a'>a</p>, <p key='b'>b</p>];
  return (
    <React.Fragment>
      <p>a</p>
    </React.Fragment>
  );
  return (
    <>
      <p>a</p>
    </>
  );
  return null;
  return false;
  return ReactDOM.createPortal(<p>a</p>, domNode);
}

/* useState */
