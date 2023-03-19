import Header from "../header";
import NavPostingan from "./nav_postingan";

const Cart = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <p>Item saya</p>
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default Cart;
