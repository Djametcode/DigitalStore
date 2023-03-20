import { Navigate } from "react-router-dom";
import MyOrder from "../payment/myOrder";

const PaymentProtect = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? (
    <MyOrder />
  ) : (
    <Navigate to="/profile_user2" />
  );
};

export default PaymentProtect;
