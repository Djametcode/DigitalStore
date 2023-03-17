import { Link } from "react-router-dom";
import ProductLists from "../foryouproduct";
import Login from "./Login";

const Wrapper = () => {
  return (
    <div className=" bg-slate-600 flex flex-col justify-center">
      <div className=" flex justify-center">
        <Login />
      </div>
      <div className=" font-quick text-white/50 flex justify-center pb-3">
        <div className=" flex flex-col">
          <p className=" text-sm">Belum punya akun?</p>
          <Link to="/register" className=" underline text-xs text-center">
            Register
          </Link>
        </div>
      </div>
      <div className=" bg-slate-700">
        <ProductLists />
      </div>
    </div>
  );
};

export default Wrapper;
