import React, { useState } from 'react';
import { Card, Progress } from "flowbite-react";
import { FaStar, FaMoneyBillWave, FaSatelliteDish, FaShieldAlt, FaDollarSign,FaLessThan } from 'react-icons/fa';
import { BiSolidLike } from "react-icons/bi";
import { IoIosPartlySunny, IoIosWifi, IoMdClose } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";
import Nav from '../component/Nav';
import { PiLessThan } from "react-icons/pi";
import Searchbar from '../component/Searchbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tour = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const cardsData = [
    { id: 1, name: "Harar", country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg", sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />, internet: <IoIosWifi className='text-2xl text-gray-50' />, num: "1" },
    { id: 2, name: "Abjifar Hawolt", country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/hawolet.jpg", sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />, internet: <IoIosWifi className='text-2xl text-gray-50' />, num: "2" },
    // Add more card data objects as needed
    { id: 3, name: "Lalibala",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/lalibala.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 4, name: "Samain Mountain",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/sameMountain.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 5, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 6, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 7, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 8, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 9, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 10, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 11, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
    { id: 12, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  ];

  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <Nav />
      <div className="dark:bg-gray-900 dark:text-white flex flex-col lg:flex-row gap-6 lg:gap-10 xl:mt-[112px] md:mt-[90px]  w-full overflow-hidden">
        {/* Main Content */}
        <div className="flex flex-col w-full lg:w-3/4">
          <div className="pt-2 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-52 dark:bg-gray-900">
            <div className='flex flex-col text-center lg:text-left'>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-2 flex gap-4">Hello, Ezra <PiHandWaving className="text-yellow-300 " /></h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-500 pt-2">Welcome back and explore the world</p>
            </div>
            <Searchbar />
          </div>
          <div className='flex gap-6 flex-wrap justify-center mt-4'>
            {cardsData.map((card) => (
              <div key={card.id} className="p-4" style={{ minWidth: "300px" }}>
                <div className="w-72 h-[320px] rounded-3xl relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${card.imageSrc})` }}>
                  {/* Card Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex">
                    <div className="text-white w-full p-2">
                      <div className='flex justify-between'><MdFavoriteBorder className='text-4xl hover:text-red-600' /> <IoMdClose className='text-4xl' /></div>
                      <div className='w-full flex flex-col mt-10'>
                        <div className='flex gap-10'>
                          <p className='flex gap-1'><FaStar className='text-xl text-yellow-300' />Overall</p>
                          <div className=' mb-2'>
                            <Progress progress={80} size="xl" color="green" />
                          </div>
                        </div>
                        <div className='flex gap-[48px]'>
                          <p className='flex gap-2'><FaMoneyBillWave className='text-2xl text-green-400' />Price </p>
                          <div className=' mb-2'>
                            <Progress progress={56} size="xl" color="green" />
                          </div>
                        </div>
                        <div className='flex gap-[35px]'>
                          <p className='flex gap-2'><FaSatelliteDish className='text-xl' />Internet</p>
                          <div className='mb-2'>
                            <Progress progress={75} size="xl" color="green" />
                          </div>
                        </div>
                        <div className='flex gap-[50px]'>
                          <p className='flex gap-1'><BiSolidLike className='text-2xl text-yellow-300' />Liked</p>
                          <div className=' mb-2'>
                            <Progress progress={55} size="xl" color="green" />
                          </div>
                        </div>
                        <div className='flex gap-[43px]'>
                          <p className='flex gap-1'><FaShieldAlt className='text-2xl text-red-600' />Safety</p>
                          <div className=' mb-2'>
                            <Progress progress={65} size="xl" color="green" />
                          </div>
                        </div>
                      </div>
                      <p className='pt-3 text-lg'>Lorem ipsum dolor sit amet cons</p>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="flex flex-col gap-20 p-4">
                    <div className='flex justify-between'>
                      <p className='text-white text-2xl'>{card.num}</p>
                      {card.internet}
                    </div>
                    <div className='flex flex-col items-center'>
                      <h1 className="text-2xl flex flex-col font-semibold tracking-tight text-gray-50 dark:text-white">
                        {card.name}
                      </h1>
                      <h3 className="text-xl flex flex-col tracking-tight text-gray-50 dark:text-white">
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
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sidebar Toggle Button for Small Screens */}
        <div className="lg:hidden fixed top-16 right-1 z-50">
          <button
            onClick={toggleSidebar}
            className=" text-black focus:outline-none"
          >
            {isSidebarOpen ? <IoMdClose className='text-xl text-black' /> : <PiLessThan className='text-xl text-black' />}
          </button>
        </div>
        {/* Announcement Sidebar */}
        <div className={`fixed top-0 right-0 h-full z-40 lg:relative lg:z-auto transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:w-1/4 bg-gray-900`}>
          <Card className="max-w-sm xl:w-96 justify-center items-end lg:h-screen dark:bg-gray-900">
            <p className='flex justify-center text-xl'>Announcement</p>
            <div className="overflow-y-auto h-[95vh] w-[100%]">
              <div className="flex gap-2 flex-wrap" style={{ overflowX: "hidden" }}>
                {cardsData.map((card) => (
                  <div key={card.id} style={{ minWidth: "300px" }}>
                    <Card className='w-72 h-56 bg-gray-50 flex' imgAlt={`Image of ${card.name}`}>
                      <div className="flex flex-col gap-2">
                        <div className='flex gap-2'>
                          {/* Add any additional content here */}
                        </div>
                        <div className="flex items-center justify-between">
                          {/* Add any additional content here */}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tour;
