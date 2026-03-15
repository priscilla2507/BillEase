import React, { useState } from "react";
import { loginUser } from "../services/api";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await loginUser(user);

    alert("Login Successful");

    // store logged in user
    localStorage.setItem("user", JSON.stringify(response.data));

    // redirect to dashboard
    window.location.href = "/dashboard";

  } catch (error) {

    alert("Invalid email or password");

  }

};

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;