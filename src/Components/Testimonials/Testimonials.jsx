import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p className="testimonial-text">"Great service! Highly recommend."</p>
          <p className="testimonial-author">- Venkat Rao</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Amazing experience and fantastic results."</p>
          <p className="testimonial-author">- Padma</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Professional and reliable. Would work with again."</p>
          <p className="testimonial-author">- Srinu Reddy</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
