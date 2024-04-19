import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {products.map(product => (
        <div key={product._id} className="card my-3" style={{ width: "18rem" }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>

  );
};

export default Product;
