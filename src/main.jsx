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
import DiscoverPlaces from "./pages/DiscoverPlaces.jsx";
import Community from "./pages/Community.jsx";
import TravelProviderSidebadr from "./component/TravelProviderSidebadr.jsx";
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
import PaymentHistory from "./pages/PaymentHistory.jsx";
import { Verfication } from "./component/Verfication.jsx";
import TravelProviderPage from "./pages/TravelProviderPage.jsx";
import Tour from "./pages/Tour.jsx";
import Packagess from "./pages/Packagess.jsx";
import Tpcustomer from "./pages/Tpcustomer.jsx";
import TpStatus from "./pages/TpStatus.jsx";
import TpEarning from "./pages/TpEarning.jsx";
import Notification from "./pages/Notification.jsx";
import TpSetting from "./pages/TpSetting.jsx";
import TpTransaction from "./pages/TpTransaction.jsx";
import MessagingInterface from "./pages/MessagingInterface.jsx";
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
        path: "/DiscoverPlaces",
        element: <DiscoverPlaces />,
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
      {
        path: "/PaymentHistory",
        element:<PaymentHistory />
      },
      {
        path: "/TravelProviderPage",
        element:<TravelProviderPage />
      },
      {
        path: "/TravelProviderSidebadr",
        element:<TravelProviderSidebadr />
      },
      {
        path: "/Tour",
        element:<Tour />
      },
      {
        path: "/Packagess",
        element:<Packagess />
      },
      {
        path: "/TpStatus",
        element:<TpStatus />
      },
      {
        path: "/Tpcustomer",
        element:<Tpcustomer />
      },
      {
        path: "/TpEarning",
        element:<TpEarning />
      },
      {
        path: "/Notification",
        element:<Notification />
      },
      {
        path: "/TpSetting",
        element:<TpSetting />
      },
      {
        path: "/TpTransaction",
        element:<TpTransaction />
      },
      {
        path: "/MessagingInterface",
        element:<MessagingInterface />
      },
      // {
      //   path: "/TpSetting",
      //   element:<TpSetting />
      // },
      // {
      //   path: "/TpSetting",
      //   element:<TpSetting />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
