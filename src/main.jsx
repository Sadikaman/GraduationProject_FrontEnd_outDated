import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Account from "./pages/Account.jsx";
import Contact from "./component/Contact.jsx";
import Login from "./pages/Login"
// import { Verfication } from "./components/Verfication";
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
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/courses",
      //   element: <Course />,
      // },
      // {
      //   path: "/details",
      //   element: <Details />,
      // },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/verify",
      //   element: <Verfication />,
      // },
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
