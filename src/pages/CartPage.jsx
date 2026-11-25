
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty!</p>
          <Link to="/products">Continue Shopping</Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>

          <Link to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
}

export default Cart;
