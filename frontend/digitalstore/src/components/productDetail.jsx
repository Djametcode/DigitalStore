import axios from "axios";
import { useEffect, useState } from "react";
import CheckOut from "./checkout";
import Footer from "./footer";
import HeaderProducts from "./HeaderProducts";

const DescriptionProduct = ({
  title,
  price,
  quantity,
  description,
  warna,
  url,
}) => {
  return (
    <div className="card p-4 bg-base-100 shadow-xl">
      <figure className=" rounded-2xl p-4">
        <img className=" w-52 rounded-xl" src={url} alt="" srcset="" />
      </figure>
      <div className="card-body">
        <div className=" bg-base-200 p-5 -translate-y-4 rounded-lg">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>Rp. {price}</p>
          <div>
            <p>stock : {quantity}</p>
          </div>
        </div>
        <div className=" flex justify-center card-actions">
          <CheckOut
            color={warna}
            stock={quantity}
            title={title}
            price={price}
            url={url}
          />
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const id = localStorage.getItem("id_product");
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDesc] = useState("");
  const [colors, setcolor] = useState("");
  const [url, setUrl] = useState("");

  const getSpesifictProduct = async () => {
    const response = await axios.get(
      `https://breakable-outfit-bear.cyclic.app/products//get-product/${id}`
    );
    const item = response.data;
    const { title, price, quantity, images, description, ratings, color } =
      item;
      console.log(item)

      const {url} = images;
      console.log(url)
    setUrl(url);
    setTitle(title);
    setPrice(price);
    setQuantity(quantity);
    setDesc(description);
    setcolor(color);
  };

  useEffect(() => {
    getSpesifictProduct();
  }, []);
  return (
    <div className=" bg-base-200 pb-28">
      <div className=" sticky top-0 z-20">
        <HeaderProducts />
      </div>

      <div className=" p-3 flex justify-center pt-3">
        <DescriptionProduct
          title={title}
          price={price}
          quantity={quantity}
          description={description}
          warna={colors}
          url={url}
        />
      </div>
      <div className=" fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default ProductDetail;
