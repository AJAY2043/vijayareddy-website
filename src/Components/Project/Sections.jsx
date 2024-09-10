import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Features from '../Services/Features'; // Assuming Features is a separate component in Services folder
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';
import Contact from '../Contact/Contact';

const Sections = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
};

export default Sections;
