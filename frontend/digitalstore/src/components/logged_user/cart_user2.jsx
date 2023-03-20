import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "../header";
import NavPostingan from "./nav_postingan";
import myCart from "../my_cart/my_cart";
import cart from "../data_checkout";
import { Navigate, useNavigate } from "react-router-dom";
import NavUserTwo from "./nav_user2";
// const ImageCart = ({ data }) => {
//   const urls = data[0];
//   const { url } = urls;

//   return <img className=" rounded-2xl w-28 h-28" src={url} alt="" srcset="" />;
// };

// const ProductsCart = ({ data }) => {
//   console.log(data);
//   const [title, setTitle] = useState([data.product.title]);
//   const [image, setImage] = useState(data.product.images);
//   return (
//     <div className=" bg-base-300 m-3 p-4 rounded-xl">
//       <div className=" flex p-3">
//         <div className=" flex flex-col justify-start p-2">
//           <input type="checkbox" class="checkbox" />
//         </div>
//         <div className=" p-2">
//           <ImageCart data={image} />
//         </div>
//         <div className=" p-2 font-quick">
//           <p>{title}</p>
//           <p className=" text-sm">variasi : {data.product.color}</p>
//           <p className=" text-sm">Rp. {data.product.price}</p>
//           <p className=" text-sm">Jumlah : {data.product.quantity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MyCart = ({ total, item }) => {
//   const result = item.map((items) => <ProductsCart key={items} data={items} />);
//   return <div>{result}</div>;
// };

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

const PriceToPay = ({ total }) => {
  return (
    <div>
      <p>Total yang harus di bayar : {total} </p>
    </div>
  );
};

const CheckoutItem = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState("");
  const cart = myCart.map((item) => ({
    id: item.id,
    count: item.count,
    color: item.color,
  }));

  const bayarSekarang = async () => {
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/cart",
        { cart },
        config
      );
      const item = response.data;
      const { cartTotal } = item;
      let text = cartTotal.toLocaleString("ID", {
        style: "currency",
        currency: "IDR",
      });
      await setTotal(text);
    } catch (error) {
      console.log(error);
    } finally {
      await navigate("/bayar");
    }
  };
  return (
    <>
      <div className=" justify-between flex fixed bottom-16 translate-y-1 p-4 w-full bg-base-200">
        <div className=" flex flex-col justify-center font-jost">
          <p>{total}</p>
          <p>Total item : {myCart.length}</p>
        </div>
        <div>
          <button
            onClick={bayarSekarang}
            className=" bg-green-500 p-2 text-base-300 font-jost rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

const CartUsertwo = () => {
  const priceref = useRef();

  const [price, setPrice] = useState();

  // const [total, setTotal] = useState();
  // const [product, setProduct] = useState([]);
  // const getALlUseCart = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://breakable-outfit-bear.cyclic.app/cart",
  //       config
  //     );
  //     const item = await response.data;
  //     const { cartTotal, products, orderby } = item;
  //     setTotal(cartTotal);
  //     setProduct(products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getALlUseCart();
  // }, []);
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
      </div>
      <div className=" p-4 bg-base-200 pb-36 font-jost">
        <h1>Keranjang Saya</h1>
        {myCart.map((items) => (
          <div className=" bg-base-300 m-3 p-4 rounded-xl">
            <div className=" flex p-3">
              <div className=" flex flex-col justify-start p-2">
                <input type="checkbox" class="checkbox" />
              </div>
              <div className=" p-2">
                <img
                  className=" rounded-2xl w-28 h-28"
                  src={items.image}
                  alt=""
                  srcset=""
                />
              </div>
              <div className=" p-2 font-quick">
                <p>{items.title}</p>
                <p className=" text-sm">variasi : {items.color}</p>
                <p className=" text-sm">Rp. {items.price}</p>
                <p className=" text-sm">Jumlah : {items.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CheckoutItem />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavUserTwo />
      </div>
    </div>
  );
};

export default CartUsertwo;
