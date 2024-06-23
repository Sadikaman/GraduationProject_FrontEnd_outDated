import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <h1 className='text-[100px] text-[#2986FE]'>{count}+</h1>;
};

const StatCard = ({ endValue, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className='bg-gray-100 rounded-[70px] w-80 h-[280px] flex flex-col justify-center items-center dark:bg-gray-800'
    >
      {inView ? <Counter endValue={endValue} /> : <h1 className='text-[100px] text-[#2986FE]'>0+</h1>}
      <h1 className='text-lg'>{title}</h1>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className='flex pt-28 dark:bg-gray-900 dark:text-white justify-center flex-wrap'>
      <div className='flex gap-20 pl-10 flex-wrap'>
        <StatCard endValue={10} title="Years Experience" />
        <StatCard endValue={17} title="Happy Clients" />
        <StatCard endValue={4.8} title="Overall Rating" />
      </div>
    </section>
  );
};

export default StatisticsSection;
