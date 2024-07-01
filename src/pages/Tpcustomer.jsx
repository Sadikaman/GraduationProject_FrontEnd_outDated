import React from 'react';
import { FaUserCircle, FaDollarSign } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import { GiPieChart } from "react-icons/gi";
import { RiUser3Fill, RiUserHeartFill, RiUserAddFill } from "react-icons/ri";
import { DarkModeProvider } from '../component/DarkModeProvider';
import { CiMenuKebab } from "react-icons/ci";

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
  return (
    <DarkModeProvider>
      <section className="flex flex-col lg:flex-row overflow-hidden">
        <TravelProviderSidebadr />
        <div className="flex flex-col w-full border-b-2">
          <div className="flex flex-col sm:flex-row mt-5 w-full justify-between overflow-hidden p-5 border-b-2">
            <h1 className="flex items-center text-black dark:text-[#ffffff] text-2xl font-bold">
              <GiPieChart className="text-2xl mr-2" /> Customer
            </h1>
            <div className="flex items-center dark:bg-gray-900 p-4 mt-4 sm:mt-0">
              <FaUserCircle className="text-4xl mr-2" />
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

          <div className="flex justify-center px-4">
            <div className="flex flex-col mt-10 gap-10 w-full">
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <div className="w-full sm:w-52 h-32 shadow-lg rounded-xl border-2 border-gray-100 flex flex-col items-center p-4">
                  <RiUser3Fill className="text-2xl text-[#2986FE] mb-2" />
                  <p className="font-bold text-2xl">1000</p>
                  <p className="text-sm text-center">Total Customer</p>
                </div>
                <div className="w-full sm:w-52 h-32 shadow-lg rounded-xl border-2 border-gray-100 flex flex-col items-center p-4">
                  <RiUserHeartFill className="text-2xl text-red-500 mb-2" />
                  <p className="font-bold text-2xl">300</p>
                  <p className="text-sm text-center">Active User</p>
                </div>
                <div className="w-full sm:w-52 h-32 shadow-lg rounded-xl border-2 border-gray-100 flex flex-col items-center p-4">
                  <RiUserAddFill className="text-2xl text-green-400 mb-2" />
                  <p className="font-bold text-2xl">100</p>
                  <p className="text-sm text-center">New User/Week</p>
                </div>
                <div className="w-full sm:w-52 h-32 shadow-lg rounded-xl border-2 border-gray-100 flex flex-col items-center p-4">
                  <FaDollarSign className="text-2xl text-[#101010] mb-2" />
                  <p className="font-bold text-2xl">$1000</p>
                  <p className="text-sm text-center">Total Spent</p>
                </div>
              </div>
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full bg-gray-50 dark:bg-gray-800">
                  <thead>
                    <tr className="bg-[#2986FE] text-[#ffffff]">
                      <th className="p-5 text-left border-b border-blue-400 flex gap-5">
                        <input type="checkbox" className="rounded-md text-black" />
                        Payment Invoice
                      </th>
                      <th className="p-5 text-left border-b border-blue-400">Amount</th>
                      <th className="p-5 text-left border-b border-blue-400">Date</th>
                      <th className="p-5 text-left border-b border-blue-400">Status</th>
                      <th className="p-5 text-left border-b border-blue-400">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="text-left">
                        <td className="p-5 border-b border-blue-400 flex gap-5">
                          <input type="checkbox" className="rounded-md text-black" />
                          {payment.invoice}
                        </td>
                        <td className="p-5 border-b border-blue-400">${payment.amount.toFixed(2)}</td>
                        <td className="p-5 border-b border-blue-400">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="p-5 border-b border-blue-400">
                          <span className={`p-1 rounded ${payment.status === 'Paid' ? 'bg-green-200' : 'bg-red-200'}`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="p-2 border-b border-blue-400">
                          <button className="flex items-center justify-center text-xl gap-3 text-[#2986FE] rounded-full px-2 py-1">
                            <CiMenuKebab className="text-2xl text-gray-700" />
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
  );
};

export default Tpcustomer;
