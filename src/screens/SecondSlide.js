import React from 'react';
import SlideHeader from '../components/SlideHeader';
import SlideLogo from '../components/SlideLogo';
import SlideText from '../components/SlideText';
import './SecondSlide.css';

function SecondSlide() {
    return (
        <div className="SecondSlide">
            <SlideHeader title='Get deliveries... "Stress free"' subtitle="Do you know you can" />
            <SlideLogo srcUrl="images/slide-2.png"  linkTo="/thirdslide" />
            <SlideText text="Let's take the load off your shoulders. We are just a click away..." />
        </div>
    )
}


export default SecondSlide;