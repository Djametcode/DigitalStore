import ProductLists from "../foryouproduct";
import Header from "../header";
import Menu from "../menu";
import NavUserTwo from "./nav_user2";

const LandingUserTwo = () => {
  const name = localStorage.getItem("name");
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" bg-base-300 font-quick p-3">
        <p>Selamat datang pembeli {name}</p>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <ProductLists />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavUserTwo />
      </div>
    </div>
  );
};

export default LandingUserTwo;
