import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Our Work</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">Foreman</h3>
          <p className="portfolio-description">
            A platform where users can book professionals like mechanics, electricians, and more.
          </p>
          <a href="https://whereismyforeman.netlify.app" className="portfolio-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">Scamsters</h3>
          <p className="portfolio-description">
            A fraud alert website to share and expose scams and scammers to help protect others.
          </p>
          <a href="https://scamsters.netlify.app" className="portfolio-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">Shopper Ecommerce</h3>
          <p className="portfolio-description">
            An e-commerce platform built with React for a seamless online shopping experience.
          </p>
          <a href="https://reactshoppers.netlify.app" className="portfolio-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
