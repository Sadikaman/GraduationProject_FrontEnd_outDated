import React ,{ useState, useRef, useEffect }from 'react'
import { FaUserCircle,FaMoneyBillWave ,FaPlus} from "react-icons/fa";
import { Card,Dropdown,Sidebar,Datepicker,Progress } from "flowbite-react";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr'
import { CiStar } from "react-icons/ci";
import TpLatestCustomers from '../component/TpLatestCustomers';
import TpTopUsers from '../component/TpTopUsers';
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
import { Line } from 'react-chartjs-2';
import { DarkModeProvider } from '../component/DarkModeProvider';
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { useInView } from 'react-intersection-observer';
import 'chart.js/auto'; // Automatically import required components for Chart.js
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
import { GiPieChart } from "react-icons/gi";
"use client";

import { Bar } from 'react-chartjs-2';


const TpStatus = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    // Sample chart data and options
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales',
          data: [3000, 2000, 5000, 4000, 6000, 7000, 8000],
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    const Counter = ({ startValue, endValue, duration = 2000, formatValue = value => value }) => {
      const [count, setCount] = useState(startValue);
    
      useEffect(() => {
        let start = startValue;
        const end = endValue;
        const incrementTime = Math.abs(Math.floor(duration / (end - start)));
    
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, incrementTime);
    
        return () => clearInterval(timer);
      }, [startValue, endValue, duration]);
    
      return <h1 className='text-4xl text-[#2986FE]'>{formatValue(count)}</h1>;
    };
    
    const StatCard = ({ startValue, endValue, title, info, icon: Icon }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      return (
        <div
          ref={ref}
          className='bg-gray-100 rounded-lg shadow-cyan-500 w-[360px] shadow-md gap-3 h-[150px] flex flex-col p-5 dark:bg-gray-800'
        >
          <h1 className='text-lg text-[#2986FE] flex gap-2'>
            {Icon && <Icon className='mt-1' />}
            {title}
          </h1>
          {inView ? <Counter startValue={startValue} endValue={endValue} formatValue={title === "Balance" ? value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : value => `${value}+`} /> : <h1 className='text-6xl text-[#2986FE]'>{title === "Balance" ? `$${startValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '0+'}</h1>}
        
          <h1 className='text-lg text-gay-500 dark:text-[#ffffff] flex gap-2'>
            
            {info}
          </h1>
        </div>
        
      );
    };
    
    

  return (
    <>
    <DarkModeProvider>
   <section className=' flex  overflow-hidden'>
   <TravelProviderSidebadr />
    {/* //////////// */}
<div className='flex flex-col w-full '>

    <div className=' flex   mt-5 justify-between  border-b-2 p-5 '>
      <h1 className='flex text-black text-2xl font-bold dark:text-[#ffffff]'><GiPieChart className='text-2xl'/>Status</h1>
      <div className='flex dark:bg-gray-900 '>
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
{/* ///////////// */}
<div className='flex justify-center mt-10'>
<div className='flex  flex-col gap-10'>

{/* Card Section */}
<section className='flex mt-10 dark:bg-gray-900 dark:text-white w-full justify-center flex-wrap p-2'>
  <div className='flex gap-5 flex-wrap justify-center'>
    <StatCard title="Total Amount" info="+33% month over month" startValue={391111} endValue={391254} />
    <StatCard title="Income" info="+33% month over month" startValue={400} endValue={500} icon={FaUserCircle} />
    <StatCard title="Spent"  info="+33% month over month" startValue={35} endValue={50} icon={LiaMapMarkedAltSolid} />
  </div>
</section>
          {/* Chart Section */}
<div className='flex gap-10'>
<div className="w-full  bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            $12,423
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Sales this week
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          23%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div id="labels-chart" className="px-2.5">
        <Line data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5 p-4 md:p-6 pt-0 md:pt-0">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Last 7 days
            <svg
              className="w-2.5 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="lastDaysdropdown"
            className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Yesterday
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 7 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 90 days
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Sales Report
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
</div>

{/* TpLatestCustomers */}
<TpLatestCustomers />

</div>
{/* //////// */}
<div className='flex w-full gap-10'>
{/* TpTopUsers */}
<TpTopUsers />
{/* chart  */}
<div className='flex w-full mt-5'>
            <div className='w-full'>
              <Bar data={data} options={options} />
            </div>
          </div>
</div>
{/* /////// */}

</div>
</div>
{/* ////////////// */}


</div>
    </section>   
    </DarkModeProvider>
    </>
  )
}

export default TpStatus
