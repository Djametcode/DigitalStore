import axios from "axios";
import { useRef, useState } from "react";

const InputForms = () => {
  const [name, setName] = useState("");
  console.log(name);
  const [desc, setDesc] = useState("");
  const [pict, setPict] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setstock] = useState("");
  const [color, setcolor] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setcategory] = useState("");
  const pictref = useRef();

  const data = {
    title: name,
    description: desc,
    price: price,
    quantity: stock,
    color: color,
    brand: brand,
    category: category,
    // images: pict,
  };
  console.log(data);

  const handleChange = () => {
    let files = pictref.current.files[0];
    convertBase64(files);
  };
  const convertBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPict(reader.result);
    };
  };
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const postItem = async () => {
    event.preventDefault();
    try {
      await axios.post(
        "https://breakable-outfit-bear.cyclic.app/products/create-product",
        data,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-base-300 m-3 p-2 rounded-xl">
      <h1 className=" p-3 text-xl text-center">Posting Apa Saja</h1>
      <form
        className=" flex flex-col justify-center p-2 gap-2 font-jost"
        action="#"
      >
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="text"
          placeholder="Nama barang"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="text"
          placeholder="deskripsikan barang"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="file"
          placeholder="tambahkan gambar"
          onChange={handleChange}
          accept="image/*"
          ref={pictref}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="number"
          placeholder="Harga"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="text"
          placeholder="stock barang"
          onChange={(e) => setstock(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="text"
          placeholder="warna"
          onChange={(e) => setcolor(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          type="text"
          placeholder="brand atau merek"
          onChange={(e) => setBrand(e.target.value)}
        />
        <select
          className=" p-2 focus:outline-none rounded-lg bg-base-200"
          name="category"
          id="category"
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="Laptop">Laptop</option>
          <option value="Gadget">Gadget</option>
          <option value="Makanan">Makanan</option>
          <option value="Lain - Lain">Latinnya</option>
        </select>
        <div className=" flex justify-center">
          <button onClick={postItem} className=" bg-base-100 p-2 rounded-lg">
            Posting Barang
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForms;
