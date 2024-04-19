import React from "react";

export default function ProductCard({ product }) {
  // Assuming the product has only one image, you can access it like this
  const imageUrl =  product.images[0].url || 'https://itechstore.co.in/uploads/products/15-hero.jpg';

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* Using imageUrl variable for the src attribute */}
      <img src={imageUrl} className="card-img-top" alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <a href="#" className="btn btn-primary">Buy now</a>
      </div>
    </div>
  );
}
