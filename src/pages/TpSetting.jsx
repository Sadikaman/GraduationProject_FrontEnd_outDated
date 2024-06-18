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
import { FiSettings } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiPieChart } from "react-icons/gi";
"use client";

import { Bar } from 'react-chartjs-2';


const TpSetting = () => {

 

  return (
    <>
    
   <section className=' flex flex-col'>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex justify-center w-full border-b-2 border-b-gray-400'>
    <div className=' flex   mt-5 gap-[1000px]  overflow-hidden '>

   <h1 className='flex text-black text-2xl font-bold'><GiPieChart className='text-2xl'/>Setting</h1>

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

<section className='flex flex-col'>
        <div className='flex flex-grow'>
          {/* Sidebar */}
          <div className='flex flex-col w-64 p-4 bg-gray-50 border-r'>
            <div className='flex items-center mb-8'>
              <FaUserCircle className='text-5xl text-gray-700' />
              <div className='ml-4'>
                <h2 className='text-lg font-semibold text-gray-900'>John Doe</h2>
                <p className='text-sm text-gray-500'>Manage your name</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="#" className='text-red-500 font-semibold'>Delete Account</a>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex flex-grow justify-center items-center bg-white mt-4'>
            <div className='w-[90%] max-w-[800px] h-[500px] p-8 border rounded-lg shadow'>
              <div className='flex items-center gap-4'>
                <AiOutlineCheckCircle className='text-4xl text-blue-500' />
                <div>
                  <h2 className='text-xl font-semibold text-gray-900'>ABC Tour and Accommodation</h2>
                  <p className='text-sm text-gray-500'>ID: ATT34GHMKL56</p>
                </div>
              </div>
              <div className='mt-8 flex flex-col gap-4'>
                <h3 className='text-gray-700 text-lg'>General</h3>
                <div className='flex flex-col gap-2'>
                  <a href="#" className='text-gray-400'>Edit Profile</a>
                  <a href="#" className='text-gray-400'>Password</a>
                  <a href="#" className='text-gray-400'>Social Profiles</a>
                  <a href="#" className='text-gray-400'>Company</a>
                  <a href="#" className='text-red-400'>Delete account</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>   
    </>
  )
}

export default TpSetting
