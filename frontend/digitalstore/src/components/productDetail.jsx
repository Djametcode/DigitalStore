import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./footer";
import ProductLists from "./foryouproduct";
import HeaderProducts from "./HeaderProducts";

const DescriptionProduct = ({ title, price, quantity }) => {
  return (
    <div className="  bg-slate-600/70 text-white/50 font-quick p-3">
      <p>{title}</p>
      <div className=" flex gap-4">
        <p>Harga : </p>
        <p>Rp. {price}</p>
      </div>

      <p>Stock : {quantity}</p>
    </div>
  );
};

const ProductDetail = () => {
  const id = localStorage.getItem("id_product");
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const getSpesifictProduct = async () => {
    const response = await axios.get(
      `https://breakable-outfit-bear.cyclic.app/products//get-product/${id}`
    );
    const item = response.data;
    const { title, price, quantity } = item;
    setTitle(title);
    setPrice(price);
    setQuantity(quantity);
  };

  useEffect(() => {
    getSpesifictProduct();
  }, []);
  return (
    <div className=" bg-stone-500 pb-96">
      <div className=" sticky top-0">
        <HeaderProducts />
      </div>

      <div className=" flex justify-center bg-slate-600 p-4">
        <div className=" bg-dummy w-72 h-72 bg-cover rounded-lg"></div>
      </div>

      <div>
        <DescriptionProduct title={title} price={price} quantity={quantity} />
      </div>
      <div className=" m-2 flex justify-center font-quick gap-2 text-white/80">
        <div className=" flex flex-col w-full text-center bg-slate-600/40 rounded-lg p-2">
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

          <div className=" text-xs">
            <p>Chat dengan penjual</p>
          </div>
        </div>
        <div className=" flex flex-col w-full text-center bg-slate-600/40 rounded-lg p-2">
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
            <p>Tambahkan ke keranjang</p>
          </div>
        </div>
        <div className=" flex flex-col w-full text-center bg-slate-600/40 rounded-lg p-2">
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

          <div className=" text-xs">
            <p>Beli sekarang</p>
          </div>
        </div>
      </div>
      <div className=" h-56"></div>
      <div className=" fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default ProductDetail;