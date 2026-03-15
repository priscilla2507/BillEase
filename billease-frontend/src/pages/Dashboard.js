import React from "react";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div>

      <h2>Dashboard</h2>

      {user && (
        <div>
          <h3>Welcome {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default Dashboard;