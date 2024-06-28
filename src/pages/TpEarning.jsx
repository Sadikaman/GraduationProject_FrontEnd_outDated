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
import { MdDownload } from "react-icons/md";
import { DarkModeProvider } from '../component/DarkModeProvider';
import { GiPieChart } from "react-icons/gi";

"use client";



const payments = [
  {
    id: 1,
    invoice: 'Invoice#098 - Sep 2022',
    amount: 150.75,
    date: '2024-06-10',
    status: 'Paid'
  },
  {
    id: 2,
    invoice: 'Invoice#098 - Sep 2022',
    amount: 85.50,
    date: '2024-06-12',
    status: 'Pending'
  },
  {
    id: 3,
    invoice: 'Invoice#098 - Sep 2022',
    amount: 120.00,
    date: '2024-06-15',
    status: 'Paid'
  },
  {
    id: 4,
    invoice: 'Invoice#098 - Sep 2022',
    amount: 45.00,
    date: '2024-06-18',
    status: 'Pending'
  },
  {
    id: 5,
    invoice: 'Invoice#098 - Sep 2022',
    amount: 45.00,
    date: '2024-06-18',
    status: 'Pending'
  },
  
  
];


import { Bar } from 'react-chartjs-2';


const TpEarning = () => {

  

  return (
    <>
    <DarkModeProvider>
   <section className=' flex flex-col'>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex justify-center w-full border-b-2 border-b-gray-400'>
    <div className=' flex   mt-5 gap-[1000px]  overflow-hidden '>

   <h1 className='flex text-black text-2xl font-bold gap-2'><GiPieChart className='text-2xl'/>Earning</h1>

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
<div className='flex ml-72 mt-20 '>
  <div className='flex flex-col gap-8'>
    <div className='w-96 h-52 bg-gray-100 rounded-xl flex flex-col  p-10 gap-10 '>
      <h1 className='flex flex-col text-gray-400 '>Total balances<p className='text-black font-bold text-xl'>$ 389.07</p></h1>
      <div className='flex gap-4'>
        <button className='bg-[#101010] text-[#FFFFFF] rounded-full p-2 w-28'>Send</button>
        <button className='bg-[#101010] text-[#FFFFFF] rounded-full p-2 w-28'>Request </button>
        <button className='bg-[#101010] text-[#FFFFFF] rounded-full p-2 w-28'>Refund</button>
      </div>
    </div>
    {/* ////// */}
    <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>Transaction</h1>
        <div className='overflow-x-auto rounded-xl' >
            <table className='w-full bg-gray-100 '>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='p-5 text-left border-b-2 border-gray-300 flex gap-5'><input type="checkbox" name="" className='rounded-md text-black' id="" /> Payment Invoice</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Amount</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Date</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Status</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Download</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className='text-left'>
                    <td className='p-5 border-b-2 border-gray-300 flex gap-5'><input type="checkbox" name="" className='rounded-md text-black' id="" />  {payment.invoice}</td>
                    <td className='p-5 border-b-2 border-gray-300'>  ${payment.amount.toFixed(2)}</td>
                    <td className='p-5 border-b-2 border-gray-300'> {new Date(payment.date).toLocaleDateString()}</td>
                    <td className='p-5 border-b-2 border-gray-300'>
                      <span className={`p-1 rounded ${payment.status === 'Paid' ? 'bg-green-200' : 'bg-red-200'}`}>
                       {payment.status}
                      </span>
                    </td>
                    <td className='p-2 border-b-2 border-gray-300'>
                      <button className='flex items-center justify-center text-xl gap-3 text-[#2986FE]   rounded-full px-2 py-1'>
                        <MdDownload /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  </div>
</div>


    </section>   
    </DarkModeProvider>
    </>
  )
}

export default TpEarning
