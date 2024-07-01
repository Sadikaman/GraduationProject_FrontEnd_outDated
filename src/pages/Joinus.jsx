import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { BsCartDashFill } from "react-icons/bs";
import { DarkModeProvider } from "../component/DarkModeProvider";

const Joinus = () => {
  const [isTourist, setIsTourist] = useState(false);

  const handleCheckboxChange = (isTourist) => {
    setIsTourist(isTourist);
  };

  const handleContinue = () => {
    const registerPage = isTourist ? "/Register" : "/RegisterServicesProvider";
    window.location.href = registerPage; // Redirect to the selected page
  };
  const [theme, setTheme] = useState("Light");
  // Initialize dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  return (
    <DarkModeProvider>
      <div className="font-kanit transition-colors  h-full flex justify-center dark:bg-gray-900 dark:text-white items-center w-full min-h-screen overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 flex-wrap justify-center">
          <div className="flex flex-col items-center md:items-start">
            
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* Use different images for light and dark mode */}
                {darkMode ? (
                  <img
                    src="/AfroLogo.jpg" // Dark mode logo image
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20"
                    alt="Afro Logo"
                  />
                ) : (
                  <img
                    src="/AfroLogo.png" // Light mode logo image
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20"
                    alt="Afro Logo"
                  />
                )}
              </a>
            <h1 className="pt-6 text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left">
              Join as a Tourist or a Service Provider
            </h1>
          </div>
          <form className="flex flex-col w-full flex-wrap">
            <div className="lg:flex-row flex flex-row xl:gap-16 md:gap-5 md:flex-col sm:flex-col flex-wrap pt-2 justify-center">
              <div className="mt-4 border-2 border-black w-72 h-80 flex flex-col items-end p-2 rounded-3xl dark:border-white">
                <input
                  type="checkbox"
                  checked={isTourist}
                  onChange={() => handleCheckboxChange(true)}
                  className="mr-2 rounded-full w-10 h-10 dark:bg-gray-700 dark:border-white"
                  id="touristCheckbox"
                  required
                />
                <div className="m-10">
                  <FaPersonWalkingLuggage className="text-[60px] dark:text-white" />
                  <label className="text-3xl dark:text-white" htmlFor="touristCheckbox">
                    I am a Tourist
                  </label>
                </div>
              </div>
              <div className="mt-4 border-2 border-black w-72 h-80 flex flex-col items-end p-2 rounded-3xl dark:border-white">
                <input
                  type="checkbox"
                  checked={!isTourist}
                  onChange={() => handleCheckboxChange(false)}
                  className="mr-2 rounded-full w-10 h-10 dark:bg-gray-700 dark:border-white"
                  id="serviceProviderCheckbox"
                  required
                />
                <div className="m-10">
                  <BsCartDashFill className="text-[60px] dark:text-white" />
                  <label className="text-3xl dark:text-white" htmlFor="serviceProviderCheckbox">
                    I am a Service Provider
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
              <Button
                className="rounded-full w-32 dark:bg-gray-700 dark:hover:bg-gray-800"
                pill="true"
                size="md"
                color="dark"
                onClick={handleContinue}
              >
                Continue
              </Button>
              <p className="mt-4 flex gap-2 text-gray-500 text-md dark:text-gray-400">
                I  have an account{" "}
                <a href="/Login" className="hover:underline text-blue-600 font-medium dark:text-blue-400">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Joinus;
