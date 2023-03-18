import Header from "../header";
import NavPostingan from "./nav_postingan";
import UpdateForm from "./updateForm";

const UpdateStore = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <UpdateForm />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavPostingan />
      </div>
    </div>
  );
};

export default UpdateStore;
