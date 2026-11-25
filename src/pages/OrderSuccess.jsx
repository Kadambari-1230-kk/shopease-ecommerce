
import React from "react";
import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const {
    orderId,
    total,
    customerName
  } = location.state || {};

  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopEase!
        </p>

        {customerName && (
          <h3>Hello, {customerName}!</h3>
        )}

        <div className="order-details">
          <h3>Order Details</h3>

          <p>
            <strong>Order ID:</strong> {orderId || "Not available"}
          </p>

          <p>
            <strong>Total Amount:</strong> ₹{total ?? 0}
          </p>

          <p>
            <strong>Order Status:</strong> Confirmed
          </p>
        </div>

        <Link to="/products" className="continue-btn">
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;
