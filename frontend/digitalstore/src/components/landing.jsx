import Footer from "./footer";
import ForYou from "./foryou";
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
      <ForYou />
      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default DigitalStore;
