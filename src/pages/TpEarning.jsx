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

import { GiPieChart } from "react-icons/gi";
"use client";

import { Bar } from 'react-chartjs-2';


const Tpcustomer = () => {

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



    </section>   
    </>
  )
}

export default Tpcustomer
