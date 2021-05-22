import React from 'react';
import './css/TextBox.css';

function TextBox(props) {
    return (
        <div className="TextBox">
            <p>{props.statusText}</p>
        </div>
    )
}
export default TextBox;
