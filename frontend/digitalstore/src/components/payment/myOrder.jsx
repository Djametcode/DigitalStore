import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";
import NavPostingan from "../logged_user/nav_postingan";

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

const MyOrder = () => {
  const [item, setItem] = useState("");
  const [total, setTotal] = useState("");
  const getAllUserChart = async () => {
    try {
      const response = await axios.get(
        "https://breakable-outfit-bear.cyclic.app/cart",
        config
      );
      const item = response.data;
      const { cartTotal, product } = item;
      let text = cartTotal.toLocaleString("ID", {
        style: "currency",
        currency: "IDR",
      });
      setTotal(text);
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserChart();
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div></div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default MyOrder;
