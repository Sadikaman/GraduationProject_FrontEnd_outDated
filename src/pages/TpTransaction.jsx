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
      <section className='flex flex-col'>
        <TravelProviderSidebadr />
        {/* //////////// */}
        <div className='flex justify-center w-full border-b-2 border-b-gray-400'>
          <div className='flex mt-5 gap-[950px] overflow-hidden'>
            <h1 className='flex text-black text-2xl font-bold gap-2'>
              <GiPieChart className='text-2xl' />
              Transaction
            </h1>
            <div className='flex dark:bg-gray-900 w-full p-4'>
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
        </div>
        <div className='flex justify-center'>
          <div className='w-[600px]'>
          <Bar data={data} options={options} />
          </div>
        </div>
      </section>
    </DarkModeProvider>
    </>
  );
};

export default TpTransaction;