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
  data,
  color,
}) => {
  const result = data.map((item) => (
    <figure>
      <img
        className=" w-72  rounded-xl"
        key={data._id}
        src={item.url}
        alt=""
        srcset=""
      />
    </figure>
  ));
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className=" pt-6">{result}</div>
      <div className="card-body">
        <div className=" bg-base-200 p-5 rounded-lg">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>Rp. {price}</p>
          <div>
            <p>stock : {quantity}</p>
          </div>
        </div>
        <div className=" flex justify-center card-actions">
          <CheckOut color={color} stock={quantity} />
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const id = localStorage.getItem("id_product");
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [images, setImages] = useState([]);
  const [description, setDesc] = useState("");
  const [Ratings, setRatings] = useState();
  const [color, setcolor] = useState("");

  const getSpesifictProduct = async () => {
    const response = await axios.get(
      `https://breakable-outfit-bear.cyclic.app/products//get-product/${id}`
    );
    const item = response.data;
    console.log(item);
    const { title, price, quantity, images, description, ratings, color } =
      item;
    console.log(ratings);
    setTitle(title);
    setPrice(price);
    setImages(images);
    setQuantity(quantity);
    setDesc(description);
    setRatings(ratings);
    setcolor(color);
  };

  useEffect(() => {
    getSpesifictProduct();
  }, []);
  return (
    <div className=" bg-base-200 pb-96">
      <div className=" sticky top-0 z-20">
        <HeaderProducts />
      </div>

      <div className=" flex justify-center pt-3">
        <DescriptionProduct
          title={title}
          price={price}
          quantity={quantity}
          description={description}
          data={images}
          color={color}
        />
      </div>
      <div className=" fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default ProductDetail;
