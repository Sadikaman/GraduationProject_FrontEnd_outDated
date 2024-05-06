import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import animationDataContact from '../lotties/contact.json';
import { IoMdMail } from 'react-icons/io';
import { Checkbox, Label, TextInput, Button ,Card } from 'flowbite-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGlobe , FaWallet} from "react-icons/fa";
import { TbMessage2X } from "react-icons/tb";
import { ImArrowUpRight2 } from "react-icons/im";
const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <>
      <section className='flex   pt-10  dark:bg-gray-900 dark:text-white justify-center flex-wrap' id='Contact'>
      <div className='flex flex-row gap-8 flex-wrap'>
    <Card className="max-w-sm h-[420px] w-96  bg-gray-200 text-white rounded-3xl flex-wrap">
    
    </Card>
    <div className='flex flex-col gap-5 flex-wrap p-2'>
      <div className='flex gap-5'>
      <h1 className='text-4xl'>UNLEASH</h1>
      <p className='text-sm'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new unique and amazing Experiences  </p>
    </div>
    <div className='flex-wrap'>
      <h1 className='text-4xl'>WANDERLUST WITH </h1>
    </div>
    <div className='flex  gap-10 flex-wrap'>
      <p className='text-sm'>Traveling is A wonderful To Explore New places,<br /> Learn About  Different and Gain new Culture </p>
      <h1 className='text-4xl'>SKYWINGS</h1>
    </div>
    </div>
    </div>
      </section>

  <section className='flex justify-center pt-5 flex-wrap dark:bg-gray-900'>
   <div className='pl-5 flex gap-5 flex-wrap'>
    <div className='w-96 flex bg-slate-200 border-1 h-16 rounded-xl justify-center items-center dark:bg-gray-800 dark:text-white'>
      <h1 className='text-4xl text-blue-600'>20% OFF <span className='text-black text-lg dark:text-white'>Till 28 September, 2023</span></h1>
    </div>

    <div className='xl:w-[600px] md:w-96 flex bg-slate-200 border-1 h-16 rounded-xl justify-center items-center flex-wrap dark:bg-gray-800 '>
      <h1 className=' text-2xl'>Book A Flight Now</h1>
    </div>
    </div>  
    
    </section>

<div className='flex justify-center  gap-52 pt-10 flex-wrap dark:bg-gray-900'>
      <div className='w-[130px] flex  bg-slate-200  h-16 rounded-full justify-center items-center flex-wrap dark:bg-gray-800'>
       <h1 className=' text-2xl'>About Us</h1>
       </div>
       <div className='xl:w-[500px] md:w-full p-2 flex-wrap'>
         <p>Traveling is A wonderful To Explore New places, Learn About  
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing            Experiences  </p>
        <div className='xl:w-[750px] p-2  md:w-full flex gap-8 pt-20 flex-wrap'>
         <p className='xl:w-[370px] p-2 md:w-full border-l-4 border-l-blue-500 pl-2 text-justify'>Traveling is A wonderful To Explore New places, Learn About <br />  
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing Experiences</p> <p className='w-[370px] border-l-4 border-l-blue-500 pl-2 text-justify'>Traveling is A wonderful To Explore New places, Learn About <br />
            Different and Gain new unique and amazing Experiences.Traveling is A wonderful To Explore New places, Learn About  Different and Gain new unique and amazing Experiences</p>
           </div>
       </div>
       
      </div> 

{/* card  */}
      <section className='flex   pt-28  dark:bg-gray-900 dark:text-white justify-center flex-wrap'>
          <div className='flex gap-20 pl-10 flex-wrap'> 
            <div className=' bg-slate-100 flex flex-col rounded-3xl w-80 h-[280px] justify-center items-center dark:bg-gray-800'>
              <h1 className='text-[100px] text-blue-700'>10+</h1>
              <h1 className='text-lg'>Year Expereince</h1>
            </div>

            <div className=' bg-slate-100 rounded-3xl w-80 h-[280px] flex flex-col justify-center items-center dark:bg-gray-800'>
              <h1 className='text-[100px] text-blue-700'>10+</h1>
              <h1 className='text-lg'>Year Expereince</h1>
            </div>

            <div className=' bg-slate-100 rounded-3xl w-80 h-[280px] flex flex-col justify-center items-center dark:bg-gray-800'>
              <h1 className='text-[100px] text-blue-700'>10+</h1>
              <h1 className='text-lg'>Year Expereince</h1>
            </div>
          </div>


      </section>

{/* Discover place  */}

      <div className='flex flex-col text-center gap-5 pt-20 dark:bg-gray-900'>
  <h1 className='text-3xl font-bold'>Discover The World From The Above</h1>
  <p className='text-sm'>Traveling is A wonderful To Explore New places, Learn About <br /> Different and Gain new Experiences  </p>
</div>

<section className='flex justify-center pt-20 dark:bg-gray-900'>
<div className='flex w-[1300px] gap-20 text-center flex-wrap pl-2 dark:bg-gray-900'>

  <div className='flex flex-col  justify-center items-center w-[350px] gap-4'>
  <FaGlobe style={{fontSize:"30px", color:"blue"}}/>
  <h1 className='text-4xl font-semibold'>Various Destination</h1>
  <p className='text-md'>Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences</p>
  </div>

  <div className='flex flex-col justify-center items-center w-[350px] gap-4'>
  <FaGlobe style={{fontSize:"30px", color:"blue"}}/>
  <h1 className='text-4xl font-semibold'>Various Destination</h1>
  <p className='text-md'>Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences</p>
  </div>

  <div className='flex flex-col justify-center items-center w-[350px] gap-4'>
  <FaWallet style={{fontSize:"30px", color:"blue"}}/>
  <h1 className='text-4xl font-semibold'>Various Destination</h1>
  <p className='text-md'>Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences</p>
  </div>
  

</div>
</section>


<div className='flex justify-center pt-28 dark:bg-gray-900'>
 <h1 className='text-4xl font-semibold '>Loved By Over Thousand Travelers </h1>
  </div> 


<section className='flex   pt-20 dark:bg-gray-900 dark:text-white justify-center flex-wrap '>
 
<div className='flex gap-20  flex-wrap p-3'> 

  <div className=' bg-slate-100 flex  rounded-3xl w-96 h-[430px] justify-center pt-4'>
  <div className='bg-white   flex flex-col rounded-3xl w-80 h-[280px]'>
    
    </div>
  </div>

  <div className=' bg-black rounded-3xl w-96 h-[430px] flex  justify-center pt-4'>
  <div className='bg-white   flex flex-col rounded-3xl w-80 h-[280px]'>
    
    </div>
  </div>

  <div className=' bg-slate-100 rounded-3xl w-96 h-[430px] flex justify-center  pt-4'>
  <div className='bg-white flex flex-col rounded-3xl w-80 h-[280px]'>
    
    </div>
  </div>
</div>


      </section>

{/* explore  */}

      <div className='flex pt-20 text-center p-5 w-[450px] flex-wrap dark:bg-gray-900'>
 <h1 className='text-lg '>Traveling is A wonderful  Way To Explore New places, Learn About  Different  Cultures  and Gain new Experiences  </h1>
  </div> 

<section className='pt-20 flex justify-center flex-wrap dark:bg-gray-900'>
  
<div className='flex flex-col flex-wrap' >
  
  <div className='flex gap-[550px]  justify-end flex-wrap'>
      <h1 className='text-2xl pt-6 '>lorem ipsum dol amit
      </h1>
      <TbMessage2X className='bg-black text-white p-5 rounded-full w-20 h-20 '/>
 
      </div>


    <div className='pt-10 flex justify-center flex-wrap'>
<h1>Explore more</h1>
    </div>

<div className='flex gap-72 pt-20 flex-wrap'>
    <div className='w-36 h-36 rounded-full bg-gray-300'>
    </div>
<h1 className='text-4xl'>
Explore The Skies <br /> With confidence!
</h1>
    <div className=' w-20 h-20 rounded-full bg-white border-2 flex justify-center items-center border-gray-400 flex-wrap'>
    <ImArrowUpRight2 className='text-4xl'/>

    </div>
    <div className='w-36 h-36 rounded-full bg-gray-300 flex-wrap '>
    </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Contact
