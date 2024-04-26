import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
const Navbars = ({ isDarkMode, toggleDarkMode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        // Use Tailwind dark mode utility classes on the body element
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);
    return (
        <div className="flex flex-col items-start bg-white pt-80 pr-28 pl-10 pb-5 dark:bg-gray-900 dark:text-white">

            <div className="w-full  sm:flex sm:items-center sm:justify-between">
                <p>© 2024 DevNuru™</p>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <a href="https://www.facebook.com/shemsy.shemsy.925"><FaFacebook style={{ fontSize: "30px" }} /></a>
                    <a href="https://github.com/nuryassinm "><FaGithubSquare style={{ fontSize: "30px" }} /></a>
                    <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg="><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                    <a href="https://t.me/kingnuru"><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
                </div>
        
            </div>
        </div>

    )
}



export default Navbars;

