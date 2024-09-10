// src/Pages/CollabrateWithMe.jsx
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './CollabrateWithMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faBullhorn,
  faUsers,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const CollabrateWithMe = () => {
  return (
    <>
      <Navbar />
      <div className="collaborate-page">
        <div className="collaborate-header">
          <h1>Collaborate with Me</h1>
          <p>
            Unlock the potential of your business through expert digital marketing strategies, tailored just for you.
            Let's collaborate and take your brand to new heights!
          </p>
        </div>

        <div className="collaborate-services">
          <h2>What I Offer</h2>
          <div className="service-list">
            <div className="service-item">
              <FontAwesomeIcon icon={faChartLine} className="service-icon" />
              <h3>SEO & Analytics</h3>
              <p>
                Boost your website’s visibility with top-notch SEO strategies and in-depth analytics, ensuring your
                business ranks high in search results.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
              <h3>Social Media Advertising</h3>
              <p>
                Create engaging ads on platforms like Facebook, Instagram, LinkedIn, and more to capture the right
                audience and drive results.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faUsers} className="service-icon" />
              <h3>Community Building</h3>
              <p>
                Build a loyal customer base through social media communities, targeted campaigns, and engaging content
                that speaks to your audience.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faHandshake} className="service-icon" />
              <h3>Collaboration & Consultation</h3>
              <p>
                Let's work together! I offer personalized consultations and collaborative partnerships to elevate your
                brand in the digital space.
              </p>
            </div>
          </div>
        </div>

        <div className="collaborate-cta">
          <h2>Why Work With Me?</h2>
          <p>
            With years of experience in <strong>SEO</strong>, <strong>digital marketing</strong>, and <strong>social
            media management</strong>, I have helped numerous businesses grow their online presence and reach their
            target audiences. Whether you're a small business or a large corporation, I tailor my services to meet your
            specific goals.
          </p>
          <p>
            Ready to take the next step? Let’s collaborate and create something amazing together.
          </p>
        </div>

        <div className="collaborate-contact">
          <h2>Get in Touch</h2>
          <p>
            Whether you need expert guidance in digital marketing or want to discuss a potential collaboration, feel
            free to reach out to me. I'm open to freelance opportunities, consulting, and long-term partnerships.
          </p>
          <button className="contact-btn"onClick={()=>alert(9182945491)}>Contact Me</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollabrateWithMe;
