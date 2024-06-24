import React, { useState, useEffect } from 'react';
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
    <div className="p-5 md:p-10 xl:p-20">
      <Footer container className="border-2 border-gray-300 rounded-3xl">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col items-center md:items-start">
              <Footer.Brand
                className="w-20 h-auto mb-4 md:mb-0"
                src="/AfroLogo.png"
                alt="Afro Logo"
              />
              <h1 className="text-center md:text-left text-sm sm:text-lg md:text-xl text-gray-400">
                Discover the world one <br /> adventure at a time <br /> Life is short, book a trip
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-8 text-center sm:mt-4 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-10">
              <div>
                <Footer.Title className="text-extrabold text-lg sm:text-xl md:text-2xl" title="Company" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Careers</Footer.Link>
                  <Footer.Link href="#">Contact</Footer.Link>
                  <Footer.Link href="#">Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-extrabold text-lg sm:text-xl md:text-2xl" title="Resources" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-extrabold text-lg sm:text-xl md:text-2xl" title="Policy" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <Footer.Copyright href="#" by="Afro tour & Travel, all rights reserved™" year={2024} />
            <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={FaLinkedin} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Footers;
