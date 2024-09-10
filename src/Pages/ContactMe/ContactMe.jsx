// src/Pages/ContactMe.jsx
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ContactMe.css';

const ContactMe = () => {
  const handleContactClick = () => {
    alert('Contact Number: 9182945491');
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>
            I'm here to help you grow your business with my expertise in digital marketing, SEO, and social media
            advertising. Feel free to reach out to discuss collaborations or consultations!
          </p>
        </div>

        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p>
            You can contact me via phone or Whatsapp I look forward to connecting with you!
          </p>
          <button className="contact-btn" onClick={handleContactClick}>
            Contact Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
