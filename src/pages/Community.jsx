// import React from 'react'
import Sidebars from '../component/Sidebars'
import { Button } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaXTwitter,FaYoutube,FaLinkedin,FaFacebook,FaPinterest,FaSquareInstagram } from "react-icons/fa6";
import React, { useState } from 'react';
import { EmojiHappyIcon, MicrophoneIcon, CameraIcon, PaperClipIcon } from '@heroicons/react/outline';



function Community() {

  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Implement your send message logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  const CardContainer = () => {
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
    ];}

  return (
    <div className='flex gap-10 p-5 dark:bg-gray-900'>
      < Sidebars />
      <div className=' bg-gray-100  rounded-xl w-full p-5 dark:bg-gray-900'>
      <h1 className='text-2xl font-semibold pb-12'>The Afro Community </h1>
      <div className='bg-gray-300 rounded-xl w-[100%] h-[500px] flex flex-col dark:bg-gray-800'></div>
      <Button className='w-28 mt-2' color='dark' inline label= "destination"/>
     
      <div className='gap-5 w-[72%] p-6'>
      <h1 className='text-4xl font-semibold pt-2'>How 10 Things Will Change The Way You  Approach This  New  Dubai</h1>
      <p className='text-sm pt-5'>Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences.
       Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences Traveling is A wonderful  
       Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences Traveling is A wonderful  Way To Explore New places,
        Learn About  Different  Cultures  and Gain new Experiences     </p>
        <span className='flex gap-3 '>
        <h1 className='text-xl font-semibold pt-2 gap-3 border-r-2 border-r-black flex w-44'><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-2xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
      </div>
{/* card */}
  <div className='flex gap-5 '>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col  dark:bg-gray-800'>
      <Button color='blue' inline label='destination' />
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col dark:bg-gray-800'>
      <Button color='blue' inline label='destination' />
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col dark:bg-gray-800'>
      <Button color='blue' inline label='destination' />
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
  </div>

{/* message sender part */}

  <div className="flex items-center border-t border-gray-200 pt-12">
     
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
        className="flex-grow px-4 py-2 outline-none border-none rounded-full bg-gray-200 dark:bg-gray-800"
      />

      <button
        onClick={sendMessage}
        className="px-4 py-2"
      >
        <IoMdSend className='text-2xl '/>
      </button>
      <button className="p-2">
  
        <EmojiHappyIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="p-2">
        <MicrophoneIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="p-2">
        <CameraIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="p-2">
        <PaperClipIcon className="h-6 w-6 text-gray-500" />
      </button>
     
    </div>

      </div>
     


{/* Social Network */}
      <div className='h-screen bg-slate-100 rounded-xl w-[40%] flex flex-col mt-4 p-8 dark:bg-gray-900'>
<h1 className='text-2xl font-semibold'>Social Networks</h1>
<div className='flex flex-col pt-8 gap-3'>
  <div className='flex gap-5 '>
  <a href="#" className="flex dark:bg-gray-800  p-4 bg-white rounded-full text-xl gap-5"><FaSquareInstagram className='text-4xl bg-white text-black'/>
 Instagram</a>
  <a href="#" className="flex dark:bg-gray-800 p-4 bg-white rounded-full text-xl gap-5"><FaXTwitter className='text-4xl bg-black text-white'/>
 Twitter X</a>
  </div>
 <div className='flex gap-5 '>
 <a href="#" className=" flex dark:bg-gray-800 p-4 bg-white rounded-full text-xl gap-5"><FaFacebook className='text-4xl text-blue-700'/>
 Facebook</a>
  <a href="#" className="flex dark:bg-gray-800 p-4 bg-white rounded-full text-xl gap-5"><FaYoutube className='text-4xl text-red-700'/>
 You Tube</a>
 </div>
  <div className='flex gap-5 '>
  <a href="#" className="flex dark:bg-gray-800  p-4 bg-white rounded-full text-xl gap-5"><FaPinterest className='text-4xl text-red-700'/>
 Pinterest</a>
  <a href="#" className="flex dark:bg-gray-800 p-4 bg-white rounded-full text-xl gap-5"><FaLinkedin className='text-4xl text-blue-700'/>
 Linked in</a>
  </div>
 
</div>
        
      </div>


      
    </div>
  )
}

export default Community
