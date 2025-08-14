import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductCard from '../components/ProductCard/ProductCard';
import '../pages/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="benefits-section">
        <div className="benefit-card">
          <i className="fas fa-shipping-fast"></i>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-undo"></i>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </section>
    </div>
  );
};

export default Home;