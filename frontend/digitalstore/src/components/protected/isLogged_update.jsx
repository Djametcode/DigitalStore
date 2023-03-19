import UpdateStore from "../logged_user/updateStore";

const IsLoggedUpdate = () => {
  const token = localStorage.getItem("token");
  return token ? <UpdateStore /> : <Navigate to="/profile" />;
};

export default IsLoggedUpdate;
