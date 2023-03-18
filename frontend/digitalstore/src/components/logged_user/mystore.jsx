import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import NavPostingan from "./nav_postingan";

const ImageProduct = ({ data }) => {
  const result = data.map((item) => (
    <img className=" w-44 h-44 rounded-lg" src={item.url} alt="img" />
  ));
  return <div>{result}</div>;
};

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};
const DeleteButton = ({ id, get }) => {
  const deleteProduct = async () => {
    try {
      await axios.delete(
        `https://breakable-outfit-bear.cyclic.app/products/delete-product/${id}`,
        config
      );
      await get();
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={deleteProduct} className=" bg-base-100 p-3 rounded-lg">
      Hapus
    </button>
  );
};
const UpdateButton = ({ id, get }) => {
  const handleId = () => {
    localStorage.setItem("id", id);
  };
  return (
    <Link
      onClick={handleId}
      to="/update_barang"
      className=" bg-base-100 p-3 rounded-lg"
    >
      Update
    </Link>
  );
};
const ExtendsStore = ({ data, get }) => {
  const { title, images, _id } = data;
  return (
    <div>
      <div className=" bg-base-300 p-3 flex">
        <div>
          <ImageProduct data={images} />
        </div>
        <div className=" flex flex-col justify-start p-3">
          <p>{title}</p>
        </div>
      </div>
      <div className=" flex gap-3 justify-center p-3 bg-base-300 rounded-br-xl rounded-bl-xl">
        <div className=" flex flex-col justify-center">
          <DeleteButton id={_id} get={get} />
        </div>
        <div className=" flex flex-col justify-center">
          <UpdateButton id={_id} get={get} />
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ data, get }) => {
  const result = data.map((item) => (
    <ExtendsStore data={item} key={data._id} get={get} />
  ));
  return <div className=" flex flex-col gap-3 pt-3 pb-44">{result}</div>;
};

const MyStore = () => {
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
    <div className=" bg-base-200">
      <div className=" sticky top-0">
        <Header />
      </div>
      <div className=" flex justify-center">
        <ProductList data={products} get={getAllProducts} />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default MyStore;
