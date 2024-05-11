import React from 'react';
import { useState } from 'react';
import { Card,Dropdown,Sidebar,Datepicker } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { PiHandWaving } from "react-icons/pi";
import { IoIosPartlySunny ,IoIosWifi,IoMdDoneAll} from "react-icons/io";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { MdOutlineHotel } from "react-icons/md";
import { IoLocationOutline,IoAirplane } from "react-icons/io5";
import { SiEthiopianairlines } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaDollarSign, FaWifi, FaSun } from 'react-icons/fa'; // Import React icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebars from '../component/Sidebars';
import Searchbar from '../component/Searchbar';
import Nav from '../component/Nav';
import { MdDateRange } from "react-icons/md";
// import Image from "next/image";
const CardContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardsData = [
    { id: 1, name: "Harar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 2, name: "Abjifar Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/hawolet.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 3, name: "Lalibala",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/lalibala.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 4, name: "Samain Mountain",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/sameMountain.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 5, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 6, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 7, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    // Add more card data objects as needed
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
    <Nav />
    

    <div className="dark:bg-gray-900 dark:text-white flex gap-10  w-[99%] overflow-hidden ">
    < Sidebars />

<div className='flex flex-col'>
    
    <div className="pt-2 flex justify-center items-center gap-52 dark:bg-gray-900">
      <div className='flex flex-col '>
            <h1 className="text-4xl font-semibold pt-2 flex gap-4">Hello, Ezra  <PiHandWaving className="text-yellow-300 "/></h1>
             <p className="text-lg text-gray-500 pt-2">Welcome back and explore the world </p>
             </div>
    <Searchbar />
    </div>
  <div className='flex gap-10 flex-wrap justify-center '>
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex dark:bg-gray-900  p-4 gap-2 flex-wrap" style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className="p-4 " style={{ minWidth: "300px" }}>
            <Card
      className='w-80 h-[320px] rounded-3xl relative overflow-hidden'
      imgAlt={`Image of ${card.name}`}
      style={{
        backgroundImage: `url(${card.imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex justify-center items-center">
              <div className="text-white text-center">
          <p>Cost: {card.price}</p>
          <p>Safety: {card.safety}</p>
          <p>Other Info...</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-20">
        <div className='flex justify-between'>
          <p className='text-white text-2xl'>{card.num}</p> 
          {card.internet}
        </div>
        
        <div className='flex flex-col items-center '>
          <h1 className="text-2xl flex flex-col font-semibold tracking-tight text-gray-50 dark:text-white">
            {card.name}
          </h1>
          <h3 className="text-xl flex flex-col  tracking-tight text-gray-50 dark:text-white">
            {card.country}
          </h3>
        </div>
        
        <div className='flex justify-between'>
          {card.sunny}
          <p className='text-white text-2xl'>
            <FaDollarSign /> {card.price}
          </p>
        </div>
              </div>
            </Card>
          </div>
          ))}
    </div>

    </div>


    </div>
    </div>
{/* schedule part */}
<Card className="max-w-sm xl:w-96 justify-center items-end h-screen dark:bg-gray-900">
     
     <div className='flex gap-5 dark:bg-gray-900 justify-center'>
     <FaUserCircle className='text-4xl' />
      <Dropdown inline label="Jeremy Zuck ">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
        </div>
<p className='flex justify-center text-sm text-gray-400'>Travel Enthusiast  </p>
      <Datepicker inline />
      <h1>My Schedule </h1>
     
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex   gap-10 flex-wrap" style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className=" " style={{ minWidth: "300px" }}>
            <Card className=' w-72 h-28  flex' imgAlt={`Image of ${card.name}`} >
              <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <img className='w-16 rounded-md' src={card.imageSrc} />
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h1>
                </div>
               
                <div className="flex items-center justify-between">
                  <span className="text-md flex font-bold text-gray-900 dark:text-white"><MdDateRange /> ${card.price}</span>
                 
                </div>
              </div>
            </Card>
          </div>
          ))}
    </div>

    </div>


  
    </Card>
   
    </div>
  
    </>
  );
}

export default CardContainer;
