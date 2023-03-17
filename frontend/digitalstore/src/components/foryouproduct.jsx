import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageProducts = ({ data }) => {
  //   console.log(data);
  const filter = data.filter((item) => item.length !== 0);
  console.log(filter);
  const result = data.map((item) => (
    <img
      className=" rounded-lg"
      src={item.url}
      height={150}
      width={150}
      alt="img"
    />
  ));
  return <div>{result}</div>;
};

const Extends = ({ data }) => {
  const { title, price, images, _id } = data;
  const [detail, toggleDetail] = useState(false);
  const navigate = useNavigate();
  //   console.log(images);
  const handleClick = async () => {
    console.log(_id);
    await localStorage.setItem("id_product", _id);
    navigate("/detail");
  };
  return (
    <div
      onClick={handleClick}
      className=" bg-slate-600 rounded-lg gap-3 flex flex-col p-4 text-center justify-end cursor-pointer"
    >
      <div className="">
        {/* <ImageProducts data={images} /> */}
        <div className=" flex justify-center pt-2">
          <div className=" w-40 h-40 bg-cover bg-iphone2 rounded-lg"></div>
        </div>
      </div>

      <div className=" flex flex-col text-left pl-3 text-sm">
        <p>{title}</p>
        <p>Rp. {price}</p>
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  const result = products.map((item) => <Extends data={item} key={item._id} />);
  return <div className=" grid grid-cols-2 gap-2 m-2 pb-16">{result}</div>;
};

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://breakable-outfit-bear.cyclic.app/products/get-all-products"
      );
      const item = response.data;
      const { data } = item;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className=" font-quick bg-slate-500 text-white">
      <h1 className=" p-3 text-l">Mungkin Anda suka</h1>
      <div className=" flex justify-center">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductLists;
