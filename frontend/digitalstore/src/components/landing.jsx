import Footer from "./footer";
import ForYou from "./foryou";
import Header from "./header";
import Menu from "./menu";

const DigitalStore = () => {
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <Menu />
      <ForYou />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default DigitalStore;
