
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product Not Found!</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <Link to="/products" className="back-btn">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
