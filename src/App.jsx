
import { useState } from 'react';
import { Outlet } from "react-router-dom";
// import Nav from "./component/Nav";
import "./index.css";
// import  Footers from "./component/Footers";
import Spinner from './component/Spinner';
import ScrollToTopButton from "./component/ScrollToTopButton"

'use client';


function App() {
 

  return (
    <>

<div className="App dark:bg-gray-900 dark:text-white ">
      
      <Outlet />
      
      {/* <Spinner /> */}
        <ScrollToTopButton />

      </div >
    </>
  );
}

export default App;