import ProductLists from "./foryouproduct";
import Header from "./header";
import Navigator from "./navigator";

const Chat = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
      </div>
      <div className=" bg-emerald-500 text-white font-quick text-center p-8">
        <p>Silahkan Login/ register terlebih dahulu</p>
      </div>
      <div>
        <ProductLists />
      </div>
      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default Chat;
