import { Link } from "react-router-dom";

const Chart = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
    </div>
  );
};

const HeaderProducts = () => {
  const closeDetail = () => {
    localStorage.removeItem("id_product");
  };
  return (
    <div className=" bg-base-100 text-white p-4 flex justify-between gap-5">
      <div className=" flex flex-col justify-center">
        <Link
          className=" font-jost bg-base-200 text-slate-100 rounded-xl w-16 p-1 text-center"
          onClick={closeDetail}
          to="/profile_logged"
        >
          Back
        </Link>
      </div>
      <div className=" flex justify-center gap-3">
        <div className=" flex flex-col justify-center">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default HeaderProducts;
