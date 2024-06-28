import React ,{ useState, useRef, useEffect }from 'react'
import { FaUserCircle,FaMoneyBillWave ,FaPlus} from "react-icons/fa";
import { Card,Dropdown,Sidebar,Datepicker,Progress } from "flowbite-react";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr'
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
import { MdDateRange,MdFavoriteBorder } from "react-icons/md";
import AddPackageModal from '../component/AddPackageModal';
import { DarkModeProvider } from '../component/DarkModeProvider';
import { GiPieChart } from "react-icons/gi";
"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const cardsData = [
  { id: 1, name: "Harar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1",},
  { id: 2, name: "Abjifar Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/hawolet.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 3, name: "Lalibala",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/lalibala.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 4, name: "Samain Mountain",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/sameMountain.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 5, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 6, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 7, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 8, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 9, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 10, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 11, name: "Afar",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/afar.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 12, name: "South-OmoVally",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/south-Omo-Vally.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
  // { id: 13, name: "Aksum Hawolt",country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/aksum.jpg" , sunny: <IoIosPartlySunny className='text-2xl text-gray-50' />,internet: <IoIosWifi className='text-2xl text-gray-50' /> ,num:"1"},
 
  // Add more card data objects as needed
];
const initialCardsData = [
  { id: 1, name: "Harar", country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/harar.jpg" },
  { id: 2, name: "Abjifar Hawolt", country: "Ethiopia", rating: 4.5, price: "$120", imageSrc: "/hawolet.jpg" },
  // Add initial cards here
];


const Packagess = () => {

  const [cardsData, setCardsData] = useState(initialCardsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddPackage = (newPackage) => {
    setCardsData([...cardsData, { ...newPackage, id: cardsData.length + 1 }]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
   
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Sample data for the bar chart
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Leads',
        data: [500, 700, 1000, 900, 1200, 800, 600],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Leads Generated Per Day',
      },
    },
  };


  return (
    <>
    <DarkModeProvider>
   <section className=' flex flex-col'>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex justify-center w-full border-b-2 border-b-gray-400'>
    <div className=' flex   mt-5 gap-[1000px]  overflow-hidden '>

   <h1 className='flex text-black text-2xl font-bold'><GiPieChart className='text-2xl'/>Analytic</h1>

   <div className='flex dark:bg-gray-900 w-full p-4'>
     <FaUserCircle className='text-4xl ' />
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
        </div>
    </div>

<div className='flex justify-center'>
<div className='flex gap-10 flex-wrap justify-center '>
    <div className="overflow-y-auto h-[95vh] w-[100%] ">
      <div className="flex dark:bg-gray-900  p-4 gap-2 flex-wrap" style={{ overflowX: "hidden" }}>
        {cardsData.map((card) => (
          <div key={card.id} className="p-4 " style={{ minWidth: "300px" }}>
            <Card
      className='w-72 h-[320px] rounded-3xl relative overflow-hidden'
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
           <div className="p-4">
                  <button
                    className="w-72 h-[320px] flex items-center justify-center border-2 border-dashed rounded-3xl"
                    onClick={handleOpenModal}
                  >
                    <FaPlus className="text-4xl text-gray-500" />
                  </button>
                </div>
    </div>

    </div>


    </div>

   
</div>


{isModalOpen && <AddPackageModal onSave={handleAddPackage} onClose={handleCloseModal} />}

    </section> 
    </DarkModeProvider>  
    </>
  )
}

export default Packagess
