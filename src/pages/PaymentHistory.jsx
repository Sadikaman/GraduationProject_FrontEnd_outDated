import React, { useState, useEffect, useRef } from 'react';
import Nav from '../component/Nav';
import Sidebars from '../component/Sidebars';
import { MdDownload } from "react-icons/md";
import { FaUserCircle,FaMoneyBillWave ,FaTimes,FaBars,FaGreaterThan} from "react-icons/fa";
import { DarkModeProvider } from '../component/DarkModeProvider';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <>
    <DarkModeProvider>
      <section className='flex  flex-row  dark:bg-gray-900'>
        
      <div className="hidden lg:flex flex-shrink-0">
            <Sidebars />
          </div>
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
                <Sidebars />
              </div>
            )}
          </div>

        <div className='flex flex-col w-full lg:w-[80%] p-4'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-4 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-2xl font-bold'>Payment History</h1>
            <button className='flex items-center bg-[#2986FE] text-[#FFFFFF] gap-2 rounded-full px-4 py-2 mt-2 md:mt-0'>
              <MdDownload />
              Download All
            </button>
          </div>
          <div className='overflow-x-auto rounded-xl'>
            <table className='w-full bg-gray-100 dark:bg-gray-700 dark:text-white'>
              <thead>
                <tr className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
                  <th className='p-5 text-left border-b-2 border-gray-300'><input type="checkbox" className='rounded-md text-black' /> Payment Invoice</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Amount</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Date</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Status</th>
                  <th className='p-5 text-left border-b-2 border-gray-300'>Download</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className='text-left'>
                    <td className='p-5 border-b-2 border-gray-300'><input type="checkbox" className='rounded-md text-black' /> {payment.invoice}</td>
                    <td className='p-5 border-b-2 border-gray-300'>${payment.amount.toFixed(2)}</td>
                    <td className='p-5 border-b-2 border-gray-300'>{new Date(payment.date).toLocaleDateString()}</td>
                    <td className='p-5 border-b-2 border-gray-300'>
                      <span className={`p-1 rounded ${payment.status === 'Paid' ? 'bg-green-200' : 'bg-red-200'}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className='p-2 border-b-2 border-gray-300'>
                      <button className='flex items-center justify-center text-xl gap-3 text-[#2986FE] rounded-full px-2 py-1'>
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
      </DarkModeProvider>
    </>
  );
}

export default PaymentHistory;
