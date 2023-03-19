import { Navigate } from "react-router-dom";
import Cart from "../logged_user/cart";

const IsLoggedCart = () => {
  const token = localStorage.getItem("token");
  return token ? <Cart /> : <Navigate to="/profile" />;
};

export default IsLoggedCart;
