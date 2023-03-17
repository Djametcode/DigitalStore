import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Navigator from "../navigator";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const [result, setResult] = useState("");
  const [txt, toggleTxt] = useState(false);

  const handleChange = () => {
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    setEmail(emailRef.current.value);
    setPhone(phoneRef.current.value);
    setPassword(passwordRef.current.value);
  };

  const formDatas = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    mobile: phone,
    password: password,
  };
  console.log(formDatas);

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/register",
        formDatas
      );
      const item = response.data;
      const { data, msg } = item;
      await setResult(msg);
      await toggleTxt(true);
      await setFirstName("");
      event.preventDefault();
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className=" flex flex-col gap-5">
      <div>
        <Link to="/profile" className=" bg-base-200 p-2 rounded-xl">
          Kembali ke login
        </Link>
      </div>
      <form
        className=" bg-base-200 p-5 rounded-lg flex flex-col gap-2 font-jost"
        action="#"
      >
        <div className=" flex gap-2">
          <input
            className=" bg-base-300 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none w-full focus:text-white text-white"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
            onChange={handleChange}
          />
          <input
            className=" bg-base-300 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none w-full focus:text-white text-white"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            onChange={handleChange}
          />
        </div>
        <input
          className=" bg-base-300 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Email"
          ref={emailRef}
          onChange={handleChange}
        />
        <input
          className=" bg-base-300 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="No Hp"
          ref={phoneRef}
          onChange={handleChange}
        />
        <input
          className=" bg-base-300 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Password"
          ref={passwordRef}
          onChange={handleChange}
        />
      </form>

      <div className=" flex justify-center pt-2">
        <div>
          {txt && (
            <p className=" bg-slate-500/40 text-center p-2 rounded-lg">
              {result}
            </p>
          )}
        </div>
        <button
          onClick={registerUser}
          className=" font-jost bg-base-300 p-2 rounded-lg text-white/70"
        >
          Registrasi
        </button>
      </div>
    </div>
  );
};

const WrapperRegister = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
      </div>
      <div className=" m-3">
        <Register />
      </div>

      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default WrapperRegister;
