import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{padding:"15px", borderBottom:"1px solid gray"}}>

      <Link to="/" style={{marginRight:"20px"}}>Home</Link>

      <Link to="/products" style={{marginRight:"20px"}}>Products</Link>

      <Link to="/login" style={{marginRight:"20px"}}>Login</Link>

      <Link to="/register" style={{marginRight:"20px"}}>Register</Link>

      <Link to="/dashboard">Seller Dashboard</Link>

      <Link to="/add-product" style={{marginRight:"20px"}}>Add Product</Link>

    </div>
  );
}

export default Navbar;