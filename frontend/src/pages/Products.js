import React, { useState } from "react";
import API from "../services/api";

function Products() {

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {

    try {

      const res = await API.get(`/products/search?q=${query}`);

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search grocery..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button onClick={searchProducts}>
        Search
      </button>

      <div style={{marginTop:"20px"}}>

        {products.map((product)=>(
          <div key={product._id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>

            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <p>Stock: {product.stock}</p>

          </div>
        ))}

      </div>

    </div>

  );

}

export default Products;