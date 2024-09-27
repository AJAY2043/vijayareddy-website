import React from 'react';
import './Hero.css';
import hero_img from '../../Assets/hero-img.jpg';



const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Vijaya Reddy's World</h1>
        <h2 className="hero-subtitle">Exploring Creativity and Innovation</h2>
        <p className="hero-description">
          Dive into a world of creativity and explore innovative solutions with Vijay Reddy. Whether you're looking for inspiring ideas, creative collaborations, or simply want to connect, you're in the right place. Join us on this exciting journey!
        </p>
      </div>
      <img src={hero_img} alt="Hero" className="hero-image" />
    </div>
  );
};

export default Hero;
