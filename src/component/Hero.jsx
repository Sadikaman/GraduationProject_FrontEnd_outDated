import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Button } from 'flowbite-react';
import { FaAirbnb, FaAffiliatetheme,FaArrowRight } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';

const Hero = ({ isDarkMode, toggleDarkMode }) => {
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
            <section className='flex flex-col bg-white dark:bg-gray-900 dark:text-white font-mono  rounded-t-lg overflow-hidden md:h-[800px] md:pl-0 md:pr-0 p-2 xl:pl-28 xl:pr-28 justify-center' id='About'>
                <div className="bg-cover bg-center  xl:rounded-[100px] md:rounded-xl   flex-wrap w-full h-full shadow-gray-500 flex items-center justify-center flex-col" style={{ backgroundImage: "url('/Landing.jpg')" }}>
                    <div className=''>
                        <p className='xl:text-xl text-white font-bold pt-5 md:text-lg'>ELEVATE YOUR TRAVEL JOURNEY</p>
                        <h1 className='xl:text-6xl text-white md:text-2xl font-bold pt-5 pb-5 text-center'>Discover Ethiopia <br /> Where History <br /> Unfolds!!</h1>
                        <Button href='/Payment' className='xl:w-52 md:w-40 p-2 bg-white text-black rounded-full border-2 border-gray-500'>Book Trip Now</Button>
                    </div>
                
                {/* cut part  */}
                    <div className='h-44 w-96 absolute flex   ml-[1230px] mt-[609px] rounded-br-[80px]  bg-gray-100'>
                       
                        
                            <div className=' '>
                            <h1 className='flex justify-end p-2 font-medium gap-8 mt-4'>Know More  <FaArrowRight /></h1>
                        <div className='flex gap-20 mt-8 p-2'>

                            <div className='flex w-52 h-16'>
                            <img className='w-16 rounded-full' src="/hawolet.jpg" alt="" />
                            <img className='w-16 rounded-full' src="/harar.jpg" alt="" />
                            <img className='w-16 rounded-full' src="/lalibala.jpg" alt="" />
                                
                            </div>

                            <div className='flex  flex-col'>
                                <h1 className='font-medium'>Awesome place</h1>
                                <p>descover the the ethiopia nature </p>
                            </div>

                        </div>

                        </div>
                    </div>

                </div>
                
            </section>
           
        
            <div className='pt-16 flex flex-col md:flex-row gap-8 pl-4 md:pl-40 dark:bg-gray-900 dark:text-white'>
                <div className='flex justify-center gap-10 p-5 border-2 border-gray-200 w-full md:w-96 rounded-full dark:bg-gray-900 dark:text-white'>
                    <p className='text-xl font-extrabold'>Follow</p>
                    <a href="https://www.facebook.com/shemsy.shemsy.925 "><FaFacebook style={{ fontSize: "30px"}} /></a>
                    <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg= " ><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                    <a href="https://t.me/kingnuru "><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
                </div>
                <div className='flex xl:gap-8 md:gap-5 sm:gap-3 pt-5'>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><FaAirbnb /> Airbnb</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400'>Booking.com</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><FaAffiliatetheme /> Trivago</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><GiCommercialAirplane /> Expendia</p>
                </div>



            </div>
        </>
    );
};

export default Hero;
