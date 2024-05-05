import React, { useState, useEffect } from 'react';
import { Navbar, Button } from 'flowbite-react';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        // Use Tailwind dark mode utility classes on the body element
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="flex  bg-white dark:bg-gray-900 pt-6 font-sans ">
            <div className="bg-white flex dark:bg-gray-900 w-full justify-center">
                <Navbar className='dark:bg-gray-900 dark:text-white' fluid rounded >
                    <Navbar.Brand>
                        <a href=""><img src="/AfroLogo.png" className="h-20 pr-24 " alt="" /></a>
                    </Navbar.Brand>
                    <div className="flex md:order-2  pl-24">
                        <a className='</a>' href="/Joinus"><Button className='w-36 h-14 rounded-full bg-black dark:bg-white dark:text-black text-xl font-extrabold' >Book trip</Button></a>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="/" active className='text-2xl font-extrabold'>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#" className='text-xl text-bold'>About</Navbar.Link>
                        <Navbar.Link href="/Tour" className='text-xl text-bold'>Tour</Navbar.Link>
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
    );
};

export default Nav ;
