import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import { GiPieChart } from "react-icons/gi";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import { Bar } from 'react-chartjs-2';
import { DarkModeProvider } from '../component/DarkModeProvider';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TpTransaction = () => {
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
     <section className='flex   '>
        <TravelProviderSidebadr />
        {/* //////////// */}
       <div className='flex flex-col bg-white w-full dark:bg-gray-900'>
        
          <div className='flex border-b-2 justify-between p-5'>
          
            <h1 className='flex dark:text-[#ffffff] text-black text-2xl font-bold gap-2 mt-5'>
              <GiPieChart className='text-2xl' />
              Transaction
            </h1>
            
            <div className='flex dark:bg-gray-900 gap-2 p-4'>
              <FaUserCircle className='text-4xl' />
              <Dropdown inline label="Jeremy Zuck">
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

          <div className='flex justify-center mt-5'>
          <div className='w-[600px]'>
          <Bar data={data} options={options} />
          </div>
        </div>

        </div>
        
     
    </section>
    </DarkModeProvider>
    </>
  );
};

export default TpTransaction;