
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";

function Products() {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        {["All", "Shoes", "Accessories", "Bags"].map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>

              <p>₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

              <Link to={`/products/${product.id}`}>
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}

export default Products;
