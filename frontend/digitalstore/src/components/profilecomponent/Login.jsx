import axios from "axios";
import { useRef, useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [txt, toggleTxt] = useState(false);

  const emailRef = useRef();
  const passRef = useRef();

  const handleChange = () => {
    setEmail(emailRef.current.value);
    setPassword(passRef.current.value);
  };
  const loginData = {
    email: email,
    password: password,
  };
  console.log(loginData);
  const loginHandle = async () => {
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/login-user",
        loginData
      );
      const item = response.data;
      const { data, msg } = item;
      await setMsg(msg);
      toggleTxt(true);
      setEmail("");
      setPassword("");
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" font-quick p-3 m-2 w-72 flex flex-col gap-2">
      <form className=" flex flex-col gap-2" action="#">
        <input
          className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Email"
          ref={emailRef}
          onChange={handleChange}
        />
        <input
          className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Password"
          ref={passRef}
          onChange={handleChange}
        />
      </form>
      <div>{txt && <p className=" text-center">{msg}</p>}</div>
      <div className=" flex justify-center">
        <button
          onClick={loginHandle}
          className=" bg-slate-500/40 p-1 rounded-lg text-white/70"
        >
          Login
        </button>
      </div>
    </div>
  );
};

// https://breakable-outfit-bear.cyclic.app/login-user
export default Login;
