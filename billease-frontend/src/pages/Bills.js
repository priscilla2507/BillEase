import React, { useEffect, useState } from "react";
import { getBillsByUser, payBill } from "../services/api";

function Bills() {

  const [bills, setBills] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {

    if (userId) {
      fetchBills();
    }

  }, [userId]);

  const fetchBills = async () => {

    try {

      const response = await getBillsByUser(userId);
      setBills(response.data);

    } catch (error) {

      console.error("Error fetching bills:", error);

    }

  };

  const handlePay = async (billId) => {

    await payBill(billId);
    alert("Bill Paid Successfully");

    fetchBills();

  };

  return (
    <div>

      <h2>Your Bills</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Bill Type</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.billType}</td>
              <td>{bill.amount}</td>
              <td>{bill.dueDate}</td>
              <td>{bill.status}</td>
              <td>

                {bill.status === "Pending" && (
                  <button onClick={() => handlePay(bill.id)}>
                    Pay
                  </button>
                )}

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Bills;