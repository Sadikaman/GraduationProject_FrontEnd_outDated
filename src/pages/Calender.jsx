import React from 'react';
import { Card,Dropdown,Sidebar,Datepicker } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { PiHandWaving } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebars from '../component/Sidebars';
import Searchbar from '../component/Searchbar';
import Nav from '../component/Nav';
import { MdDateRange } from "react-icons/md";
// import Image from "next/image";
const CardContainer = () => {
  const cardsData = [
    { id: 1, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 2, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 3, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 4, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 5, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 6, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 7, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 8, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 9, name: "Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
    { id: 10, name:"Bale Mountains", rating: 4.5, price: "16 June - 20June  ", imageSrc: "/images.jpeg" },
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
     <div className="pt-2 flex justify-center items-center gap-52 dark:bg-gray-900">
      <div className='flex flex-col'>
            <h1 className="text-4xl font-semibold pt-2 flex gap-4">Welcome back <PiHandWaving className="text-yellow-300 "/></h1>
             <p className="text-lg text-gray-500 pt-2">Glad to see you again Login to your account below </p>
             </div>
    <Searchbar />
    </div>

    <div className="dark:bg-gray-900 dark:text-white flex gap-10  w-[99%] overflow-hidden">
    < Sidebars />

    

  <div className='flex gap-10 flex-wrap justify-center'>
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex  p-4 gap-2 flex-wrap" style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className="p-4 " style={{ minWidth: "300px" }}>
            <Card className=' w-80' imgAlt={`Image of ${card.name}`} imgSrc={card.imageSrc}>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h1>
                <div className="bg-blue-500 w-16 p-1 rounded-full flex items-center justify-center">
                  <CiStar style={{ color: "white" }} />
                  <span className="text-white ml-2">{card.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${card.price}</span>
                  <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </Card>
          </div>
          ))}
    </div>

    </div>


    </div>
    
{/* schedule part */}
<Card className="max-w-sm xl:w-96 justify-center items-end h-screen">
     
     <div className='flex gap-5 justify-center'>
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
            <Card className=' w-72 h-28 pb-5 flex' imgAlt={`Image of ${card.name}`} >
              <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <img className='w-16 rounded-md' src={card.imageSrc} />
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h1>
                </div>
                {/* <div className="bg-blue-500 w-16 p-1 rounded-full flex items-center justify-center">
                  <CiStar style={{ color: "white" }} />
                  <span className="text-white ml-2">{card.rating}</span>
                </div> */}
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
