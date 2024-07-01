import React, { useState,useEffect,useRef } from 'react';
import { FaUserCircle, FaMoneyBillWave,FaTimes,FaGreaterThan } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Dropdown } from "flowbite-react";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import { MdDownload } from "react-icons/md";
import { DarkModeProvider } from '../component/DarkModeProvider';

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




const TpEarning = () => {
 
  const [hiddenCards, setHiddenCards] = useState([]); // To track hidden cards
  const sidebarRef = useRef(null);
const [isSidebarOpen, setIsSidebarOpen] = useState(false)
const handleClickOutside = (event) => {
  if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    setIsSidebarOpen(false);
  }
};
  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);
  return (
    <div className="flex flex-col sm:flex-row">
      <DarkModeProvider>
        
            <TravelProviderSidebadr />
        
         
            <div className="lg:hidden relative">
            <button 
              className="fixed top-[112px] left-1 dark:text-white text-[#101010] p-2 rounded-md z-50"
              onClick={(e) => {
                setIsSidebarOpen(!isSidebarOpen);
                e.stopPropagation(); // Prevents the click from closing the sidebar immediately
              }}
            >
              {isSidebarOpen ? <FaTimes /> : <FaGreaterThan />}
            </button>
            {isSidebarOpen && (
              <div
                ref={sidebarRef}
                className="fixed top-0 left-0 h-full z-40 bg-gray-900  transition-all duration-300"
              >
                <TravelProviderSidebadr />
              </div>
            )}
          </div>

<section className="flex-grow p-4 ">
    <div className="flex flex-col sm:flex-row justify-between border-b-2 w-full h-24 border-b-gray-400 mb-4">
        <h1 className="flex text-black text-2xl dark:text-white font-bold items-center gap-2 mb-4 sm:mb-0">
           <GiPieChart className="text-2xl dark:text-white" />
              Earning
        </h1>
            <div className="flex dark:bg-gray-900 gap-5 items-center">
              <FaUserCircle className="text-4xl" />
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
          
          <div className="flex flex-col  gap-8">
            <div className="w-full lg:w-1/3 bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col p-6 gap-4 shadow-lg">
              <h1 className="flex flex-col text-gray-400 dark:text-gray-300">
                Total balances
                <p className="text-black dark:text-white font-bold text-xl">$ 389.07</p>
              </h1>
              <div className="flex justify-between gap-4">
                <button className="bg-[#101010] text-white rounded-full py-2 px-4 w-full lg:w-1/3">Send</button>
                <button className="bg-[#101010] text-white rounded-full py-2 px-4 w-full lg:w-1/3">Request</button>
                <button className="bg-[#101010] text-white rounded-full py-2 px-4 w-full lg:w-1/3">Refund</button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-xl font-semibold dark:text-white">Transaction</h1>
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-gray-100 dark:bg-gray-800">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-5 text-left border-b-2 border-gray-300 dark:border-gray-600">
                        <input type="checkbox" className="rounded-md text-black dark:text-white" /> Payment Invoice
                      </th>
                      <th className="p-5 text-left border-b-2 border-gray-300 dark:border-gray-600">Amount</th>
                      <th className="p-5 text-left border-b-2 border-gray-300 dark:border-gray-600">Date</th>
                      <th className="p-5 text-left border-b-2 border-gray-300 dark:border-gray-600">Status</th>
                      <th className="p-5 text-left border-b-2 border-gray-300 dark:border-gray-600">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="text-left">
                        <td className="p-5 border-b-2 border-gray-300 dark:border-gray-600 flex items-center gap-5">
                          <input type="checkbox" className="rounded-md text-black dark:text-white" />
                          {payment.invoice}
                        </td>
                        <td className="p-5 border-b-2 border-gray-300 dark:border-gray-600">${payment.amount.toFixed(2)}</td>
                        <td className="p-5 border-b-2 border-gray-300 dark:border-gray-600">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="p-5 border-b-2 border-gray-300 dark:border-gray-600">
                          <span className={`p-1 rounded ${payment.status === 'Paid' ? 'bg-green-200 dark:bg-green-700' : 'bg-red-200 dark:bg-red-700'}`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="p-2 border-b-2 border-gray-300 dark:border-gray-600">
                          <button className="flex items-center justify-center text-xl gap-3 text-[#2986FE] rounded-full px-2 py-1">
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
        </section>
      </DarkModeProvider>
    </div>
  );
};

export default TpEarning;
