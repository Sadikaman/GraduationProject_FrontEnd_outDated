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
    <section className=' flex pt-10 justify-center dark:bg-gray-900 dark:text-white flex-wrap' id='Education'>
     <div className='flex flex-col flex-wrap'>
      <h1 className='text-4xl font-bold'>Journey To The Skies Made Simple!</h1>
      <p className='text-center'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new Experiences </p>
      <div className='flex gap-2 pt-10 flex-wrap'>
     <Card href="#" className="max-w-sm bg-gray-100 w-80 h-72 ">
     <FaMapMarkerAlt className='flex mb-28' style={{fontSize:"25px"}}/>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Find Your <br /> Destination
      </h5>
    </Card>

<div>
    <Card className="max-w-sm h-[420px] w-96 rounded-b-none bg-black text-white rounded-t-3xl flex flex-wrap">
    <FaTicketAlt className='border-2 rounded-full p-2  border-white flex justify-start ' style={{fontSize:"60px"}}/>
      
      <h5 className="text-2xl font-bold tracking-tight">
        Book A <br /> ticket
      </h5>
      <p className="font-normal">
      Traveling is A wonderful <br /> To Explore New places, Learn <br /> About  Different and Gain new <br /> Experiences  
      </p>
      <Button className='bg-black flex justify-start xl-lg'>
        LEARN MORE <GoChevronRight style={{fontSize:"25px"}}/>
      </Button>
    </Card>
    </div>

    <Card href="#" className="max-w-sm bg-gray-100 w-80 h-72 flex-wrap">
     <BsFillCreditCardFill  className='flex mb-28' style={{fontSize:"25px"}}/>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Pay & Start   <br /> Journey
      </h5>
    </Card>
</div>
    </div>
    </section>
  );
};

export default BookTicket;