import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

function Splash () {
    return (
        <div className="Splash">
            <Link to="/firstslide">
                 <img src = "images/logo-white-bg.png" class="logo" alt ="logo"></img>
            </Link>
        </div>
    )
}

export default Splash;