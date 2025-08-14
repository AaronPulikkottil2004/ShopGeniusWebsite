import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleChat }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">ShopGenius</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <button className="chat-btn" onClick={toggleChat}>
            <i className="fas fa-comment-dots"></i>
          </button>
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;