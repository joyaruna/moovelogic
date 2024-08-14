import React from 'react';
import SlideLogo from '../components/SlideLogo';
import SlideHeader from '../components/SlideHeader';
import SlideText from '../components/SlideText';
import './ThirdSlide.css';

function ThirdSlide() {
    return (
        <div className="ThirdSlide">
            <SlideHeader title="superfast food delivery to your door step" subtitle="moovelogic offers" />
            <SlideLogo srcUrl="images/slide-3.png" linkTo="/loginscreen" />
            <SlideText text="get your food orders steaming hot just like it's from the pot" />
        </div>
    )
}


export default ThirdSlide;