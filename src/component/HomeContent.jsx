import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie-player';
import animationDataContact from '../lotties/contact.json';
import { IoMdMail } from 'react-icons/io';
import { Checkbox, Label, TextInput, Button ,Card } from 'flowbite-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGlobe , FaWallet} from "react-icons/fa";
import { TbMessage2X } from "react-icons/tb";
import { ImArrowUpRight2 } from "react-icons/im";
import { SiAlacritty } from "react-icons/si";
const HomeContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  
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

  return (
    <>
<section className='flex pt-10 dark:bg-gray-900 dark:text-white justify-center flex-wrap p-2' id='Contact'>
  <div className='flex flex-col md:flex-row gap-8 flex-wrap items-center'>
    
    {/* Image and Discount Section */}
    <div className="flex flex-col gap-3 items-center md:items-start">
      <img src="/public/abiy-fikru.jpg" className="rounded-3xl xl:w-96 lg:w-96 md:w-80 sm:w-72 w-full max-w-xs" alt="Travel Image" />
      <div className='w-full md:w-96 flex bg-gray-100 border-1 h-24 gap-2 rounded-3xl justify-center items-center dark:bg-gray-800 dark:text-white p-2'>
        <h1 className='text-4xl font-bold text-[#2986FE] text-center md:text-left'>20% OFF</h1> 
        <span className='text-gray-500 text-sm dark:text-white text-center md:text-left'>
          Till 28 September,<br /> 2023
        </span>
      </div>
    </div>
    
    {/* Text Section */}
    <section className='flex flex-col items-center xl:gap-[200px] lg:gap-[200px] md:gap-[100px] sm:gap-[20px]  md:items-start'>
      <div className='flex flex-col gap-5 flex-wrap justify-center items-center md:items-start'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-5 text-center md:text-left'>
          <h1 className='text-5xl md:text-6xl font-bold'>UNLEASH</h1>
          <p className='text-xs md:text-sm text-gray-500 dark:text-white'>
            Traveling is a wonderful way to explore new places, learn <br /> 
            about different and unique cultures, and gain amazing experiences.
          </p>
        </div>
        <div className='flex-wrap'>
          <h1 className='text-3xl md:text-6xl font-bold'>WANDERLUST WITH</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-10 text-center md:text-left'>
          <p className='text-xs md:text-sm text-gray-500 dark:text-white'>
            Traveling is a wonderful way to explore new places, <br />
            learn about different cultures, and gain new experiences.
          </p>
          <h1 className='text-5xl md:text-6xl font-bold'>SKYWINGS</h1>
        </div>
      </div>
      <div className='w-full md:w-96 xl:w-[710px] flex bg-gray-100 border-1 h-24 rounded-xl justify-center items-center dark:bg-gray-800 p-2 mt-4'>
        <h1 className='text-2xl md:text-4xl text-center'>Book A Flight Now</h1>
      </div>
    </section>
  </div>
</section>


<div className='flex justify-center  xl:gap-56 md:gap-5 p-2  pt-10 flex-wrap dark:bg-gray-900'>
      <div className='w-[130px] flex  bg-gray-100  h-16 rounded-full justify-center items-center flex-wrap dark:bg-gray-800'>
       <h1 className=' text-2xl'>About Us</h1>
       </div>
    <div className='w-full max-w-[685px] p-2 flex-wrap'>
      <p className='dark:text-white text-xs md:text-sm lg:text-base xl:text-xl font-semibold text-gray-700 flex-wrap p-2 text-justify'>
        Traveling is a wonderful way to explore new places, learn about different and unique cultures, and gain new unique and amazing experiences. Traveling is a wonderful way to explore new places, learn about different and unique cultures, and gain new unique and amazing experiences.
      </p>
      <div className='w-full xl:w-[800px] p-2 flex flex-col md:flex-row gap-3 pt-10 md:pt-20 flex-wrap'>
        <p className='dark:text-white xl:w-[350px] w-full md:w-[48%] text-xs md:text-sm lg:text-base border-l-4 border-l-[#2986FE] pl-2 text-justify text-gray-600'>
          Traveling is a wonderful way to explore new places, learn about <br /> different and unique cultures, and gain new unique and amazing experiences. Traveling is a wonderful way to explore new places, learn about different and unique cultures, and gain new unique and amazing experiences.
        </p>
        <p className='dark:text-white w-full md:w-[48%] text-xs md:text-sm lg:text-base border-l-4 border-l-[#2986FE] pl-2 text-justify text-gray-600'>
          Traveling is a wonderful way to explore new places, learn about <br /> different and unique cultures, and gain new unique and amazing experiences. Traveling is a wonderful way to explore new places, learn about different and unique cultures, and gain new unique and amazing experiences.
        </p>
      </div>
    </div>
</div> 

{/* card  */}
<section className='flex pt-28 dark:bg-gray-900 dark:text-white justify-center flex-wrap p-2'>
      <div className='flex gap-20  flex-wrap'>
        <StatCard endValue={10} title="Years Experience" />
        <StatCard endValue={17} title="Happy Clients" />
        <StatCard endValue={4} title="Overall Rating" />
      </div>
</section>

{/* Discover place  */}

<div className='flex flex-col text-center gap-5 pt-20 dark:bg-gray-900'>
  <h1 className='text-3xl font-bold dark:text-white'>Discover The World From The Above</h1>
  <p className='text-md text-gray-500 dark:text-white'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new Experiences  </p>
</div>

<section className='flex justify-center pt-20 dark:bg-gray-900 '>
  <div className='flex w-[1300px] justify-center gap-20 text-center flex-wrap pl-2  dark:bg-gray-900'>

    <div className='flex flex-col  justify-center items-center w-[300px] gap-3'>
      <FaGlobe className='text-[#2986FE] text-[60px] bg-gray-100 rounded-full p-4'/>
      <h1 className='text-2xl  flex text-center font-semibold'>Various <br /> Destination</h1>
      <p className='text-md text-gray-500 dark:text-white'>Traveling is A wonderful  Way To Explore New places, Learn About <br />  Different  Cultures  and Gain new Experiences</p>
    </div>

  <div className='flex flex-col justify-center items-center w-[300px] gap-3'>
  <SiAlacritty className='text-[#2986FE] text-[60px] bg-gray-100 rounded-full p-4'/>
  <h1 className='text-2xl font-semibold dark:text-white'>Everything is <br /> Included</h1>
  <p className='text-md text-gray-500 dark:text-white'>Traveling is A wonderful  Way To Explore New places, Learn About <br /> Different  Cultures  and Gain new Experiences</p>
  </div>

  <div className='flex flex-col justify-center items-center w-[300px] gap-3'>
  <FaWallet className='text-[#2986FE] text-[60px] bg-gray-100 rounded-full p-4'/>
  <h1 className='text-2xl font-semibold dark:text-white'>Affordable <br /> Price</h1>
  <p className='text-md text-gray-500 dark:text-white'>Traveling is A wonderful  Way To Explore New places, Learn About <br /> Different  Cultures  and Gain new Experiences</p>
  </div>
  

</div>
</section>

{/* //////// */}
<div className='flex justify-center pt-28 dark:bg-gray-900'>
 <h1 className='text-4xl font-semibold '>Loved By Over Thousand Travelers </h1>
  </div> 


<section className='flex   pt-20 dark:bg-gray-900 dark:text-white justify-center flex-wrap  '>
 
<div className='flex gap-20 flex-wrap p-3'> 
<section className='flex justify-center flex-col '> 
  <div className=' bg-slate-100 rounded-3xl dark:bg-gray-800 w-96 h-[430px] pt-2 flex-col'>
    <div className='bg-white dark:bg-gray-700  flex flex-col rounded-3xl w-[380px] h-[280px] gap-7 p-10'>
      <div className="flex items-center">
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <p className='text-gray-500 dark:text-white' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque itaque ex incidunt consectetur nesciunt repellendus. Ratione, voluptate eius? Animi quis sit laborum labore exercitationem atque error adipisci a neque vel.</p>

    </div>
{/* ////// */}
    <div className='flex p-10 gap-3'>
      <div className='flex w-16 h-16 '>
         <img src="vision.jpeg" className='rounded-full' alt="" />
      </div>
      <h1 className='flex flex-col text-lg font-bold'>Ezra mammo<p className='text-gray-500 font-normal'>UI/UX Designer</p></h1>
    </div>
  </div>
</section>
<section className='flex justify-center flex-col  '> 
  <div className=' bg-[#2986FE] dark:bg-gray-950 rounded-3xl w-96 h-[430px]  pt-2 flex-col'>
    <div className='bg-white dark:bg-gray-700  flex flex-col rounded-3xl w-[380px] h-[280px] gap-7 p-10 '>
      
      <div className="flex items-center">
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <p className='text-gray-500 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque itaque ex incidunt consectetur nesciunt repellendus. Ratione, voluptate eius? Animi quis sit laborum labore exercitationem atque error adipisci a neque vel.</p>

    </div>
{/* ////// */}
    <div className='flex p-10 gap-3 flex-wrap'>
      <div className='flex w-16 h-16 '>
         <img src="vision.jpeg" className='rounded-full' alt="" />
      </div>
      <h1 className='flex flex-col text-lg font-bold text-[#ffffff]'>Ezra mammo<p className='text-gray-100 font-normal'>UI/UX Designer</p></h1>
    </div>
  </div>
</section> 
<section className='flex justify-center flex-col '>
  <div className=' bg-slate-100 rounded-3xl dark:bg-gray-800 w-96 h-[430px]   pt-2'>
    <div className='bg-white dark:bg-gray-700 flex flex-col rounded-3xl w-[380px] h-[280px] gap-7 p-10'>
        <div className="flex items-center ">
            <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-[#2986FE] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <p className='text-gray-500 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque itaque ex incidunt consectetur nesciunt repellendus. Ratione, voluptate eius? Animi quis sit laborum labore exercitationem atque error adipisci a neque vel.</p>
    </div>
{/* ////// */}
    <div className='flex p-10 gap-3'>
      <div className='flex w-16 h-16 '>
         <img src="vision.jpeg" className='rounded-full' alt="" />
      </div>
      <h1 className='flex flex-col text-lg font-bold'>Ezra mammo<p className='text-gray-500 font-normal'>UI/UX Designer</p></h1>
    </div>
  </div>
  </section>
</div>

</section>

{/* explore  */}

<div className='flex pt-20 text-center p-5 w-full max-w-[450px] flex-wrap dark:bg-gray-900'>
  <h1 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500 dark:text-white'>
    Traveling is a wonderful way to explore new places, learn about different cultures, and gain new experiences.
  </h1>
</div>


<section className='mt-10 flex justify-center flex-wrap dark:bg-gray-900'>
  
<div className='flex flex-col flex-wrap' >
  
    <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 p-5 text-center'>
      <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold pt-6 md:pt-0'>
        Join Us With Confidence
      </h1>
      <TbMessage2X className='bg-black text-white p-3 md:p-5 rounded-full w-16 h-16 md:w-20 md:h-20' />
    </div>


    <div className='pt-10 flex justify-center'>
      <a href="#"> Explore more</a>
    </div>

    <div className='flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20 p-5 md:p-10 lg:p-20'>
      <img src="/afar.jpg" className='rounded-full w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-24 h:w-28 h:w-32 h:w-36 h:w-40' alt="Afar image" />
      
      <h1 className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4 md:mt-0'>
        Explore The Skies <br className='hidden md:block' /> With Confidence!
      </h1>
      
      <div className='flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-400'>
        <ImArrowUpRight2 className='text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white' />
      </div>
      
      <img src="/images.jpeg" className='rounded-full w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-24 h:w-28 h:w-32 h:w-36 h:w-40' alt="Additional image" />
    </div>

  </div>
</section>
    </>
  )
}

export default HomeContent
