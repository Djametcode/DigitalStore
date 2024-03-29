import LogOut from "./logout";
import MenuUser from "./menu_user";
import MenuUserExtends from "./menu_user_2";

const ProfileDetail = () => {
  const name = localStorage.getItem("name");
  return (
    <div>
      <div className=" flex bg-base-200">
        <div className=" flex bg-base-200 justify-center p-4">
          <div className=" bg-iphone bg-cover w-16 h-16 rounded-full"></div>
        </div>
        <div className=" flex flex-col justify-start p-3 bg-base-100 rounded-lg m-3 w-full font-quick">
          <p className=" text-sm">{name}</p>
          <p className=" text-sm">About Me : </p>
        </div>
      </div>
      <div className=" bg-base-200 text-sm font-quick flex justify-between p-3">
        <div className="  hover:bg-blue-500 rounded-xl p-3 cursor-pointer flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <div className=" flex flex-col justify-center">
            <p className=" text-l">Pesanan Saya</p>
          </div>
        </div>
        <div className=" hover:bg-blue-500 hover:rounded-xl pl-3 cursor-pointer flex gap-1">
          <div className=" flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          <div className="  flex flex-col justify-center">
            <div className="  flex">
              <div className=" flex flex-col justify-center">
                <p> Lihat riwayat pesanan </p>
              </div>
              <div className=" flex flex-col justify-center">
                <span className=" flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MenuUser />
      </div>
      <div className=" p-2 font-jost">
        <p>Menu Lain :</p>
      </div>
      <div>
        <MenuUserExtends />
      </div>
      <div>
        <LogOut />
      </div>
    </div>
  );
};

export default ProfileDetail;
