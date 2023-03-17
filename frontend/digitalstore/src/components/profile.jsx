import Header from "./header";
import Navigator from "./navigator";
import Wrapper from "./profilecomponent/wrapper";

const Profile = () => {
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <div>
        <Wrapper />
      </div>
      <div className=" fixed bottom-0 w-full">
        <Navigator />
      </div>
    </div>
  );
};

export default Profile;
