import React from 'react';
import { useState } from 'react';
import { Card,Dropdown,Sidebar ,Button,Progress} from "flowbite-react";
import { IoIosPartlySunny ,IoIosWifi,IoMdDoneAll,IoMdClose} from "react-icons/io";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { Datepicker } from "flowbite-react";
import { FaUserCircle,FaMoneyBillWave,FaStar,FaSatelliteDish,FaShieldAlt } from "react-icons/fa";
import { MdOutlineHotel,MdFavoriteBorder } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoLocationOutline,IoAirplane } from "react-icons/io5";
import { SiEthiopianairlines } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebars from '../component/Sidebars';
import Searchbar from '../component/Searchbar';
import Nav from '../component/Nav';
import { FaDollarSign, FaWifi, FaSun } from 'react-icons/fa'; // Import React icons


 
// import Image from "next/image";
const CardContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardsData = [
    { id: 1, name: "Harar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1",},
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
  <div className='flex'>
    <div className="dark:bg-gray-900 dark:text-white flex gap-10  w-[99%] overflow-hidden    pt-5">

    < Sidebars />
    <div className='flex'>
    <div className='flex flex-col flex-wrap'>
      <div className='flex flex-col '>
      <div className='flex'><Searchbar /></div>

      <div className='flex justify-between w-[35%] pt-3'>
        <h1 className="text-2xl font-extrabold">Discover Places </h1>
        <div className='border-2 border-gray-700 rounded-full'>
        <Dropdown  className='' label="View All" color='white'  dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        </div>
        </div>
      </div>
{/* tour card  */}
      <div className='flex gap-16 flex-wrap justify-start'>
      <div className="overflow-x-auto  w-[40%]">
        <div className="flex  gap-28 " style={{ overflowX: "auto", scrollbarWidth: "",}}>
          {cardsData.map((card) => (
            <div key={card.id} className=" " style={{ minWidth: "300px", }}>
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
            {/* card hover effect  */}

      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex ">
        <div className="text-white w-full p-2 ">
          <div className='flex justify-between'><MdFavoriteBorder  className='text-4xl hover:text-red-600'/> <IoMdClose className='text-4xl' /></div>
         

         <div className='w-full flex flex-col mt-10'>
          
         <div className='flex gap-16  '>
          
         <p className='flex gap-1'>  <FaStar className='text-xl text-yellow-300'/>Overall</p>
          <div className=' mb-2'>
          <div className="text-base text-green-500 w-40"></div>
          <Progress progress={80} size="xl" color="green" />
          </div>
          </div>

         <div className='flex gap-[70px] '> 
         <p className='flex gap-2'><FaMoneyBillWave className='text-2xl text-green-400'/>Price </p>
         
         <div className=' mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={56} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-[50px] '> 
         <p className='flex gap-2'>  <FaSatelliteDish className='text-xl '/>Internet</p>
         
         <div className='mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={75} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-[73px]'> 
       <p className='flex gap-1'> <BiSolidLike className='text-2xl text-yellow-300'/>Liked</p>  
         
         <div className=' mb-2'>
           <div className="text-base gap-5 font-medium text-green-500 w-40"></div>
      <Progress progress={55} size="xl" color="green" />
      </div>
      </div>

         <div className='flex gap-16 '>
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
      {/* /////////////// */}

      
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
             {card.price}
          </p>
        </div>
      </div>
    </Card>


            </div>
          ))}


          
        </div>
       

       {/* map part */}
  
  <div className='flex flex-col  p-5'>
<div className='flex justify-between'>
   <h1 className="text-2xl font-extrabold">Discover Places </h1>
   <div className='border-2 border-gray-700 rounded-full w-32'>
        <Dropdown  className='' label="View All" color='white'  dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        </div>
        </div>
        {/* map  */}
      <div className='bg-gray-200 w-full flex flex-col h-[500px] rounded-3xl mt-5'>
      <iframe className='w-full h-full rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.359785830047!2d37.89022262418306!3d13.202713787134343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1669c1d46d16f89d%3A0x770284df7312622d!2z2YXZhtiq2LLZhyDYs9mK2YXZitmGINin2YTZiNi32YbZig!5e0!3m2!1sar!2set!4v1715193868538!5m2!1sar!2set" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
      </div>

      </div>

 </div>

</div>


      </div>

    </div>
    </div>

    <div className='dark:bg-gray-900 p-5'>
    <Card className="max-w-sm xl:w-96 justify-center items-end h-screen bg-gray-50 ">
      {/* Profile part */}
     <div className='flex gap-5 justify-center'>
     <FaUserCircle className='text-6xl font-bold' />
      <Dropdown className='text-4xl  font-semibold' inline label="Jeremy Zuck ">
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


      <div className='flex flex-col gap-7 pt-4'>
        <div className='flex gap-8'>
          <p className='flex text-lg gap-2  '>Somewhere Ethiopia <img className='h-6 ' src="/ethiopia.png" alt="" /></p>
          <div className='flex flex-col'>
            <span className='flex gap-2'><IoIosPartlySunny className='text-2xl text-gray-400' />67   F</span>
            <span className='flex gap-2'><IoAirplane className='text-2xl text-blue-500' /> In 10 days</span>
          </div>
        </div>
        <div className='flex gap-5'>
          <Button className='rounded-full border-2 ' color='blue'><GiCommercialAirplane className='text-lg'/>Mark As Visited</Button>
          <Button className='rounded-full border-2' color='white'><GiCommercialAirplane className='text-lg'/>Cancel Trip</Button>
        </div>
      </div>

      <h1 className='text-xl font-bold flex gap-7 border-t-2 p-2'><PiAirplaneTakeoffBold className='text-gray-400 text-md '/> Flight
       <span className='text-sm font-normal mt-1 text-gray-400 flex gap-2 '>from $124.54 
       <span className='text-green-300 gap-2 flex mt-1'><IoMdDoneAll />Booked!</span> 
       </span>
      </h1>
      <h1 className='text-xl font-bold flex gap-7 border-t-2 p-2'><MdOutlineHotel className='text-gray-400 text-md '/> Hotel 
       <span className='text-sm font-normal mt-1 text-gray-400 flex gap-2 '>from $124.54 
       <a className='text-blue-500 gap-1 flex underline cursor-pointer'>Explore hotels</a>
        </span>
        </h1>
      <h1 className='text-xl font-bold flex gap-7 border-t-2 p-2'><IoLocationOutline className='text-gray-400 text-xl '/> Interesting places</h1>
    {/* /////////////////  */}

{/* card part */}
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex   gap-8  flex-wrap " style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className=" " style={{ minWidth: "300px" }}>
            <Card className=' w-72 h-44 rounded-3xl  flex' imgAlt={`Image of ${card.name}`} >
              <div className="flex flex-col gap-2">
                <div className='flex gap-2'>
                  <img className='w-16 rounded-md' 
                  src={card.imageSrc}
                 />
                  <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {card.name}
                  </h1>
               </div>
      
                <div className="flex items-center justify-between">
                  <span className="text-md flex font-bold text-gray-900 dark:text-white"> ${card.price}</span>
                 
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
    </>
  );
}

export default CardContainer;
