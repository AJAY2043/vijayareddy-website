import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a freelance organization specializing in innovative solutions and exceptional services. With a passion for excellence, we strive to deliver the highest quality products and services to our clients. Our team of experts is dedicated to exceeding your expectations and providing unparalleled customer satisfaction.
            </p>
            <p>
              Our mission is to drive progress through technology and creativity. Whether you are looking for cutting-edge solutions, reliable support, or strategic insights, we are here to help you achieve your goals.
            </p>
          </div>
          <div className="about-icons">
            <div className="icon-item">
              <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
              <h3>Efficiency</h3>
              <p>Streamline your operations with our efficient solutions.</p>
            </div>
            <div className="icon-item">
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <h3>Teamwork</h3>
              <p>Collaborate with our dedicated team to achieve your objectives.</p>
            </div>
            <div className="icon-item">
              <FontAwesomeIcon icon={faGlobeAmericas} className="icon" />
              <h3>Global Reach</h3>
              <p>Expand your business with our global network and expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
