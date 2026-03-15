import React, { useState } from "react";
import { registerUser } from "../services/api";

function Register() {

  const [user, setUser] = useState({
    name: "",
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
    await registerUser(user);
    alert("User Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;