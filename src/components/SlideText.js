import React from 'react';
import './SlideText.css';

function SlideText (props) {
    return (
        <p className="SlideText" style={{color:props.textColor}}>{props.text}</p>
    )
}

export default SlideText;