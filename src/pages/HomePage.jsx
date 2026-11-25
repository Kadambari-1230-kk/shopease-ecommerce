
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <h1>Welcome to ShopEase</h1>

        <p>
          Discover amazing products at the best prices.
          Shop your favourite products today!
        </p>

        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </section>

      <section className="home-info">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div>
            <h3>🚚 Fast Delivery</h3>
            <p>Get your products delivered to your doorstep.</p>
          </div>

          <div>
            <h3>💰 Best Prices</h3>
            <p>Enjoy amazing products at affordable prices.</p>
          </div>

          <div>
            <h3>🛍️ Easy Shopping</h3>
            <p>Simple and convenient online shopping experience.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
