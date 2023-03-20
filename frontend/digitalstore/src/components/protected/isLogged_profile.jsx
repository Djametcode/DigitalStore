import { Navigate } from "react-router-dom";
import ProfileLogged from "../logged_user/profil_logged";

const IsLoggedProfile = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? (
    <ProfileLogged />
  ) : (
    <Navigate to="/landing_user2" />
  );
};

export default IsLoggedProfile;
