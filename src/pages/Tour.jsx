import React from 'react';
import { useState } from 'react';
import { Card,Dropdown,Sidebar,Datepicker,Progress } from "flowbite-react";
import { FaUserCircle,FaMoneyBillWave } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { PiHandWaving } from "react-icons/pi";
import { IoIosPartlySunny ,IoIosWifi,IoMdDoneAll,IoMdClose} from "react-icons/io";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { MdOutlineHotel } from "react-icons/md";
import { IoLocationOutline,IoAirplane } from "react-icons/io5";
import { SiEthiopianairlines } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
import { FaDollarSign, FaWifi, FaSun,FaStar,FaSatelliteDish,FaShieldAlt } from 'react-icons/fa'; // Import React icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebars from '../component/Sidebars';
import Searchbar from '../component/Searchbar';
import Nav from '../component/Nav';
import { MdDateRange,MdFavoriteBorder } from "react-icons/md";
// import Image from "next/image";
const Tour = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardsData = [
    { id: 1, name: "Harar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1",},
    { id: 2, name: "Abjifar Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/hawolet.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
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
    { id: 13, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
   
    // Add more card data objects as needed
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
                className='w-72 h-[320px] rounded-3xl relative overflow-hidden'
                imgAlt={`Image of ${card.name}`}
                 href='/Pricing.jsx'
                style={{
                  backgroundImage: `url(${card.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

      {/* card hover effect  */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex ">
        <div className="text-white w-full p-2 ">
          <div className='flex justify-between'><MdFavoriteBorder  className='text-4xl hover:text-red-600'/> <IoMdClose className='text-4xl' /></div>
         

         <div className='w-full flex flex-col mt-10'>
          
         <div className='flex gap-10  '>
          
         <p className='flex gap-1'>  <FaStar className='text-xl text-yellow-300'/>Overall</p>
          <div className=' mb-2'>
          <div className="text-base text-green-500 w-40"></div>
          <Progress progress={80} size="xl" color="green" />
          </div>
          </div>

         <div className='flex gap-[48px] '> 
         <p className='flex gap-2'><FaMoneyBillWave className='text-2xl text-green-400'/>Price </p>
         
         <div className=' mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={56} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-[35px] '> 
         <p className='flex gap-2'>  <FaSatelliteDish className='text-xl '/>Internet</p>
         
         <div className='mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={75} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-[50px]'> 
       <p className='flex gap-1'> <BiSolidLike className='text-2xl text-yellow-300'/>Liked</p>  
         
         <div className=' mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={55} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-[43px] '>
         <p className='flex gap-1'> <FaShieldAlt className='text-2xl text-red-600'/>Safety</p>  
         
         <div className=' mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={65} size="xl" color="green" />
      </div>
      </div>

         
         
         </div>
         <p className='pt-3 text-lg'>Lorem ipsum dolor sit amet cons</p>
       
          
        </div>
      </div>
      {/* ////////// */}
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
     
     
<p className='flex justify-center text-xl'>Announcement</p>
     
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex   gap-2 flex-wrap" style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className=" " style={{ minWidth: "300px" }}>
            <Card className=' w-72 h-56 bg-gray-50  flex' imgAlt={`Image of ${card.name}`} >
              <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              {/* <img className='w-16 rounded-md' src={card.imageSrc} />
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h1> */}
                </div>
               
                <div className="flex items-center justify-between">
                  {/* <span className="text-md flex font-bold text-gray-900 dark:text-white"><MdDateRange /> ${card.price}</span> */}
                 
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

export default Tour;
