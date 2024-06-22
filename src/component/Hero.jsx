import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Button } from 'flowbite-react';
import { FaArrowRight,FaAirbnb } from 'react-icons/fa';
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
            <section className='flex flex-col bg-white dark:bg-gray-900 dark:text-white font-mono rounded-t-lg overflow-hidden md:h-[800px] md:pl-0 md:pr-0 p-2 xl:pl-28 xl:pr-28 justify-center' id='About'>
                <div className="bg-cover bg-center xl:rounded-[100px] md:rounded-xl flex-wrap w-full h-full shadow-gray-500 flex items-center justify-center flex-col" style={{ backgroundImage: "url('/Landing.jpg')" }}>
                    <div className='text-center'>
                        <p className='xl:text-xl text-white font-bold pt-5 md:text-lg'>ELEVATE YOUR TRAVEL JOURNEY</p>
                        <h1 className='xl:text-6xl text-white md:text-2xl font-bold pt-5 pb-5 text-center'>
                            Discover Ethiopia <br /> Where History <br /> Unfolds!!
                        </h1>
                        <Button href='/Payment' className='xl:w-52 md:w-40 p-2 bg-white text-black rounded-full border-2 border-gray-500'>
                            Book Trip Now
                        </Button>
                    </div>

                    {/* Know More Section */}
                    <div className='flex  justify-end items-end w-full'>
                    <div className=' rounded-2xl shadow-lg  w-80 h-44 ' style={{ background: '#fff' }}>
                        <div className="relative z-10 flex flex-col space-y-2 p-4 w-full">
                            <div className="flex items-center justify-between space-x-2">
                                <h3 className="text-lg font-bold">Know More</h3>
                                <FaArrowRight className="text-xl" />
                            </div>
                            <div className="flex space-x-2 overflow-hidden">
                                <img src="/path_to_image_1.jpg" alt="Location 1" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/path_to_image_2.jpg" alt="Location 2" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/path_to_image_3.jpg" alt="Location 3" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">Awesome Places</h4>
                                <p className="text-sm text-gray-600">Discover the Ethiopia nature</p>
                            </div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 110" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: -1 }}>
                            <path d="M0,0 C0,0 190,110 250,110 L250,0 Z" fill="#fff"/>
                        </svg>
                    </div>
                    </div>
                </div>
            </section>

            <div className='pt-16 flex flex-col md:flex-row gap-8 pl-4 md:pl-40 dark:bg-gray-900 dark:text-white'>
                <div className='flex justify-center gap-10 p-5 border-2 border-gray-200 w-full md:w-96 rounded-full dark:bg-gray-900 dark:text-white'>
                    <p className='text-xl font-extrabold'>Follow</p>
                    <a href="https://www.facebook.com/shemsy.shemsy.925 "><FaFacebook style={{ fontSize: "30px" }} /></a>
                    <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg= "><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                    <a href="https://t.me/kingnuru "><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
                </div>
                <div className='flex xl:gap-8 md:gap-5 sm:gap-3 pt-5'>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><FaAirbnb /> Airbnd</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><GiCommercialAirplane /> Booking.com</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><GiCommercialAirplane /> Trivago</p>
                    <p className='xl:text-2xl md:text-sm font-extrabold text-gray-400 flex xl:gap-5'><GiCommercialAirplane /> Expendia</p>

                   
                </div>
            </div>
        </>
    );
};

export default Hero;
