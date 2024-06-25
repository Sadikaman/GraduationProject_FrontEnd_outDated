import React, { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage
    const savedMode = localStorage.getItem('darkMode');
    try {
      // Check if savedMode is truthy and parse JSON
      return savedMode ? JSON.parse(savedMode) : false;
    } catch (error) {
      console.error('Error parsing dark mode state:', error);
      return false; // Default to false if parsing fails
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Apply or remove the 'dark' class on body based on darkMode state
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save the current mode to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleMode = () => {
    setAnimate(true);
    setDarkMode(prevMode => !prevMode);
    setTimeout(() => setAnimate(false), 500); // duration of the animation
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/AfroLogo.jpg"
            className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20"
            alt="Afro Logo"
          />
        </a>

        {/* Main Menu and Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="/About" className="text-xl md:text-2xl hover:underline font-semibold text-[#101010] dark:text-[#ffffff] block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">About</a>
            </li>
            <li>
              <a href="/Tour" className="text-xl md:text-2xl hover:underline font-semibold text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tour</a>
            </li>
            <li>
              <a href="Community" className="text-xl md:text-2xl hover:underline font-semibold text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
            </li>
            <li>
              <a href="/Contacts" className="text-xl md:text-2xl hover:underline font-semibold text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
          {/* Get Started Button for Desktop */}
          <a href="Joinus">
            <button
              type="button"
              className="text-white ml-5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-lg md:text-xl p-2 md:p-3 w-28 md:w-36 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleMode}
          className={`ml-auto md:ml-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg transition-transform duration-500 ${animate ? 'animate-rotate-360' : ''}`}
        >
          {darkMode ? (
            <IoSunnyOutline className='text-2xl md:text-3xl text-yellow-300' />
          ) : (
            <FaMoon className='text-2xl md:text-3xl text-gray-800' />
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>
      )}

      {/* Collapsible Menu for Small Screens */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} relative z-20`}>
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a href="/About" className="text-2xl font-semibold text-[#101010] block py-2 px-3 rounded hover:underline hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="/Tour" className="text-2xl font-semibold hover:text-gray-800 text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" onClick={closeMenu}>Tour</a>
          </li>
          <li>
            <a href="/Community" className="text-2xl hover:text-gray-800 font-semibold text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" onClick={closeMenu}>Community</a>
          </li>
          <li>
            <a href="/Contacts" className="text-2xl hover:text-gray-800 font-semibold text-[#101010] block py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" onClick={closeMenu}>Contacts</a>
          </li>
          {/* Get Started Button for Mobile */}
          <li>
            <a href="Joinus">
              <button
                type="button"
                className="w-full text-white bg-[#101010] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-2"
                onClick={closeMenu}
              >
                Get started
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
