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
// import Confirmation from "./components/Confirmation";
// import  Footers  from "./component/Footers.jsx"; // Import Footer component

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
      // {
      //   path: "/confirmation",
      //   element: <Confirmation />,
      // },
      // Include footer component on specific routes
      // {
      //   path: "/",
      //   element: (
      //     <>
      //       <Footers />
      //       <Route />
      //     </>
      //   ),
      // },
      // {
      //   path: "/register",
      //   element: (
      //     <>
      //       <Footers />
      //       <Route />
      //     </>
      //   ),
      // },
      // {
      //   path: "/login",
      //   element: (
      //     <>
      //       <Footers />
      //       <Route />
      //     </>
      //   ),
      // },
      // {
      //   path: "/contact",
      //   element: (
      //     <>
      //       <Footers />
      //       <Route />
      //     </>
      //   ),
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
