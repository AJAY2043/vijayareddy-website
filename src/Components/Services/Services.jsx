import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <i className="fas fa-cogs service-icon"></i>
          <h3 className="service-title">Website Development</h3>
          <p className="service-description">
            We specialize in creating responsive, user-friendly websites tailored to your business needs. Our websites are designed with the latest technologies and optimized for performance, helping you create a strong online presence.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-chart-line service-icon"></i>
          <h3 className="service-title">Ads Running</h3>
          <p className="service-description">
            Boost your business visibility with our targeted ad campaigns. We manage Google Ads, Facebook Ads, and other platforms to ensure your ads reach the right audience, driving traffic and conversions efficiently.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-rocket service-icon"></i>
          <h3 className="service-title">SEO (Search Engine Optimization)</h3>
          <p className="service-description">
            Our SEO experts help you rank higher in search engine results, driving organic traffic to your website. We focus on keyword optimization, content improvement, and technical SEO to ensure your site is easily discoverable by search engines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
