const Login = () => {
  return (
    <div className=" font-quick p-3 m-2 w-72 flex flex-col gap-2">
      <form className=" flex flex-col gap-2" action="#">
        <input
          className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Email"
        />
        <input
          className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Password"
        />
      </form>
      <div className=" flex justify-center">
        <button className=" bg-slate-500/40 p-1 rounded-lg text-white/70">
          Login
        </button>
      </div>
    </div>
  );
};

// https://breakable-outfit-bear.cyclic.app/login-user
export default Login;
