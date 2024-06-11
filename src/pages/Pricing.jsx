// import React from 'react'
import Sidebars from '../component/Sidebars'
import { Button,Card,TextInput,Label } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { FaXTwitter,FaYoutube,FaLinkedin,FaFacebook,FaPinterest,FaSquareInstagram } from "react-icons/fa6";
import React, { useState } from 'react';
import { EmojiHappyIcon, MicrophoneIcon, CameraIcon, PaperClipIcon } from '@heroicons/react/outline';


  const Pricing = () => {

    const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Implement your send message logic here
    console.log('Sending message:', message);
    setMessage('');
  };
    const cardsData = [
      { id: 1, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 2, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 3, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 4, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 5, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 6, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 7, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 8, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 9, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 10, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      // Add more card data objects as needed
    ];

  return (
    <>
    <div className='flex flex-col dark:bg-gray-900  justify-center'>
    <div className='flex justify-between w-[85%] pt-5'>
        <img 
        className='w-32'
        src="AfroLogo.png" 
        alt="" 
        />
        <h1 className='text-2xl font-medium  pt-4'>Contact Provider</h1>
    </div>
    <div  className='flex justify-end w-full pr-10'>
    <Button color="dark" className='w-44 flex '>Cancel Trip</Button>
    </div>
<section className=' flex border p-4  gap-20 justify-center'>
    <div className='flex flex-col border-2 gap-4'>
        
    <div className='border bg-gray-200 w-[650px] rounded-2xl'>
        <form className="flex max-w-md  gap-4">
           
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name1" value="Full name" />
                </div>
                <TextInput id="name1" type="text" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
        </form>
    </div>

        <div className='h-[700px] bg-gray-200 rounded-2xl'>

        </div>

    </div>
    {/* /////////////////// */}
    <div className='flex flex-col  border-2 gap-4'>
        
    <div className='border bg-gray-200 h-[400px] w-full  rounded-2xl'>
        
    </div>

        <div className='h-[400px] bg-gray-200 w-[800px] rounded-2xl'>

        </div>

    </div>

</section>










    </div>
    </>
  )
}

export default Pricing
