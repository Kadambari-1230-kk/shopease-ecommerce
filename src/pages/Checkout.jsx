
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice, setCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderId = "SE" + Date.now().toString().slice(-6);
    const orderTotal = totalPrice;

    setCart([]);

    navigate("/order-success", {
      state: {
        orderId: orderId,
        total: orderTotal,
        customerName: name
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your cart is empty!</h2>
        <Link to="/products">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <h3>Total Amount: ₹{totalPrice}</h3>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
