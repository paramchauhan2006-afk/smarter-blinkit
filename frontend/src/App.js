import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/products" element={<Products />} />

        <Route path="/dashboard" element={<SellerDashboard />} />

        <Route path="/add-product" element={<AddProduct />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;