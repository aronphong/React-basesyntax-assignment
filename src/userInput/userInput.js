import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: '2px solid black',
        fontSize: '1em',
        padding: '5px',
        textAlign: 'center'
    };
    return (
        <div className="userInput">
            <input type="text" style={inputStyle}
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    )
}

export default userInput;
