
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/NavbarPage";
import Footer from "./components/FooterPage";

import Home from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
