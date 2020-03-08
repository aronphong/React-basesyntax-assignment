import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
    return (
      <div className='UserOutput'>
        <p>UserName: {props.userName}</p>
        <p>Nice to meet you! </p>
      </div>
    );
}

export default userOutput;