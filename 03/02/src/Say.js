import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hi');
  const onClickLeave = () => setMessage('bye');
  const [color, setColor] = useState('black');

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>
      <button onClick={() => setColor('red')}>red</button>
      <button onClick={() => setColor('green')}>green</button>
      <button onClick={() => setColor('blue')}>blue</button>
    </div>
  );
};

export default Say;
