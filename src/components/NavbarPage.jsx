
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          ShopEase
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">
            Cart 🛒 ({totalItems})
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
