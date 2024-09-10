import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Name" required />
        <input type="email" className="contact-input" placeholder="Email" required />
        <textarea className="contact-textarea" placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
