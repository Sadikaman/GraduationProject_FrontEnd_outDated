import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Button } from 'flowbite-react';
import { FaArrowRight,FaAirbnb,FaPlayCircle } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';

const Hero = ({ isDarkMode, toggleDarkMode }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <>
<section className='mt-[120px] flex flex-col bg-white dark:bg-gray-900 dark:text-white font-mono rounded-t-lg overflow-hidden md:h-[810px] p-2 md:p-0 xl:px-28 justify-center' id='About'>
                <div className="bg-cover bg-center xl:rounded-[100px] md:rounded-xl flex-wrap w-full h-full shadow-gray-500 flex justify-center flex-col" style={{ backgroundImage: "url('/Landing.jpg')" }}>
                    <div className='ml-10 md:ml-20 lg:ml-40'>
                        <p className='xl:text-xl text-white font-bold pt-5 md:text-lg'>ELEVATE YOUR TRAVEL JOURNEY</p>
                        <h1 className='xl:text-6xl text-white md:text-4xl font-bold pt-5 pb-5'>
                            Discover Ethiopia <br /> Where History <br /> Unfolds!
                        </h1>
                        <a href="/Pricing" className='flex gap-5 items-center'>
                            <button className='xl:w-52 md:w-40 p-4 bg-[#2986FE] text-white rounded-full'>
                                Book Trip Now
                            </button>
                            <FaPlayCircle className='w-12 h-12 p-3 rounded-full text-[#2986FE] bg-white'/>
                        </a>
                    </div>

                    {/* Know More Section */}
            <div className='hidden md:flex  justify-center items-end w-[82%] h-full '>
                <div className=' rounded-2xl   w-[400px] h-44'>
                    <div className=" z-10 flex flex-col  p-4 w-full   ">
                            <div className='flex justify-end  '>
                            <section className='flex justify-end  w-[310px] rounded-tl-3xl pt-2 bg-white dark:bg-gray-900'>
                            <div className="flex items-center justify-center pt-5  gap-20 dark:bg-gray-800 bg-gray-100 w-[300px] rounded-3xl rounded-bl-none rounded-br-none pb-6">
                                <h3 className="text-lg text-black font-bold dark:text-[#ffffff]">Know More</h3>
                                <FaArrowRight className="text-xl" />
                            </div>
                            </section>
                            </div>
                        <div className='flex  pt-4  bg-gray-100 dark:bg-gray-800 border-l-12  gap-5 border-l-8 border-white dark:border-gray-900 rounded-tl-full rounded-bl-full rounded-br-full '>
                            <div className="flex  overflow-hidden   p-2">
                                <img src="/afar.jpg" alt="Location 1" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/aksum.jpg" alt="Location 2" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/hawolet.jpg" alt="Location 3" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div >
                                <h4 className="text-sm font-semibold">Awesome Places</h4>
                                <p className="text-sm text-gray-600">Discover the <br /> Ethiopia nature</p>
                            </div>
                        </div>
                    </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 110" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: -1 }}>
                            <path d="M0,0 C0,0 190,110 250,110 L250,0 Z" fill="#fff"/>
                        </svg>
                </div>
            </div>
        </div>
</section>
{/* large screen size  */}
<div className='flex xl:hidden lg:hidden justify-center items-end w-full  mt-3 p-2'>
                <div className='w-[400px]   flex  gap-5  rounded-3xl'>
                       
                            <div className="flex  overflow-hidden">
                                <img src="/afar.jpg" alt="Location 1" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/aksum.jpg" alt="Location 2" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/hawolet.jpg" alt="Location 3" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div >
                                <h4 className="text-sm font-semibold">Awesome Places</h4>
                                <p className="text-sm text-gray-600">Discover the <br /> Ethiopia nature</p>
                            </div>
                        
                </div>
            </div>
{/* /////////// */}

            {/* Social Media and Partners */}
            
            <div className="pt-16 flex flex-col md:flex-row gap-8 md:gap-40 pl-4 md:pl-20 dark:bg-gray-900 dark:text-white w-full justify-center items-center">

{/* small screen size  */}
                    <div className="flex xl:hidden lg:hidden w-full items-center justify-start  gap-2">
                        <h3 className="text-sm text-black font-bold dark:text-[#ffffff]">Know More</h3>
                        <FaArrowRight className="text-xl" />
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 110" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: -1 }}>
                            <path d="M0,0 C0,0 190,110 250,110 L250,0 Z" fill="#fff"/>
                        </svg>
                    </div>
{/* ///////// */}
                <div className="flex justify-center gap-4 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border-2 border-gray-200 w-72 rounded-full dark:bg-gray-800">
                    <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl font-extrabold">Follow</p>
                    <a href=""><FaFacebook className='text-base sm:text-sm md:text-md lg:text-lg xl:text-2xl' /></a>
                    <a href=""><RiInstagramFill className='text-base sm:text-sm md:text-md lg:text-xl xl:text-2xl'/></a>
                    <a href=""><FaTelegramPlane className='text-base sm:text-sm md:text-md lg:text-xl xl:text-2xl'/></a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-5 items-center pt-5">
                    <p className="text-2xl md:text-lg font-extrabold text-gray-400 flex items-center gap-2"><FaAirbnb /> Airbnb</p>
                    <p className="text-2xl md:text-lg font-extrabold text-gray-400 flex items-center gap-2">Booking.com</p>
                    <p className="text-2xl md:text-lg font-extrabold text-gray-400 flex items-center gap-2"><GiCommercialAirplane /> Trivago</p>
                    <p className="text-2xl md:text-lg font-extrabold text-gray-400 flex items-center gap-2"><GiCommercialAirplane /> Expedia</p>
                </div>
            </div>
        </>
    );
};

export default Hero;