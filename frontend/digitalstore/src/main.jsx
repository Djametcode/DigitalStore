import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/productDetail";
import Chat from "./components/chat";
import Profile from "./components/profile";
import WrapperRegister from "./components/profilecomponent/register";
import LandingUser from "./components/logged_user/landing_user";
import ProfileLogged from "./components/logged_user/profil_logged";
import SearchProduct from "./components/search";
import ErrorPage from "./components/error";
import SellSomething from "./components/logged_user/sell_some";
import MyStore from "./components/logged_user/mystore";
import UpdateStore from "./components/logged_user/updateStore";
import ProtectedRoute from "./components/protectedRoutes";
import IsLogged from "./components/protected/isLogged";
import IsLoggedProfile from "./components/protected/isLogged_profile";
import IsLoggedSell from "./components/protected/islogged_sell";
import IsLoggedMyStore from "./components/protected/isLogged_mystore";
import IsLoggedUpdate from "./components/protected/isLogged_update";
import SearchProtect from "./components/protected/search_protect";
import Cart from "./components/logged_user/cart";
import IsLoggedCart from "./components/protected/isLogged_cart";
import LandingProtect from "./components/protected/landing_protect";
import PaymentProtect from "./components/protected/isLogged_MyOrder";
import MyOrder from "./components/payment/myOrder";
import LandingUserTwo from "./components/logged_user/landing_user2";
import ProfileUserTwo from "./components/logged_user/profile_user2";
import CartUsertwo from "./components/logged_user/cart_user2";
import IsLoggedLandingUser2 from "./components/protected/isLogged_landing_user2";
import IsLoggedProfileUserTwo from "./components/protected/isLogged_profileUser2";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <WrapperRegister />,
  },
  {
    path: "/cart2",
    element: <CartUsertwo />,
  },
  {
    path: "/profile_logged",
    element: (
      <IsLoggedProfile>
        <ProfileLogged />
      </IsLoggedProfile>
    ),
  },
  {
    path: "/profile_user2",
    element: (
      <IsLoggedProfileUserTwo>
        <ProfileUserTwo />
      </IsLoggedProfileUserTwo>
    ),
  },
  {
    path: "/landing_user2",
    element: (
      <IsLoggedLandingUser2>
        <LandingUserTwo />
      </IsLoggedLandingUser2>
    ),
  },
  {
    path: "/sell_something",
    element: (
      <IsLoggedSell>
        <SellSomething />
      </IsLoggedSell>
    ),
  },
  {
    path: "/my_store",
    element: (
      <IsLoggedMyStore>
        <MyStore />
      </IsLoggedMyStore>
    ),
  },
  {
    path: "/",
    element: (
      <LandingProtect>
        <App />
      </LandingProtect>
    ),
  },
  {
    path: "/update_barang",
    element: (
      <IsLoggedUpdate>
        <UpdateStore />
      </IsLoggedUpdate>
    ),
  },
  {
    path: "/logged_user",
    element: (
      <IsLogged>
        <LandingUser />
      </IsLogged>
    ),
  },
  {
    path: "/detail",
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/search_product",
    element: (
      <SearchProtect>
        <SearchProduct />
      </SearchProtect>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/cart",
    element: (
      <IsLoggedCart>
        <Cart />
      </IsLoggedCart>
    ),
  },
  {
    path: "/bayar",
    element: (
      <PaymentProtect>
        <MyOrder />
      </PaymentProtect>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
