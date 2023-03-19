import MyStore from "../logged_user/mystore";

const IsLoggedMyStore = () => {
  const token = localStorage.getItem("token");
  return token ? <MyStore /> : <Navigate to="/profile" />;
};

export default IsLoggedMyStore;
