import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTelegramPlane, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaAirbnb } from 'react-icons/fa';
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
            <section className='mt-[120px] flex flex-col bg-white dark:bg-gray-900 dark:text-white font-mono rounded-t-lg overflow-hidden md:h-[810px] md:pl-0 md:pr-0 p-2 xl:pl-28 xl:pr-28 justify-center relative' id='About'>
                {/* YouTube Background Video */}
                <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/KR2mSICf2wA?autoplay=1&mute=1&loop=1&playlist=KR2mSICf2wA&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&rel=0"
                        className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="relative z-10 text-container ml-8 md:ml-40">
                    <p className='xl:text-xl text-white font-bold pt-5 md:text-lg'>ELEVATE YOUR TRAVEL JOURNEY</p>
                    <h1 className='xl:text-6xl text-white md:text-2xl font-bold pt-5 pb-5 '>
                        Discover Ethiopia <br /> Where History <br /> Unfolds!
                    </h1>
                    <a href="/Pricing" className='flex gap-5'>
                        <button className='xl:w-52 md:w-40 p-4 bg-[#2986FE] text-white rounded-full'>
                            Book Trip Now
                        </button>
                        <FaPlayCircle className='w-12 h-12 p-3 rounded-full text-[#2986FE] bg-white' />
                    </a>
                </div>

                {/* Know More Section */}
                <div className='flex relative justify-end items-end w-full overflow-hidden mt-8 md:mt-0'>
                    <div className='rounded-2xl shadow-lg w-80 h-44 bg-white'>
                        <div className="p-4">
                            <div className="flex items-center justify-between space-x-2">
                                <h3 className="text-lg font-bold">Know More</h3>
                                <FaArrowRight className="text-xl" />
                            </div>
                            <div className="flex space-x-2 overflow-hidden">
                                <img src="/afar.jpg" alt="Location 1" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/aksum.jpg" alt="Location 2" className="w-12 h-12 rounded-full object-cover" />
                                <img src="/hawolet.jpg" alt="Location 3" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">Awesome Places</h4>
                                <p className="text-sm text-gray-600">Discover the Ethiopia nature</p>
                            </div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 110" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: -1 }}>
                            <path d="M0,0 C0,0 190,110 250,110 L250,0 Z" fill="#fff" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Social Media and Partners */}
            <div className="pt-16 flex flex-col md:flex-row gap-8 md:gap-40 pl-4 md:pl-20 dark:bg-gray-900 dark:text-white w-full justify-center items-center">
                <div className="flex justify-center gap-10 p-5 border-2 border-gray-200 w-full md:w-96 rounded-full dark:bg-gray-800">
                    <p className="text-xl font-extrabold">Follow</p>
                    <a href="https://www.facebook.com/shemsy.shemsy.925"><FaFacebook style={{ fontSize: "30px" }} /></a>
                    <a href="https://instagram.com/nuru_best2?igshid=MzNlNGNkZWQ4Mg="><RiInstagramFill style={{ fontSize: "30px" }} /></a>
                    <a href="https://t.me/kingnuru"><FaTelegramPlane style={{ fontSize: "30px" }} /></a>
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
