import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myCart from "./my_cart/my_cart";

const CheckOut = ({ color, url, title, price }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id_product");
  const token = localStorage.getItem("token");
  const [clr, setclr] = useState("");
  const [count, setCount] = useState("");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const data = {
    title: title,
    price: price,
    image: url,
    id: id,
    count: count,
    color: clr,
  };

  console.log(data);

  const addChart = () => {
    myCart.push(data);
    navigate("/cart");
  };
  return (
    <>
      <div className=" rounded-xl flex flex-col gap-2 bg-base-200 p-3 font-quick">
        <select
          onClick={(e) => setclr(e.target.value)}
          className=" rounded-xl p-2 bg-base-300"
          name="color"
          id="color"
        >
          <option>pilih warna</option>
          <option value={color}>{color}</option>
        </select>
        <input
          className=" focus:outline-none rounded-xl p-2 bg-base-300"
          type="number"
          placeholder="jumlah"
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <div className=" m-2 flex justify-center font-quick gap-2 text-white/80">
        <div className="flex flex-col w-full justify-center text-center bg-slate-600/40 rounded-lg p-2">
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center text-xs">
            <p>Chat</p>
          </div>
        </div>
        <div
          onClick={addChart}
          className=" cursor-pointer flex flex-col justify-center w-full text-center bg-slate-600/40 rounded-lg p-2"
        >
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>

          <div className=" text-xs">
            <p>Keranjang</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center w-full text-center bg-slate-600/40 rounded-lg p-2">
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className=" flex flex-col justify-center text-xs">
            <p>Beli</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
