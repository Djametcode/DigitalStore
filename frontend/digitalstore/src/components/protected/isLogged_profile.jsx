import { Navigate } from "react-router-dom";
import ProfileLogged from "../logged_user/profil_logged";

const IsLoggedProfile = () => {
  const token = localStorage.getItem("token");
  return token ? <ProfileLogged /> : <Navigate to="/profile" />;
};

export default IsLoggedProfile;
