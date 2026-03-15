import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";
import { useNavigate } from "react-router-dom";

function AdminUsers() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    const response = await getAllUsers();
    setUsers(response.data);

  };

  const viewBills = (userId) => {

    navigate(`/admin/bills/${userId}`);

  };

  return (
    <div>

      <h2>All Users</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <button onClick={() => viewBills(user.id)}>
                  View Bills
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminUsers;