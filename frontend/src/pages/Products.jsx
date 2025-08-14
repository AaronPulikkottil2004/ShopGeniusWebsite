import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Products.css';

const Products = () => {
  // This would normally fetch products from an API
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "Headphones.jpeg",
      rating: 4.5,
      category: "Electronics"
    },
    {
      id: 2,
            name: "Smart Watch",
            price: 199.99,
            image: "Smart watch.jpg",
            rating: 4.2,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 79.99,
            image: "Running Shoes.jpg",
            rating: 4.7,
            category: "Fashion"
        },
        {
            id: 4,
            name: "Backpack",
            price: 49.99,
            image: "Backpack.jpg",
            rating: 4.3,
            category: "Fashion"
        },
        {      id: 5,
            name: "Bluetooth Speaker",
            price: 59.99,
            image: "Bluetooth Speaker.jpg",
            rating: 4.0,
            category: "Electronics"}
    // Add more products as needed
  ];

  return (
    <div className="products-page">
      <h1>All Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;