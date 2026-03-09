import React, { useState } from "react";
import API from "../services/api";

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const addProduct = async () => {

    try {

      const res = await API.post("/products", {
        name,
        price,
        category,
        stock
      });

      alert("Product Added Successfully");

      console.log(res.data);

    } catch (error) {

      console.log(error);
      alert("Failed to add product");

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Add Product</h2>

      <input
        placeholder="Product Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Category"
        onChange={(e)=>setCategory(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Stock"
        onChange={(e)=>setStock(e.target.value)}
      />

      <br/><br/>

      <button onClick={addProduct}>
        Add Product
      </button>

    </div>

  );

}

export default AddProduct;