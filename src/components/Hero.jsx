import React from 'react';
import HeroImage from './images/testing.jpg';


const Hero = () => {

    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${HeroImage})`}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ministry of Finance</h1>
            <p className="mb-5">Check out the Latest and Greatest News</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
  );
};

export default Hero