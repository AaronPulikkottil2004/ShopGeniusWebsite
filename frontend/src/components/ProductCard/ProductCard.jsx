import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={`http://localhost:5000/images/${product.image}`}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg'; // Fallback image
          }}
        />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;