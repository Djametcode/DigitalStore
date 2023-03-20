import { Navigate } from "react-router-dom";
import LandingUser from "../logged_user/landing_user";

const IsLogged = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "admin" ? (
    <LandingUser />
  ) : (
    <Navigate to="/landing_user2" />
  );
};

export default IsLogged;
