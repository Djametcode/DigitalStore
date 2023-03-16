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
const Search = () => {
  return (
    <div className=" font-quick">
      <input
        className=" p-1 rounded-lg focus: outline-none bg-slate-400/70 placeholder:text-white/80 placeholder:pl-2 placeholder:text-sm"
        type="text"
        placeholder="mencari sesuatu .. ?"
      />
    </div>
  );
};
const Header = () => {
  return (
    <div className=" bg-slate-500 text-white p-2 flex justify-between gap-5">
      <div className=" flex flex-col justify-center">
        <h1 className=" text-xl font-jost text-left">Digital Store</h1>
      </div>
      <div className=" flex justify-center gap-3">
        <Search />
        <div className=" flex flex-col justify-center">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Header;
