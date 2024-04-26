import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import animationDataContact from '../lotties/contact.json';
import { IoMdMail } from 'react-icons/io';
import { Checkbox, Label, TextInput, Button ,Card } from 'flowbite-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <>
      <section className='flex   pt-10  dark:bg-gray-900 dark:text-white justify-center ' id='Contact'>
      <div className='flex flex-row gap-8 '>
    <Card className="max-w-sm h-[420px] w-96  bg-gray-200 text-white rounded-3xl ">
    
    </Card>
    <div className='flex flex-col gap-5'>
      <div className='flex gap-5'>
      <h1 className='text-4xl'>UNLEASH</h1>
      <p className='text-sm'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new unique and amazing Experiences  </p>
    </div>
    <div className=''>
      <h1 className='text-4xl'>WANDERLUST WITH </h1>
    </div>
    <div className='flex  gap-10'>
      <p className='text-sm'>Traveling is A wonderful To Explore New places,<br /> Learn About  Different and Gain new Culture </p>
      <h1 className='text-4xl'>SKYWINGS</h1>
    </div>
    </div>
    </div>
      </section>

  <section className='flex justify-center pt-5'>
   <div className='pl-5 flex gap-5'>
    <div className='w-96 flex bg-slate-200 border-1 h-16 rounded-xl justify-center items-center'>
      <h1 className='text-4xl text-blue-600'>20% OFF <span className='text-black text-lg'>Till 28 September, 2023</span></h1>
    </div>

    <div className='w-[600px] flex bg-slate-200 border-1 h-16 rounded-xl justify-center items-center'>
      <h1 className=' text-2xl'>Book A Flight Now</h1>
    </div>
    </div>  
    
    </section>

<div className='flex justify-center  gap-52 pt-10'>
      <div className='w-[130px] flex  bg-slate-200  h-16 rounded-full justify-center items-center'>
       <h1 className=' text-2xl'>About Us</h1>
       </div>
       <div className='w-[500px]'>
         <p>Traveling is A wonderful To Explore New places, Learn About  
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing            Experiences  </p>
        <div className='w-[750px]  flex gap-8 pt-20'>
         <p className='w-[370px] border-l-4 border-l-blue-500 pl-2 text-justify'>Traveling is A wonderful To Explore New places, Learn About <br />  
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing Experiences</p> <p className='w-[370px] border-l-4 border-l-blue-500 pl-2 text-justify'>Traveling is A wonderful To Explore New places, Learn About <br />
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing Experiences</p>
           </div>
       </div>
       
      </div> 

      <section className='flex   pt-28  dark:bg-gray-900 dark:text-white justify-center'>
<div className='flex gap-20  '> 
  <div className=' bg-slate-100 flex flex-col rounded-3xl w-80 h-[280px] justify-center items-center'>
    <h1 className='text-[100px] text-blue-700'>10+</h1>
    <h1 className='text-lg'>Year Expereince</h1>
  </div>

  <div className=' bg-slate-100 rounded-3xl w-80 h-[280px] flex flex-col justify-center items-center'>
    <h1 className='text-[100px] text-blue-700'>10+</h1>
    <h1 className='text-lg'>Year Expereince</h1>
  </div>

  <div className=' bg-slate-100 rounded-3xl w-80 h-[280px] flex flex-col justify-center items-center'>
    <h1 className='text-[100px] text-blue-700'>10+</h1>
    <h1 className='text-lg'>Year Expereince</h1>
  </div>
</div>


      </section>
      <div className='flex flex-col text-center gap-5 pt-20'>
  <h1 className='text-3xl font-bold'>Discover The World From The Above</h1>
  <p className='text-sm'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new Experiences  </p>
</div>
    </>
  )
}

export default Contact
