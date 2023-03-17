import ProductLists from "../foryouproduct";
import Header from "../header";
import Menu from "../menu";
import NavigatorLoggedUser from "./navigation_logged_user";

const LandingUser = () => {
  const name = localStorage.getItem("name");
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <div className=" font-jost p-2 bg-gradient-to-br from-slate-800 to-slate-500">
        <p>Selamat datang {name}</p>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <ProductLists />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavigatorLoggedUser />
      </div>
    </div>
  );
};

export default LandingUser;
