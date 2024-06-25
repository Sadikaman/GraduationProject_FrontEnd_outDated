import React from 'react'
// import Lottie from "react-lottie-player"
// import animationDataContact from "../lotties/contact.json"
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
// import { IoMdMail } from "react-icons/io";
import { FaTicketAlt } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
// import { Checkbox, Label, TextInput, Button } from 'flowbite-react';
import { Card } from "flowbite-react";
const BookTicket = (isDarkMode, toggleDarkMode) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Use Tailwind dark mode utility classes on the body element
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  
  'use client';
  return (
    <section className=' flex pt-10 justify-center dark:bg-gray-900 dark:text-white flex-wrap p-4' id='Education'>
     <div className='flex flex-col flex-wrap gap-4'>
      <h1 className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold flex justify-center'>Journey To The Skies Made Simple!</h1>
     <div className='flex pl-10 pr-10 justify-center w-full'>
      <p className='text-center  text-gray-500 text-base xl:text-2xl lg:text-2xl md:text-xl sm:text-lg'>
        Traveling is a wonderful way to explore new places, learn about 
        <br className='hidden sm:block' /> 
        different cultures, and gain new experiences
      </p>
     </div>
      <div className='flex gap-2 pt-10 flex-wrap'>
     
    <div className='flex flex-wrap justify-center   gap-4 p-4'>
      <div className='flex flex-wrap justify-center items-end md:flex-nowrap'>
        <div className='flex-shrink-0'>
          <div className="bg-gray-100 dark:bg-gray-800 w-full sm:w-64 md:w-56 lg:w-80 h-64 md:h-56 lg:h-72 flex flex-col p-4  md:p-6 lg:p-8 gap-6 md:gap-10 lg:gap-20 rounded-3xl rounded-br-none">
            <p className='text-blue-400'>
              <FaMapMarkerAlt className='bg-white text-lg md:text-xl rounded-full p-3 md:p-4 w-12 md:w-16 h-12 md:h-16' />
            </p>
            <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Find Your <br /> Destination
            </h5>
          </div>
        </div>

        <div className="relative overflow-hidden  w-full sm:w-80 md:w-72 lg:w-96 h-64 md:h-56 lg:h-[420px] rounded-t-3xl rounded-b-none bg-[#2986FE] text-white flex flex-col p-4 md:p-6 lg:p-12 gap-4 md:gap-5">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-56 overflow-hidden rounded-full transform translate-x-10 -translate-y-10">
            <img src="/afar.jpg" alt="Boat" className="w-full h-full object-cover" />
          </div>
          <div className='flex flex-col justify-between h-full'>
            <div className="border-2 rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 items-center p-1 md:p-2 border-white flex justify-center" style={{ fontSize: "30px" }}>
              <FaTicketAlt />
            </div>
            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
              Book A <br /> Ticket
            </h5>
            <p className="text-xs md:text-sm lg:text-base font-normal">
              Traveling is a wonderful way to explore new places, learn about different cultures, and gain new experiences.
            </p>
            <button className="bg-[#2986FE] flex items-center">
              LEARN MORE <GoChevronRight style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>

        <div className='flex-shrink-0'>
          <div className="bg-gray-100 dark:bg-gray-800 w-full sm:w-64 md:w-56 lg:w-80 h-64 md:h-56 lg:h-72 flex flex-col p-4 md:p-6 lg:p-8 gap-6 md:gap-10 lg:gap-20 rounded-3xl rounded-bl-none">
            <p className='text-blue-400'>
              <BsFillCreditCardFill className='bg-white text-lg md:text-xl rounded-full p-3 md:p-4 w-12 md:w-16 h-12 md:h-16' />
            </p>
            <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pay & Start <br /> Journey
            </h5>
          </div>
        </div>
      </div>
    </div>

</div>
    </div>
    </section>
  );
};

export default BookTicket;