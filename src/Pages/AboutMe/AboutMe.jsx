import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './AboutMe.css';
import hero_img from '../../Assets/img-3.jpg'; // Import the hero image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faChild,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="about-me">
        <div className="hero-image-container">
          <img src={hero_img} alt="Hero" className="hero-image" />
        </div>
        <div className="container">
          <h1 className="about-title">About Me</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm <strong>Vijaya Reddy</strong>, a passionate{' '}
                <strong>Digital Marketing Expert</strong> with a journey that began in a small village. Since my
                school days, I've always been a top performer, achieving high education levels compared to others
                in my hometown.
              </p>
              <p>
                I am married to <strong>Ramireddy Varra</strong>, a civil engineer who is currently a Team leader
                at Lasa Company, working on the NHAI project on the Khammam-Kodada highway. Together, we've
                navigated through various challenges and accomplishments.
              </p>
              <p>
                After nearly 10 years of patience due to health issues, we were finally blessed with our son,{' '}
                <strong>Manas Sai Reddy</strong>. He's now in 5th grade and is incredibly intelligent and
                hyperactive, bringing joy and excitement to our lives.
              </p>
              <p>
                Inspired by the new chapter in our lives, I embarked on learning <strong>Digital Marketing</strong>.
                Now, I specialize in <strong>SEO, website ads, and social media marketing</strong> across platforms
                like Google, Facebook, Instagram, YouTube, LinkedIn, Pinterest, and many others. I offer freelance
                services and am actively looking for opportunities to collaborate and contribute to dynamic teams.
              </p>
            </div>
            <div className="about-icons">
              <div className="icon-item">
                <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                <h3>Education</h3>
                <p>Top performer since school days, achieving high education levels.</p>
              </div>
              <div className="icon-item">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <h3>Professional Journey</h3>
                <p>Expert in Digital Marketing, specializing in SEO and social media ads.</p>
              </div>
              <div className="icon-item">
                <FontAwesomeIcon icon={faChild} className="icon" />
                <h3>Family</h3>
                <p>Wife and mother, blessed with a wonderful son, Manas Sai Reddy.</p>
              </div>
              <div className="icon-item">
                <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                <h3>Freelancer</h3>
                <p>Available for freelance projects and looking for new opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
