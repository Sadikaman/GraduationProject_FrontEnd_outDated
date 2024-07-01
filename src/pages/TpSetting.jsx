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
import { DarkModeProvider } from '../component/DarkModeProvider';
"use client";

import { Bar } from 'react-chartjs-2';


const TpSetting = () => {

 

  return (
    <>
    <DarkModeProvider>
   <section className=' flex overflow-hidden '>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex flex-col  w-full '>
  <div className=' flex w-full  mt-5 p-5 justify-between border-b-2'>
   <h1 className='flex text-black   dark:text-[#ffffff] gap-2 text-2xl font-bold'><GiPieChart className='text-2xl'/>Setting</h1>
   <div className='flex dark:bg-gray-900 gap-2 '>
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
   

<section className='flex flex-col p-4'>
        <div className='flex flex-grow'>
          {/* Sidebar */}
          <div className='flex flex-col w-64 p-4 bg-gray-50 border-r dark:bg-gray-800 dark:text-white'>
            <div className='flex items-center mb-8'>
              <FaUserCircle className='text-5xl text-gray-700' />
              <div className='ml-4'>
                <h2 className='text-lg font-semibold text-gray-900dark:text-white '>John Doe</h2>
                <p className='text-sm text-gray-500 dark:text-white'>Manage your name</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="#" className='text-red-500 font-semibold '>Delete Account</a>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex flex-grow justify-center items-center bg-white dark:text-white dark:bg-gray-700 mt-4'>
            <div className='w-[90%] max-w-[800px] h-[500px] p-8 border rounded-lg shadow'>
              <div className='flex items-center gap-4'>
                <AiOutlineCheckCircle className='text-4xl text-blue-500' />
                <div>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>ABC Tour and Accommodation</h2>
                  <p className='text-sm text-gray-500 dark:text-white'>ID: ATT34GHMKL56</p>
                </div>
              </div>
              <div className='mt-8 flex flex-col gap-4'>
                <h3 className='text-gray-700 text-lg dark:text-white'>General</h3>
                <div className='flex flex-col gap-2'>
                  <a href="#" className='text-gray-400 dark:text-white'>Edit Profile</a>
                  <a href="#" className='text-gray-400 dark:text-white'>Password</a>
                  <a href="#" className='text-gray-400 dark:text-white'>Social Profiles</a>
                  <a href="#" className='text-gray-400 dark:text-white'>Company</a>
                  <a href="#" className='text-red-400 '>Delete account</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </section>   
    </DarkModeProvider>
    </>
  )
}

export default TpSetting
