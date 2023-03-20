import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "multipart/form-data",
    },
  };

  // const datas = new FormData();
  // datas.append("title", name);
  // console.log(datas);
  const data = {
    title: name,
    description: desc,
    price: price,
    quantity: stock,
    color: color,
    brand: brand,
    category: category,
    images: pict,
  };

  console.log(data)

  // const datas = new FormData();
  // datas.append("data", data);
  // console.log(datas);

  const handleImage = (e) => {
    // setPict(e.target.files[0]);
    let files = e.target.files[0];
    convertBase64(files);
    // setPict(URL.createObjectURL(files))
  };

  // const handleChange = () => {
  //   let files = pictref.current.files[0];
  //   setPict(files);
  //   // convertBase64(files);
  // };

  const convertBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPict(reader.result);
    };
  };

  const postItem = async () => {
    const formData = new FormData();
    formData.append("title", name);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("quantity", stock);
    formData.append("color", color);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("images", pict);
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://breakable-outfit-bear.cyclic.app/products/create-product",
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     "Authorization": `Bearer ${token}`,
        //   },
        // },
        data, config
      );
      const item = response.data;
      console.log(item);
      await navigate("/my_store");
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
          onChange={(e) => handleImage(e)}
          accept="image/*"
          ref={pictref}
          name="images"
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
