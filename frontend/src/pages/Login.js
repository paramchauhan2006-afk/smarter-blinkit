import React, { useState } from "react";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const res = await API.post("/users/login", {
        email,
        password
      });

      const token = res.data.token;

      localStorage.setItem("token", token);

      alert("Login Successful");

      console.log(res.data);

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Login</h2>

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

      <button onClick={loginUser}>
        Login
      </button>

    </div>

  );

}

export default Login;