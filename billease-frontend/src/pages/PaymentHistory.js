import React, { useState } from "react";
import { getPaymentsByBill } from "../services/api";

function PaymentHistory() {

  const [billId, setBillId] = useState("");
  const [payments, setPayments] = useState([]);

  const handleSearch = async () => {

    if (!billId) {
      alert("Please enter a Bill ID");
      return;
    }

    try {
      const response = await getPaymentsByBill(billId);
      setPayments(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching payment history");
    }
  };

  return (
    <div>

      <h2>Payment History</h2>

      <input
        placeholder="Enter Bill ID"
        value={billId}
        onChange={(e) => setBillId(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Payment Date</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.billId}</td>
              <td>{payment.amount}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.paymentDate}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default PaymentHistory;