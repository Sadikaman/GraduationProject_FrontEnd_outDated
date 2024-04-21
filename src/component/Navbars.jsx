import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar,Button } from 'flowbite-react';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline} from "react-icons/io5";
const Navbars = ({ isDarkMode, toggleDarkMode }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        // Use Tailwind dark mode utility classes on the body element
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    "use client";
    return (
        <div className="flex  bg-white dark:bg-gray-900 pt-6 font-sans ">
            <div className="bg-white flex dark:bg-gray-900 w-full justify-center ">
                <Navbar fluid rounded > 
                <Navbar.Brand>
                    <a href=""><img src="/AfroLogo.png" className="h-20 pr-16 dark:bg-white" alt="" /></a>
                </Navbar.Brand>
                <div className="flex md:order-2 pl-16">
                    <Button className='w-42 bg-black'>Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active className='text-xl text-bold'>
                    Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl text-bold'>About</Navbar.Link>
                    <Navbar.Link href="#" className='text-xl text-bold'>Services</Navbar.Link>
                    <Navbar.Link href="#" className='text-xl text-bold'>Pricing</Navbar.Link>
                    <Navbar.Link href="#" className='text-xl text-bold'>Contact</Navbar.Link>
                </Navbar.Collapse>
                </Navbar>
    

            </div>
            <div className='mt-2'>
                <button className='w-10 h-10 ml-3' onClick={toggleMode}>
                    {darkMode ? <IoSunnyOutline style={{ fontSize: '25', color: 'yellow', transition: '0.9s' }} /> : <FaMoon style={{ fontSize: '25', transition: '0.9s' }} />}
                </button>
            </div>
        </div>
    )
}

export default Navbars;

