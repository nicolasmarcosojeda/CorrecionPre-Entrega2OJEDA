import React from 'react';

const ProductCard = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.imageUrl} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price}</p>
            <button className="btn btn-primary">Lo Necesito</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
