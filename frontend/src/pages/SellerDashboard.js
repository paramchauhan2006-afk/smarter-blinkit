import React, { useEffect, useState } from "react";
import API from "../services/api";

function SellerDashboard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const res = await API.get("/products");

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Seller Dashboard</h2>

      {products.map((product)=>(
        <div key={product._id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>

          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Stock: {product.stock}</p>

        </div>
      ))}

    </div>

  );

}

export default SellerDashboard;