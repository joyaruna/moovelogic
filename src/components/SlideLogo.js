import React from 'react';
import { Link } from 'react-router-dom';
import './SlideLogo.css';

function SlideLogo(props) {
    return (
        <div className="SlideLogo">
            <Link to={props.linkTo}>
                <img src={props.srcUrl} alt="slide"></img>
            </Link>
        </div>
    )

}

export default SlideLogo;