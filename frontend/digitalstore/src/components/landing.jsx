import Carousel_landing from "./carousel_landing";
import ProductLists from "./foryouproduct";
import Header from "./header";
import Menu from "./menu";
import Navigator from "./navigator";

const DigitalStore = () => {
  return (
    <div className=" sm:hidden">
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <Menu />
      <div>
        <Carousel_landing />
      </div>
      <ProductLists />
      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default DigitalStore;
