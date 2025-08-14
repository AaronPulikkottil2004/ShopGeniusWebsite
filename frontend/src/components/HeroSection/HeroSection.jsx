import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to ShopGenius</h1>
        <p>Your AI-powered shopping experience</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;