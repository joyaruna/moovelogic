import React from 'react';
import SlideHeader from "../components/SlideHeader";
import SlideText from '../components/SlideText';
import './LoginScreen.css';

function LoginScreen() {
    return (
        <div className="LoginScreen">
            <div>
                <SlideHeader title="Let's get you signed in" subtitle="welcome" subtitleColor="#545252" titleColor="#181818" />
                <img src="images/logo-white-bg.png" className="login-logo" alt="brand-logo" />
            </div>
            <form>
                <div className="input-details">
                    <label className="login-details" htmlFor="#username">Phone No/Email Address</label>
                    <input type="text" className="input-box" id="username"></input>
                </div>
                <div className="input-details">
                    <label className="login-details" htmlFor="#password">Password</label>
                    <input type="password" className="input-box" id="password"></input>
                </div>
                <div>
                    <SlideText text="The provided login details is not valid. Please verify, then try again" textColor="#FF1111" />
                    <p class="login-help"><a href="#">Forgot password?</a> | <a href="#">Use Biometrics</a></p>
                    <p class="login-help">New User? <a href="#">Sign Up</a></p>
                    <p class="login-help"><a href="#">help?</a></p>
                    <button type="submit" className="login-button">Sign In</button>
                </div>

            </form>
        </div>
    )
}

export default LoginScreen;