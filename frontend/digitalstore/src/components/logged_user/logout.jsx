import { Link } from "react-router-dom";

const LogOut = () => {
  const handleToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  };
  return (
    <div className="flex justify-start p-2 font-quick">
      <Link
        className=" bg-red-600 p-2 rounded-lg text-white/80"
        to="/"
        onClick={handleToken}
      >
        Log Out
      </Link>
    </div>
  );
};

export default LogOut;
