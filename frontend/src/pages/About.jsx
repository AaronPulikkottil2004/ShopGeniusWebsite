import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About ShopGenius</h1>
      <p>
        ShopGenius is your AI-powered shopping assistant that helps you find the best products
        and deals. Our intelligent chatbot can answer any questions about our products,
        help with orders, and provide personalized recommendations.
      </p>
      <div className="about-features">
        <div className="feature">
          <h3>AI-Powered Assistance</h3>
          <p>Get instant answers to all your shopping questions</p>
        </div>
        <div className="feature">
          <h3>Wide Selection</h3>
          <p>Thousands of products across multiple categories</p>
        </div>
        <div className="feature">
          <h3>Secure Shopping</h3>
          <p>100% safe and secure checkout process</p>
        </div>
      </div>
    </div>
  );
};

export default About;