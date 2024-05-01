import React from 'react';
import { Card,Dropdown,Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebars from '../component/Sidebars';
import Searchbar from '../component/Searchbar';
// import Image from "next/image";
const CardContainer = () => {
  const cardsData = [
    { id: 1, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 2, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 3, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 4, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 5, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 6, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
    { id: 7, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
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
    <Searchbar />
    <div className="dark:bg-gray-900 dark:text-white flex gap-10  w-[99%] overflow-hidden pt-5">

    < Sidebars />
    
    <div className='flex flex-col flex-wrap'>
      <div className='flex justify-between w-[35%] pb-10'>
        <h1 className="text-2xl font-extrabold">Discover Places </h1>
        <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
      </div>

      <div className='flex gap-16 flex-wrap justify-start'>
      <div className="overflow-x-auto  w-[38%]">
        <div className="flex p-4 gap-10 " style={{ overflowX: "auto", scrollbarWidth: "thin" }}>
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
        {/* map part  */}

       
        <div className='flex flex-col justify-between p-5'>

        <h1 className="text-2xl font-extrabold">Discover Places </h1>
        <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
        <div className='bg-gray-200 w-full flex flex-col h-[500px]  rounded-lg'>
{/* map will be here */}
    
      </div>

       
        </div>


      </div>

    


      <Card className="max-w-sm xl:w-96 h-screen">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
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
      <div className="flex flex-col items-center pb-10">
        {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images.jpeg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </Card>

</div>


      </div>


      {/* map part */}

    </div>
  
    </>
  );
}

export default CardContainer;
