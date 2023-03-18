import Header from "../header";
import InputForms from "./inputForms";
import NavPostingan from "./nav_postingan";

const SellSomething = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <InputForms />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default SellSomething;
