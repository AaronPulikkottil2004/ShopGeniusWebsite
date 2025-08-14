import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopEase AI</h3>
          <p>Your smart shopping assistant</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>support@shopease.ai</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShopEase AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;