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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
