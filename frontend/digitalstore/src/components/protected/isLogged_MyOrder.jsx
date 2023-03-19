import { Navigate } from "react-router-dom";
import MyOrder from "../payment/myOrder";

const PaymentProtect = () => {
  const token = localStorage.getItem("token");

  return token ? <MyOrder /> : <Navigate to="/profile" />;
};

export default PaymentProtect;
