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
import { CiMenuKebab } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";
import { RiUser3Fill,RiUserHeartFill,RiUserAddFill } from "react-icons/ri";
import { DarkModeProvider } from '../component/DarkModeProvider';
"use client";

import { Bar } from 'react-chartjs-2';
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
    <DarkModeProvider>
   <section className=' flex flex-col'>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex justify-center w-full border-b-2 border-b-gray-400'>
    <div className=' flex   mt-5 gap-[500px]  overflow-hidden '>

   <h1 className='flex text-black text-2xl font-bold'><GiPieChart className='text-2xl'/>Customer</h1>

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
<div className='flex flex-col  mt-10 gap-10'>
  <div className='flex gap-11  '>
    <div className='w-52 h-32 shadow-lg rounded-xl border-2  border-gray-100 flex flex-col'>
      <h1 className='text-2xl text-[#2986FE] p-5 font-medium'><RiUser3Fill className='mb-2'/>
        <p className='font-bold'>1000</p><p>Total Customer</p>
        </h1>
    </div>
    <div className='w-52 h-32 shadow-lg rounded-xl border-2  border-gray-100 flex flex-col'>
      <h1 className='text-2xl text-[#2986FE] p-5 font-medium'><RiUserHeartFill className='mb-2 text-red-500'/>
        <p className='font-bold'>300</p><p>Active User</p>
        </h1>
    </div>
    <div className='w-52 h-32 shadow-lg rounded-xl border-2  border-gray-100 flex flex-col'>
      <h1 className='text-2xl text-[#2986FE] p-5 font-medium'><RiUserAddFill className='mb-2 text-green-400'/>
      <p className='font-bold'>100</p><p className='text-xl'>New User/ Week</p>
      </h1>
    </div>
    <div className='w-52 h-32 shadow-lg rounded-xl border-2  border-gray-100 flex flex-col'>
      <h1 className='text-2xl text-[#2986FE] p-5 font-medium'><FaDollarSign className='mb-2 text-[#101010]'/>
        <p className='font-bold'>$1000</p><p>Total Spent</p>
        </h1>
    </div>
  </div>
  <div className='overflow-x-auto rounded-xl' >
            <table className='w-full bg-gray-50 '>
              <thead>
                <tr className='bg-[#2986FE] text-[#ffffff]'>
                  <th className='p-5 text-left border-b border-blue-400 flex gap-5'><input type="checkbox" name="" className='rounded-md text-black' id="" /> Payment Invoice</th>
                  <th className='p-5 text-left border-b border-blue-400'>Amount</th>
                  <th className='p-5 text-left border-b border-blue-400'>Date</th>
                  <th className='p-5 text-left border-b border-blue-400'>Status</th>
                  <th className='p-5 text-left border-b border-blue-400'>Download</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className='text-left'>
                    <td className='p-5 border-b border-blue-400 flex gap-5'><input type="checkbox" name="" className='rounded-md text-black' id="" />  {payment.invoice}</td>
                    <td className='p-5 border-b border-blue-400'>  ${payment.amount.toFixed(2)}</td>
                    <td className='p-5 border-b border-blue-400'> {new Date(payment.date).toLocaleDateString()}</td>
                    <td className='p-5 border-b border-blue-400'>
                      <span className={`p-1 rounded ${payment.status === 'Paid' ? 'bg-green-200' : 'bg-red-200'}`}>
                       {payment.status}
                      </span>
                    </td>
                    <td className='p-2 border-b border-blue-400'>
                      <button className='flex items-center justify-center text-xl gap-3 text-[#2986FE]   rounded-full px-2 py-1'>
                        <CiMenuKebab className='text-2xl text-gray-700'/> 
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

</div>
</div>

    </section>   
    </DarkModeProvider>
    </>
  )
}

export default Tpcustomer
