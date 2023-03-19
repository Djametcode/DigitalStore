import SellSomething from "../logged_user/sell_some";

const IsLoggedSell = () => {
  const token = localStorage.getItem("token");
  return token ? <SellSomething /> : <Navigate to="/profile" />;
};

export default IsLoggedSell;
