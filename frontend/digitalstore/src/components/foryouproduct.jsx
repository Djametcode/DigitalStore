import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Extends = ({ data }) => {
  const { title, price, images, _id } = data;
  const priceFormat = price.toLocaleString("ID", {style:"currency", currency:"IDR"});
  const {url} = images
  const navigate = useNavigate();
  //   console.log(images);
  const handleClick = async () => {
    await localStorage.setItem("id_product", _id);
    navigate("/detail");
  };
  return (
    <div
      onClick={handleClick}
      className=" relative bg-base-200 rounded-lg gap-3 flex flex-col p-4 text-center justify-end cursor-pointer"
    >
      <div className=" absolute top-0 left-0">
        <div class="badge badge-accent">New</div>
      </div>
      
      <div>
      <img className=" w-44 h-32 rounded-lg" src={url} alt="img" />
      </div>

      <div className=" bg-base-100 p-2 rounded-lg flex flex-col text-left pl-3 text-sm">
        <p>{title}</p>
        <p>{priceFormat}</p>
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  const result = products.map((item) => <Extends data={item} key={item._id} />);
  return <div className=" grid grid-cols-2 gap-3 m-4 pb-16">{result}</div>;
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
    <div className=" font-quick bg-base-100 text-white">
      <div className=" flex">
        <h1 className=" hover:text-slate-300 p-3 text-l">Rekomendasi</h1>
      </div>
      <div className=" flex justify-center">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductLists;
