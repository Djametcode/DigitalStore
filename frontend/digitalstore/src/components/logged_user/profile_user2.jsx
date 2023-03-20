import Header from "../header";
import NavUserTwo from "./nav_user2";
import ProfileDetail from "./profile_detail";

const ProfileUserTwo = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ProfileDetail />
      </div>
      <div className=" fixed bottom-0 w-full">
        <NavUserTwo />
      </div>
    </div>
  );
};

export default ProfileUserTwo;
