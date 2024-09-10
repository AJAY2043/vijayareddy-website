import React from 'react';
import './Footer.css';
import instgram_icon from '../../Assets/instagram_icon.png';
import pintester_icon from '../../Assets/pintester_icon.png';
import whatsapp_icon from '../../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>Vijaya Reddy's</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-about">
        <p>
          We provide cutting-edge solutions for modern businesses, focusing on innovation and 
          excellence. Our aim is to connect the world through advanced products and services that 
          empower businesses to reach their full potential.
        </p>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instgram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright &copy; 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
