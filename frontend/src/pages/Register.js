import React, { useState } from "react";
import API from "../services/api";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const registerUser = async () => {

    try {

      const res = await API.post("/users/register",{
        name,
        email,
        password
      });

      alert("User Registered Successfully");

      console.log(res.data);

    } catch(error) {

      console.log(error);

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={registerUser}>
        Register
      </button>

    </div>

  );

}

export default Register;