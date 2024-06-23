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
      <h1 className='text-4xl font-bold flex justify-center'>Journey To The Skies Made Simple!</h1>
      <p className='text-center text-gray-500'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new Experiences </p>
      <div className='flex gap-2 pt-10 flex-wrap'>
     
<div className='flex items-end '>
     <card href="#" className="max-w-sm bg-gray-100 dark:bg-gray-800 w-80 h-72 flex flex-col p-12 gap-20 rounded-3xl rounded-br-none">
    <p className=' text-blue-400 ' > <FaMapMarkerAlt className=' bg-[#ffffff] text-xl  rounded-full p-4 w-16 h-16 ' /></p>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Find Your <br /> Destination
      </h5>
    </card>

    <div className="relative overflow-hidden max-w-sm w-96 h-[420px] rounded-b-none bg-[#2986FE] text-white rounded-t-3xl flex flex-col gap-5 p-12">
      <div className="absolute top-0 right-0 w-60 h-56 overflow-hidden rounded-full transform translate-x-10 -translate-y-10">
        <img src="/afar.jpg" alt="Boat" className="w-full h-full object-cover"/>
      </div>
      <div className="border-2 rounded-full w-16 h-16 items-center p-2 border-white flex justify-start" style={{fontSize:"60px"}}>
        <FaTicketAlt />
      </div>
      <h5 className="text-2xl font-bold tracking-tight">
        Book A <br /> Ticket
      </h5>
      <p className="font-normal">
        Traveling is A wonderful <br /> To Explore New places, Learn <br /> About Different and Gain new <br /> Experiences
      </p>
      <button className="bg-[#2986FE] flex justify-start xl-lg">
        LEARN MORE <GoChevronRight style={{fontSize:"25px"}}/>
      </button>
    </div>
  
    <card href="#" className="max-w-sm bg-gray-100 w-80 dark:bg-gray-800 h-72 flex flex-col p-12 gap-20 rounded-3xl rounded-bl-none">
    <p className='text-blue-400'> <BsFillCreditCardFill  className='bg-[#ffffff] text-xl  rounded-full p-4 w-16 h-16 '/></p>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Pay & Start   <br /> Journey
      </h5>
    </card>

</div>


</div>
    </div>
    </section>
  );
};

export default BookTicket;