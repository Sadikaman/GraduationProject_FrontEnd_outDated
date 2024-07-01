import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaMoneyBillWave } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { useInView } from 'react-intersection-observer';
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { DarkModeProvider } from '../component/DarkModeProvider';
import { Bar } from 'react-chartjs-2';
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

const StatCard = ({ startValue, endValue, title, icon: Icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className='bg-gray-100 rounded-3xl w-72 shadow-md gap-8 h-[180px] flex flex-col justify-center items-center dark:bg-gray-800'
    >
      <h1 className='text-xl text-[#2986FE] flex gap-2'>
        {Icon && <Icon className='mt-1' />}
        {title}
      </h1>
      {inView ? <Counter startValue={startValue} endValue={endValue} formatValue={title === "Balance" ? value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : value => `${value}+`} /> : <h1 className='text-6xl text-[#2986FE]'>{title === "Balance" ? `$${startValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '0+'}</h1>}
    </div>
  );
};

const TravelProviderPage = () => {
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
    <DarkModeProvider>
      <section className='flex overflow-hidden'>
        <TravelProviderSidebadr />
        <div className='flex flex-col w-full p-5'>
          <div className='flex justify-between w-full border-b-2 border-b-gray-400'>
            <h1 className='flex text-[#101010] dark:text-[#ffffff] text-2xl font-bold'>
              <GiPieChart className='text-2xl' />
              Analytic
            </h1>
            <div className='flex dark:bg-gray-900 gap-2 p-4'>
              <FaUserCircle className='text-4xl' />
              {/* Dropdown Code */}
            </div>
          </div>
          {/* Card Section */}
          <section className='flex mt-10 dark:bg-gray-900 dark:text-white w-full justify-center flex-wrap p-2'>
            <div className='flex gap-20 flex-wrap justify-center'>
              <StatCard title="Balance" startValue={391111} endValue={391254} />
              <StatCard title="Customers" startValue={400} endValue={500} icon={FaUserCircle} />
              <StatCard title="Packages" startValue={35} endValue={50} icon={LiaMapMarkedAltSolid} />
            </div>
          </section>
          {/* Chart Section */}
          <div className='flex justify-center mt-5'>
            <div className='w-[600px]'>
              <Bar data={data} options={options} />
            </div>
          </div>
          {/* Map Section */}
          <div className='flex justify-end p-10'>
            <iframe
              className=''
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63052.62655836579!2d38.692454399999995!3d8.9915392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f4738c193c9%3A0x2424a7bc8f3cd3b4!2sEthnological%20Museum!5e0!3m2!1sar!2set!4v1718305017987!5m2!1sar!2set"
              width="500"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </DarkModeProvider>
  );
};

export default TravelProviderPage;
