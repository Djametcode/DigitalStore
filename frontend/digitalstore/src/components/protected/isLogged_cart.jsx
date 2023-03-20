import { Navigate } from "react-router-dom";
import Cart from "../logged_user/cart";

const IsLoggedCart = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? <Cart /> : <Navigate to="/cart2" />;
};

export default IsLoggedCart;
