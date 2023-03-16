import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ProductLists from "./foryouproduct";

export const ProductContext = createContext(null);

const ForYou = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
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
      <h1 className=" p-3 text-l">Rekomendasi Produk</h1>
      <ProductContext.Provider value={{ products, setProducts }}>
        <ProductLists />
      </ProductContext.Provider>
    </div>
  );
};

export default ForYou;
