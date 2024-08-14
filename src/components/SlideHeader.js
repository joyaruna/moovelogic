import React from 'react';
import './SlideHeader.css'

function SlideHeader(props) {
    return (
        <div className="SlideHeader">
            <h3 className="subtitle" style={{color:props.subtitleColor}}>{props.subtitle}</h3>
            <h1 className="title" style={{color:props.titleColor}}>{props.title}</h1>
        </div>
    )

}

export default SlideHeader;