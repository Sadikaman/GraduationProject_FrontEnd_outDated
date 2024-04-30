
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import "./index.css";
import  Footers from "./component/Footers";
import ScrollToTopButton from "./component/ScrollToTopButton"

'use client';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>

<div className="App dark:bg-gray-950 dark:text-white ">
      <Nav/>
      <Outlet />
      <Footers />

        <ScrollToTopButton />

      </div >
    </>
  );
}

export default App;