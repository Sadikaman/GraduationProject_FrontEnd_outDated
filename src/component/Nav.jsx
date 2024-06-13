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
        <div className="flex  bg-white dark:bg-gray-900 pt-6 font-sans flex-row">
            <div className="bg-white flex dark:bg-gray-900 w-full justify-center flex-row">
                <Navbar className='dark:bg-gray-900 dark:text-white  flex flex-row' fluid rounded >
                    <Navbar.Brand>
                        <a href=""><img src="/AfroLogo.png" className="h-20 xl:pr-24 md:pr-0  " alt="" /></a>
                    </Navbar.Brand>
                   
                        <Navbar.Toggle />
                  
                    <Navbar.Collapse className=' shadow-none border-none'>
                        <Navbar.Link href="/" active className='text-2xl font-extrabold'>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="/About" className='text-xl text-bold'>About</Navbar.Link>
                        <Navbar.Link href="/Tour" className='text-xl text-bold'>Tour</Navbar.Link>
                        <Navbar.Link href="/Community" className='text-xl text-bold'>Community</Navbar.Link>
                        <Navbar.Link href="/Contacts" className='text-xl text-bold'>Contact</Navbar.Link>
                        <Navbar.Link href="/Joinus" className=''> <Button className='w-36  h-14 rounded-full bg-black dark:bg-white dark:text-black text-xl font-extrabold' >Get started</Button></Navbar.Link>
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
