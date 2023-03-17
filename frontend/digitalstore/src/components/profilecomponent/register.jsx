import axios from "axios";
import { useRef, useState } from "react";
import Header from "../header";
import Navigator from "../navigator";

const Register = () => {
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

  const data = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    mobile: phone,
    password: password,
  };
  console.log(data);

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/register",
        data
      );
      const item = response.data;
      const {
        data: { firstname, lastname, email, mobile, msg },
      } = item;
      await setResult(msg);
      await toggleTxt(true);
      event.preventDefault();
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className=" font-quick p-5 m-3 flex flex-col gap-2">
      <form className=" flex flex-col gap-2" action="#">
        <div className=" flex gap-2">
          <input
            className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
            onChange={handleChange}
          />
          <input
            className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            onChange={handleChange}
          />
        </div>
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
          placeholder="No Hp"
          ref={phoneRef}
          onChange={handleChange}
        />
        <input
          className=" bg-slate-400 placeholder:text-white placeholder:text-sm p-2 rounded-xl focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Password"
          ref={passwordRef}
          onChange={handleChange}
        />
      </form>
      <div className=" flex justify-center">
        <button
          onClick={registerUser}
          className=" bg-slate-500/40 p-1 rounded-lg text-white/70"
        >
          Registrasi
        </button>
      </div>
      {txt && <p>{result}</p>}
    </div>
  );
};

const WrapperRegister = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
      </div>
      <div className=" flex justify-center">
        <Register />
      </div>
      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default WrapperRegister;
