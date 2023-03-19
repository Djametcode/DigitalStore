import { Navigate } from "react-router-dom";
import LandingUser from "../logged_user/landing_user";
import ProfileLogged from "../logged_user/profil_logged";

const LandingProtect = () => {
  const token = localStorage.getItem("token");

  return token ? <LandingUser /> : <Navigate to="/" />;
};

export default LandingProtect;
