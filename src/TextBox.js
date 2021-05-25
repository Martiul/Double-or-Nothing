import React from 'react';
import './css/text-box.css';

function TextBox(props) {
    return (
        <div className="text-box">
            <p>{props.statusText}</p>
        </div>
    )
}
export default TextBox;
