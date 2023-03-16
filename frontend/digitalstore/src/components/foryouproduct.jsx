import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./foryou";

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
      <div className=" flex flex-col justify-center">
        {/* <ImageProducts data={images} /> */}
        <div className=" flex justify-center pt-2">
          <div className=" w-40 h-40 bg-cover bg-dummy rounded-lg"></div>
        </div>
      </div>

      <div className=" flex flex-col text-left pl-3 text-sm">
        <p>{title}</p>
        <p>Rp. {price}</p>
      </div>
      {detail && (
        <DetailProducts
          cursor={setCursor}
          data={data}
          onClicks={toggleDetail}
        />
      )}
    </div>
  );
};

const Products = ({ data }) => {
  const result = data.map((item) => <Extends data={item} key={data._id} />);
  return (
    <div className=" flex justify-start flex-wrap m-2 ml-4 gap-2">{result}</div>
  );
};

const ProductLists = () => {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <div className=" flex">
      <Products data={products} />
    </div>
  );
};

export default ProductLists;
