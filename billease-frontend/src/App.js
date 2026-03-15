import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Register from "./pages/Register";
import Bills from "./pages/Bills";
import PaymentHistory from "./pages/PaymentHistory";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminBills from "./pages/AdminBills";
import AdminPayments from "./pages/AdminPayments";

function App() {
  return (
    <div>

      <h1>BillEase Billing System</h1>

      <nav>
        <Link to="/login">Login</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/bills">Bills</Link> |
        <Link to="/payments">Payments</Link> |
        <Link to="/admin">Create Bill</Link> |
        <Link to="/admin/users">Admin Users</Link>
        <Link to="/admin/payments">Admin Payments</Link>
      </nav>

      <hr />

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/payments" element={<PaymentHistory />} />
        <Route path="/admin" element={<Admin />} />

       
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/bills/:userId" element={<AdminBills />} />
        <Route path="/admin/payments" element={<AdminPayments />} />

      </Routes>

    </div>
  );
}

export default App;