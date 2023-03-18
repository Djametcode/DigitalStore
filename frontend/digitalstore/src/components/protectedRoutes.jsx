import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let isAuthorized = localStorage.getItem("token");
  return isAuthorized !== true ? <Navigate to="/" /> : <Outlet />;
};
