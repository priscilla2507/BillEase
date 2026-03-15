import React, { useState } from "react";
import { createBill } from "../services/api";

function Admin() {

  const [bill, setBill] = useState({
    userId: "",
    billType: "",
    amount: "",
    dueDate: ""
  });

  const handleChange = (e) => {

    setBill({
      ...bill,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createBill(bill);

      alert("Bill Created Successfully");

    } catch (error) {

      alert("Error creating bill");

    }

  };

  return (
    <div>

      <h2>Admin Panel</h2>

      <h3>Create Bill</h3>

      <form onSubmit={handleSubmit}>

        <input
          name="userId"
          placeholder="User ID"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="billType"
          placeholder="Bill Type"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
        />

        <br/><br/>

        <input
          name="dueDate"
          type="date"
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Create Bill</button>

      </form>

    </div>
  );
}

export default Admin;