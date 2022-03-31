import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('hi');
    const onClickLeave = () => setMessage('bye');

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
        </div>
    );
};

export default Say;
