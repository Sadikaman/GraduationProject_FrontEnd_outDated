import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { FaAirbnb } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
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
            <section className='flex flex-col flex-wrap bg-white dark:bg-gray-900 dark:text-white font-mono pl-44 pr-44 rounded-t-lg overflow-hidden h-[800px] ' id='About'>
    
                <div className="bg-cover bg-center  w-full h-full shadow-lg shadow-gray-500 flex items-center justify-center flex-co" style={{backgroundImage: "url('/Landing.jpg')" ,borderRadius:"150px"}}  >
                   <div className=''>
                    <p className='text-xl text-white font-bold pt-5'>ELEVATE YOUR TRAVEL JOURNEY</p>
                    <h1 className='text-6xl text-white font-bold pt-5 pb-5'>Discover Ethiopia <br /> Where History <br /> Unfolds!!</h1>
                    <Button className='w-52 p-2 bg-white text-black rounded-full border-2 border-gray-500'>Book Trip Now</Button>
                    </div>
                    
                </div>
  
            </section>

            <div className='pt-16 flex gap-20 pl-40 dark:bg-gray-900 dark:text-white'>
            <div className='flex justify-center gap-10 p-5 border-2 border-gray-200 w-96 rounded-full dark:bg-gray-900 dark:text-white'>
                        <p className='text-xl font-extrabold'>Follow</p>
                        <a href="https://www.facebook.com/shemsy.shemsy.925 "><FaFacebook style={{ fontSize: "30px"}} /></a>
                        <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg= " ><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                        <a href="https://t.me/kingnuru "><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
                    </div>
                    <div className='flex gap-20 pt-5'>
                        <p className='text-2xl font-extrabold text-gray-400 flex gap-5'><FaAirbnb /> Airbnb</p>
                        <p className='text-2xl font-extrabold text-gray-400 '>Booking.com</p>
                        <p className='text-2xl font-extrabold text-gray-400 flex gap-5'><FaAffiliatetheme /> Trivago</p>
                        <p className='text-2xl font-extrabold text-gray-400 flex gap-5'><GiCommercialAirplane /> Expendia</p>
                    </div>
                    </div>
        </>
    )
}

export default Hero
