import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
