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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail",
    element: <ProductDetail />,
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
    path: "/register",
    element: <WrapperRegister />,
  },
  {
    path: "/logged_user",
    element: <LandingUser />,
  },
  {
    path: "/profile_logged",
    element: <ProfileLogged />,
  },
  {
    path: "/sell_something",
    element: <SellSomething />,
  },
  {
    path: "/search_product",
    element: <SearchProduct />,
  },
  {
    path: "/my_store",
    element: <MyStore />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/update_barang",
    element: <UpdateStore />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
