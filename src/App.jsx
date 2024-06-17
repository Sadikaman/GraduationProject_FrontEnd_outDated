
import { useState } from 'react';
import { Outlet } from "react-router-dom";
// import Nav from "./component/Nav";
import "./index.css";
// import  Footers from "./component/Footers";
import ScrollToTopButton from "./component/ScrollToTopButton"

'use client';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>

<div className="App dark:bg-gray-90 dark:text-white ">
      
      <Outlet />
     

        <ScrollToTopButton />

      </div >
    </>
  );
}

export default App;