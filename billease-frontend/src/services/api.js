import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const registerUser = (user) => {
    return axios.post(`${API_BASE_URL}/users/register`, user);
};
export const loginUser = (user) => {
  return axios.post(`${API_BASE_URL}/users/login`, user);
};

export const getBillsByUser = (userId) => {
  return axios.get(`${API_BASE_URL}/bills/user/${userId}`);
};

export const payBill = (billId) => {
    return axios.put(`${API_BASE_URL}/bills/pay/${billId}`);
};

export const getPaymentsByBill = (billId) => {
  return axios.get(`${API_BASE_URL}/payments/bill/${billId}`);
};
export const createBill = (bill) => {
  return axios.post(`${API_BASE_URL}/bills/create`, bill);
};
export const getAllUsers = () => {
  return axios.get(`${API_BASE_URL}/users`);
};
export const updatePaymentStatus = (paymentId, status) => {
  return axios.put(`http://localhost:8080/payments/update-status/${paymentId}?status=${status}`);
};
export const getAllPayments = () => {
  return axios.get(`${API_BASE_URL}/admin/payments`);
};