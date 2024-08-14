import React from 'react';
import SlideHeader from "../components/SlideHeader";
import SlideLogo from '../components/SlideLogo';
import SlideText from '../components/SlideText';
import './FirstSlide.css'

function FirstSlide() {
    return (
        <div className="FirstSlide">
           <SlideHeader title='Why not "effortlessly"' subtitle="Deliveries shouldn't be a pain" subtitleColor="#ccc"  titleColor="#181818" />
            <SlideLogo srcUrl="images/slide-1.png" linkTo="/secondslide" />
            <SlideText text="We can take your packages and products to your desired location effortlessly and  safely..." textColor="#525151" />
        </div>
    )
}

export default FirstSlide;