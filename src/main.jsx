import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Calender from "./pages/Calender";
import Account from "./pages/Account.jsx";
import Contact from "./component/Contact.jsx";
import Login from "./pages/Login"
import  Tour  from "./pages/Tour";
import Community from "./pages/Community.jsx";
import Searchbar from "./component/Searchbar.jsx";
import Joinus from "./pages/Joinus.jsx"
import RegisterServicesProvider from "./pages/RegisterServicesProvider.jsx";
import VerifyRegisterServicesProvider from "./pages/VerifyRegisterServicesProvider.jsx";
import { Payment } from "./component/Payment.jsx";
import Confirmation from "./component/Confirmation.jsx";
import { Confirm } from "./component/Confirm.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
// import { Verfication } from "./component/Verfication.jsx";
import { Verfication } from "./component/Verfication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Community",
        element: <Community />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Tour",
        element: <Tour />,
      },
      {
        path: "/Calender",
        element: <Calender />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Searchbar",
        element: <Searchbar />,
      },
      {
        path: "/Joinus",
        element: <Joinus />,
      },
    
      {
        path: "/RegisterServicesProvider",
        element: <RegisterServicesProvider />,
      },
      {
        path: "/VerifyRegisterServicesProvider",
        element:<VerifyRegisterServicesProvider />
      },
      {
        path: "/Payment",
        element:<Payment />
      },
      {
        path: "/Confirmation",
        element:<Confirmation />
      },
      {
        path: "/Confirm",
        element:<Confirm />
      },
      {
        path: "/Verfication",
        element:<Verfication />
      },
      {
        path: "/Pricing",
        element:<Pricing />
      },
      {
        path: "/About",
        element:<About />
      },
      {
        path: "/Contacts",
        element:<Contacts />
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
