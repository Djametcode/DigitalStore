import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";
import NavPostingan from "./nav_postingan";

const ImageCart = ({ data }) => {
  const urls = data[0];
  const { url } = urls;

  return <img className=" rounded-2xl w-28 h-28" src={url} alt="" srcset="" />;
};

const ProductsCart = ({ data }) => {
  console.log(data);
  const [title, setTitle] = useState([data.product.title]);
  const [image, setImage] = useState(data.product.images);
  return (
    <div className=" bg-base-300 m-3 p-4 rounded-xl">
      <div className=" flex p-3">
        <div className=" flex flex-col justify-start p-2">
          <input type="checkbox" class="checkbox" />
        </div>
        <div className=" p-2">
          <ImageCart data={image} />
        </div>
        <div className=" p-2 font-quick">
          <p>{title}</p>
          <p className=" text-sm">variasi : {data.product.color}</p>
          <p className=" text-sm">Rp. {data.product.price}</p>
          <p className=" text-sm">Jumlah : {data.product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

const MyCart = ({ total, item }) => {
  const result = item.map((items) => <ProductsCart key={items} data={items} />);
  return <div>{result}</div>;
};
const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};
const Cart = () => {
  const [total, setTotal] = useState();
  const [product, setProduct] = useState([]);
  const getALlUseCart = async () => {
    try {
      const response = await axios.get(
        "https://breakable-outfit-bear.cyclic.app/cart",
        config
      );
      const item = await response.data;
      const { cartTotal, products, orderby } = item;
      setTotal(cartTotal);
      setProduct(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getALlUseCart();
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" p-4 bg-base-200 font-jost">
        <h1>Keranjang Saya</h1>
      </div>
      <div>
        <MyCart total={total} item={product} />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default Cart;
