// import React from 'react'
import Sidebars from '../component/Sidebars'
import { Button,Card } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { FaXTwitter,FaYoutube,FaLinkedin,FaFacebook,FaPinterest,FaSquareInstagram } from "react-icons/fa6";
import React, { useState } from 'react';
import { FaUserCircle,FaMoneyBillWave ,FaTimes,FaBars,FaGreaterThan} from "react-icons/fa";
import { EmojiHappyIcon, MicrophoneIcon, CameraIcon, PaperClipIcon } from '@heroicons/react/outline';
import Nav from "../component/Nav"
import { DarkModeProvider } from '../component/DarkModeProvider';


  const Community = () => {

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

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
   <DarkModeProvider>
    <div className='flex  gap-10 p-5 dark:bg-gray-900 flex-wrap-reverse sm:flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap xl:flex-nowrap overflow-hidden '>
       
{/* Sidebar and Toggle Button for Small Screens */}
<div className="hidden lg:flex flex-shrink-0">
        <Sidebars />
      </div>

    <div className="lg:hidden">
        <button 
          className="fixed top-[112px] left-1  dark:text-white text-[#101010] p-2 rounded-md z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaGreaterThan />}
        </button>
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} fixed top-0 left-0 h-full z-40 bg-gray-900`}>
          <Sidebars />
        </div>
      </div>
      <div className='flex flex-col '>
      <h1 className='text-2xl font-semibold pb-12'>The Afro Community </h1>
      <div className=' bg-gray-100  rounded-xl w-full p-5 dark:bg-gray-900'>
     
      <div className='bg-gray-300 rounded-xl  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] flex flex-col dark:bg-gray-800'></div>

      <button className='p-2 bg-[#2689FE] rounded-xl mt-2'>destination</button>
     
      <div className='flex w-full flex-col justify-start'>
        <h1 className='text-xl  font-semibold pt-2'>
          How 10 Things Will Change The Way  <br /> You Approach This New Dubai
        </h1>
        <p className='text-sm sm:text-base md:text-lg pt-5 dark:text-white'>
          Traveling is a wonderful way to explore  <br />
          Traveling is a wonderful way to explore  <br />
          Traveling is a wonderful way to explore  <br />
          Traveling is a wonderful way to explore 
          </p>
        <div className='flex flex-col sm:flex-row sm:items-center gap-3 pt-4'>
          <div className='flex items-center gap-3 border-r-2 border-r-black pr-3'>
            <CgProfile className='text-3xl sm:text-4xl text-white bg-black rounded-full' />
            <h2 className='text-base sm:text-lg md:text-xl font-semibold'>By John Doe</h2>
          </div>
          <div className='flex items-center gap-2'>
            <IoTimeOutline className='text-lg sm:text-xl md:text-2xl' />
            <p className='text-sm sm:text-base md:text-lg'>12 04 2024</p>
          </div>
        </div>
      </div>
{/* card */}
  <div className='flex gap-5 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap'>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col  dark:bg-gray-800'>
    <Button color="blue" pill>
        Destination
      </Button>
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col dark:bg-gray-800'>
    <Button color="blue" pill>
        Destination
      </Button>
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
    <div className='bg-gray-300 rounded-2xl w-80 h-96 flex justify-end items-start p-4 flex-col dark:bg-gray-800'>
    <Button color="blue" pill>
        Destination
      </Button>
      <p className='w-44 text-lg'>Simple Guidance For In Bali Adventure </p>
      <span className='w-80 flex gap-2'>
      <h1 className=' font-semibold pt-2 gap-3 border-r-2 border-r-black flex '><CgProfile className='text-4xl text-white bg-black rounded-full'/> By John Doe </h1><IoTimeOutline className='text-xl mt-2'/> <p className='mt-2'>12  04 2024</p> </span>
    </div>
  </div>

{/* message sender part */}

<div className="flex  border-t border-gray-200 pt-5">
  <input
    type="text"
    placeholder="Type your message..."
    value={message}
    onChange={handleMessageChange}
    className="flex-grow  rounded-full bg-gray-200 dark:bg-gray-800 border-none outline-none"
  />
  <button
    onClick={sendMessage}
    className=" px-2 sm:px-1 py-1 sm:py-1 rounded-full bg-blue-500 text-white flex items-center justify-center"
  >
    <IoMdSend className='text-xl sm:text-2xl' />
  </button>
  <button className="ml-2 p-2 sm:p-3">
    <EmojiHappyIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
  </button>
  <button className="ml-2 p-2 sm:p-3">
    <MicrophoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
  </button>
  <button className="ml-2 p-2 sm:p-3">
    <CameraIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
  </button>
  <button className="ml-2 p-2 sm:p-3">
    <PaperClipIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
  </button>
</div>


      </div>
     
      </div>

{/* Social Network */}
<div className='h-screen bg-slate-100 rounded-xl w-full lg:w-[40%] flex flex-col mt-4 p-4 sm:p-6 md:p-8 dark:bg-gray-900'>
  <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>Social Networks</h1>
  
  <div className='flex flex-col pt-6 sm:pt-8 gap-3'>
    <div className='flex flex-col sm:flex-row gap-5'>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaSquareInstagram className='text-3xl sm:text-4xl bg-white text-black'/>
        Instagram
      </a>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaXTwitter className='text-3xl sm:text-4xl bg-black text-white'/>
        Twitter X
      </a>
    </div>
    
    <div className='flex flex-col sm:flex-row gap-5'>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaFacebook className='text-3xl sm:text-4xl text-blue-700'/>
        Facebook
      </a>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaYoutube className='text-3xl sm:text-4xl text-red-700'/>
        YouTube
      </a>
    </div>

    <div className='flex flex-col sm:flex-row gap-5'>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaPinterest className='text-3xl sm:text-4xl text-red-700'/>
        Pinterest
      </a>
      <a href="#" className="flex items-center dark:bg-gray-800 p-3 sm:p-4 bg-white rounded-full text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
        <FaLinkedin className='text-3xl sm:text-4xl text-blue-700'/>
        LinkedIn
      </a>
    </div>
  </div>

  {/* card */}
  <div className="overflow-y-auto h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] w-full mt-6 sm:mt-8">
    <h1 className='text-lg sm:text-xl md:text-xl font-medium'>Announcement</h1>
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-5 md:gap-6" style={{ overflowX: "hidden" }}>
      {cardsData.map((card) => (
        <div key={card.id} className="w-full sm:w-[48%] md:w-[32%] lg:w-[24%] flex flex-col gap-2 min-w-[200px]">
          <Card className='w-full h-28 rounded-2xl bg-gray-300 flex' imgAlt={`Image of ${card.name}`} >
            <div className="flex flex-col gap-2">
              <div className='flex gap-2'>
                {/* Image or any other content can be here */}
              </div>
            </div>
          </Card>
          <h1 className='text-md font-medium'>Seven Things To Avoid in Photography</h1>
        </div>
      ))}
    </div>
  </div>
</div>

      
    </div>
    </DarkModeProvider>

    </>
  )
}

export default Community
