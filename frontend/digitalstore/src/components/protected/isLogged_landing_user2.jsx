import { Navigate } from "react-router-dom";
import LandingUserTwo from "../logged_user/landing_user2";

const IsLoggedLandingUser2 = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "user" ? (
    <LandingUserTwo />
  ) : (
    <Navigate to="/profile" />
  );
};

export default IsLoggedLandingUser2;
