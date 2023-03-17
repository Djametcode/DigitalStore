import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgWarning, setMsg] = useState("");
  const [txt, toggleTxt] = useState(false);

  const [name, setName] = useState("");
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
  const loginHandle = async () => {
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/login-user",
        loginData
      );
      const item = response.data;
      const {
        data: { token, firstname, lastname, mobile, email },
        msg,
      } = item;

      setName(firstname);
      localStorage.setItem("token", token);
      localStorage.setItem("name", firstname + lastname);
      await setMsg(msg);
      await toggleTxt(true);
      await navigate("/logged_user");
      setEmail("");
      setPassword("");

      event.preventDefault();
    } catch (err) {
      console.log(err);
      const item = err.response.data;
      const { msg } = item;
      console.log(msg);
      await setMsg(msg);
      await toggleTxt(true);
    }
  };
  return (
    <div className=" font-quick p-3 m-2 w-72 flex flex-col gap-2">
      <form className=" flex flex-col gap-2" action="#">
        <input
          className=" bg-base-100 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Email"
          ref={emailRef}
          onChange={handleChange}
        />
        <input
          className=" bg-base-100 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Password"
          ref={passRef}
          onChange={handleChange}
        />
      </form>
      <div>
        {txt && (
          <p className=" text-sm text-red-500 text-center">{msgWarning}</p>
        )}
      </div>
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

export default Login;
