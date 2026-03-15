import React, { useEffect, useState } from "react";
import { getBillsByUser } from "../services/api";
import { useParams } from "react-router-dom";

function AdminBills() {

  const { userId } = useParams();
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {

    const response = await getBillsByUser(userId);
    setBills(response.data);

  };

  return (
    <div>

      <h2>Bills for User {userId}</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Bill Type</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {bills.map((bill) => (

            <tr key={bill.id}>

              <td>{bill.id}</td>
              <td>{bill.billType}</td>
              <td>{bill.amount}</td>
              <td>{bill.dueDate}</td>
              <td>{bill.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminBills;