import React from 'react';
import './styles.css';

const categories = [
  { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/300x200?text=Electronics' },
  { id: 2, name: 'Home & Kitchen', image: 'https://via.placeholder.com/300x200?text=Home+Kitchen' },
  { id: 3, name: 'Fashion', image: 'https://via.placeholder.com/300x200?text=Fashion' },
  { id: 4, name: 'Sports', image: 'https://via.placeholder.com/300x200?text=Sports' },
];

const FeaturedCategories = () => {
  return (
    <section className="featured-categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;