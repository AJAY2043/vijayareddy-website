import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Key Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <i className="fas fa-cogs feature-icon"></i>
          <h3 className="feature-title">Detailed Info</h3>
          <p className="feature-description">Providing detailed insights about fraudulent activities to ensure maximum awareness.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line feature-icon"></i>
          <h3 className="feature-title">Reports & Stats</h3>
          <p className="feature-description">Get the latest reports and statistics on scam cases for better understanding.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-rocket feature-icon"></i>
          <h3 className="feature-title">Fast Response</h3>
          <p className="feature-description">Quick response services to help victims of scams recover and protect their assets.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
