import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Chart = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
    </div>
  );
};
const SearchProduct = () => {
  const [search, setSearch] = useState();
  console.log(search);
  const searchRef = useRef();

  const [products, setProducts] = useState([]);
  const [filterMenu, setFilter] = useState(false);

  const redirect = useNavigate();
  console.log(products);
  const getAllProducts = async (value) => {
    try {
      const response = await axios.get(
        "https://breakable-outfit-bear.cyclic.app/products/get-all-products"
      );
      const item = response.data;
      const { data } = item;
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setProducts(results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = () => {
    setSearch(searchRef.current.value.toLowerCase());
    getAllProducts(searchRef.current.value.toLowerCase());
  };

  return (
    <>
      <div className=" bg-base-100 text-white p-3 flex justify-between gap-5">
        <div className=" flex flex-col justify-center">
          <h1 className=" text-xl font-jost text-left">Digital Store</h1>
        </div>
        <div className=" flex justify-center gap-3">
          <div className=" font-quick">
            <input
              className=" p-1 rounded-lg focus: outline-none bg-base-200 placeholder:text-white/80 placeholder:pl-2 placeholder:text-sm"
              type="text"
              placeholder="Ketikan barang"
              ref={searchRef}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col justify-center">
            <Chart />
          </div>
        </div>
      </div>
      <div>
        <ProductsFilter data={products} />
      </div>
    </>
  );
};

// const ImageProducts = ({ data }) => {
//   const result = data.map((item) => (
//     <img className=" w-20 h-20 rounded-xl" src={item.url} alt="" srcset="" />
//   ));
//   return <div>{result}</div>;
// };

const ExtendsFilter = ({ data }) => {
  console.log(data);
  const { images } = data;
  const { url } = images;
  console.log(url);
  return (
    <div className=" flex bg-base-100 p-3 rounded-lg">
      <img className=" w-20 h-20 rounded-xl" src={url} alt="" srcset="" />
      <div className=" flex p-3">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

const ProductsFilter = ({ data }) => {
  const result = data.map((item) => (
    <ExtendsFilter data={item} key={data._id} />
  ));
  return (
    <div className="w-full bg-base-300 p-2 font-quick">
      <div className=" pt-3 pb-3 pl-3">
        <Link className=" bg-base-100 p-2 rounded-xl" to="/profile_logged">
          Kembali
        </Link>
      </div>
      <p className=" p-2 pl-4">Hasil Pencarian :</p>
      <div className=" flex flex-col gap-3 p-3">{result}</div>
    </div>
  );
};

export default SearchProduct;
