import { Navigate } from "react-router-dom";
import LandingUser from "../logged_user/landing_user";

const LandingProtect = () => {
  const token = localStorage.getItem("token");

  return token ? <LandingUser /> : <Navigate to="/profile" />;
};

export default LandingProtect;
