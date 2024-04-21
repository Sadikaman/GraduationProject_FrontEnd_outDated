import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
const Hero = (isDarkMode, toggleDarkMode) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Use Tailwind dark mode utility classes on the body element
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);
    return (
        <>
            <section className='flex flex-col flex-wrap bg-white dark:bg-gray-900 dark:text-white font-mono pl-44 pr-44 rounded-t-lg overflow-hidden h-screen ' id='About'>
    
                <div className="bg-cover bg-center  w-full h-full shadow-md shadow-gray-500/50" style={{backgroundImage: "url('/Landing.jpg')" ,borderRadius:"150px"}}  >
                   <div className='p-72'>
                    <p className='text-xl text-white font-bold pt-5'>ELEVATE YOUR TRAVEL JOURNEY</p>
                    <h1 className='text-6xl text-white font-bold pt-5'>Discover Ethiopia <br /> Where History <br /> Unfolds!!</h1>
                    <Button className='w-40 bg-white text-black'>Book Trip Now</Button>
                    </div>
                    <div className='flex justify-center gap-10 pt-8 '>
                        <a href="https://www.facebook.com/shemsy.shemsy.925"><FaFacebook style={{ fontSize: "30px" }} /></a>
                        <a href="https://github.com/nuryassinm "><FaGithubSquare style={{ fontSize: "30px" }} /></a>
                        <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg="><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                        <a href="https://t.me/kingnuru"><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
                    </div>
                </div>
  
            </section>
           
        </>
    )
}

export default Hero
