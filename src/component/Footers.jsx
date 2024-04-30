import React from 'react'
import { useState, useEffect } from 'react';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Footers = ({ isDarkMode, toggleDarkMode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        // Use Tailwind dark mode utility classes on the body element
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);
    return (
        <div className="p-20">
    <Footer container className="border-2 border-gray-300 rounded-3xl">
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="flex flex-col">
          <Footer.Brand
            className="w-20 h-auto "
            src="/AfroLogo.png"
            alt="Afro Logo"
          />
          <h1 className="text-xl text-gray-400">Discover the world one <br /> adventure at a time <br /> Life is short, book a trip</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title className="text-extrabold text-2xl" title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
              
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-extrabold text-2xl" title="Resources" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-extrabold text-2xl" title="Policy" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Afro tour & Travel,  all  rights reserved™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={FaLinkedin} />
          <Footer.Icon href="#" icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  </div>

    )
}



export default Footers;

