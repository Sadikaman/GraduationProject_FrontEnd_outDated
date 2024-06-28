import React from 'react';
import Nav from '../component/Nav';
import Sidebars from '../component/Sidebars';
import { MdDownload } from "react-icons/md";

const PaymentHistory = () => {
  // Sample data
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
    {
      id: 6,
      invoice: 'Invoice#098 - Sep 2022',
      amount: 45.00,
      date: '2024-06-18',
      status: 'Pending'
    },
    {
      id: 7,
      invoice: 'Invoice#098 - Sep 2022',
      amount: 45.00,
      date: '2024-06-18',
      status: 'Pending'
    },
    {
      id: 8,
      invoice: 'Invoice#098 - Sep 2022',
      amount: 45.00,
      date: '2024-06-18',
      status: 'Pending'
    },
    {
      id: 9,
      invoice: 'Invoice#098 - Sep 2022',
      amount: 45.00,
      date: '2024-06-18',
      status: 'Pending'
    },
  ];

  return (
    <>
    
      <Nav />
      <section className='flex mt-[110px] dark:bg-gray-900'>
        <Sidebars />
        <div className='flex flex-col w-[80%] p-4 '>
          <div className='flex justify-between items-center mb-4 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-2xl font-bold'>Payment History</h1>
            <button className='flex items-center bg-[#2986FE] text-[#FFFFFF] gap-2 rounded-full px-4 py-2'>
              <MdDownload />
              Download All
            </button>
          </div>
          <div className='overflow-x-auto rounded-xl '>
            <table className='w-full bg-gray-100 dark:bg-gray-700 dark:text-white '>
              <thead>
                <tr className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
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
      </section>
    </>
  );
}

export default PaymentHistory;
