import { Navigate } from "react-router-dom";
import SearchProduct from "../search";

const SearchProtect = () => {
  const token = localStorage.getItem("token");

  return token ? <SearchProduct /> : <Navigate to="/profile" />;
};

export default SearchProtect;
