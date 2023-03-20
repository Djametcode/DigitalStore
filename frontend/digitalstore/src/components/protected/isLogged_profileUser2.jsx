import { Navigate } from "react-router-dom";
import ProfileUserTwo from "../logged_user/profile_user2";

const IsLoggedProfileUserTwo = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "user" ? (
    <ProfileUserTwo />
  ) : (
    <Navigate to="profile" />
  );
};

export default IsLoggedProfileUserTwo;
