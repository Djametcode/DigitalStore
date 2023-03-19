import { Navigate, Outlet } from "react-router-dom";
import ProductDetail from "./productDetail";

const ProtectedRoute = () => {
  let isAuthorized = localStorage.getItem("token");

  return isAuthorized ? <ProductDetail /> : <Navigate to="/profile" />;
};

export default ProtectedRoute;
