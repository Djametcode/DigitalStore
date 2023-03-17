import Header from "../header";
import NavigatorLoggedUser from "./navigation_logged_user";
import ProfileDetail from "./profile_detail";

const ProfileLogged = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ProfileDetail />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavigatorLoggedUser />
      </div>
    </div>
  );
};

export default ProfileLogged;
