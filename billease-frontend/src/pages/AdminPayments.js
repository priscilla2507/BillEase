import React, { useEffect, useState } from "react";
import { getAllPayments, updatePaymentStatus } from "../services/api";

function AdminPayments() {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {

    try {

      const response = await getAllPayments();
      setPayments(response.data);

    } catch (error) {

      console.log("Error fetching payments:", error);

    }

  };

  const changeStatus = async (paymentId, status) => {

    try {

      await updatePaymentStatus(paymentId, status);

      alert("Payment status updated");

      fetchPayments();

    } catch (error) {

      console.log(error);

      alert("Failed to update status");

    }

  };

  return (
    <div>

      <h2>Admin Payments</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Payment ID</th>
            <th>User ID</th>
            <th>Bill ID</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr key={payment.id}>

              <td>{payment.id}</td>

              <td>
                {payment.bill && payment.bill.user
                  ? payment.bill.user.id
                  : "N/A"}
              </td>

              <td>
                {payment.bill ? payment.bill.id : payment.billId}
              </td>

              <td>{payment.amount}</td>

              <td>{payment.paymentMethod}</td>

              <td>{payment.status}</td>

              <td>

                <button
                  onClick={() => changeStatus(payment.id, "Paid")}
                >
                  Mark Paid
                </button>

                <button
                  onClick={() => changeStatus(payment.id, "Failed")}
                >
                  Mark Failed
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminPayments;