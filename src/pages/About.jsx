import React from 'react';
import Nav from '../component/Nav';
import Footers from '../component/Footers';
import { DarkModeProvider } from '../component/DarkModeProvider';
import DatePiker from '../component/DatePiker';
function About() {
  return (
    <>
     <DarkModeProvider>
      <section className='flex flex-col pt-20 md:pt-36 dark:bg-gray-900 dark:text-white'>
        <Nav />
        <div className='flex justify-center px-4 w-full'>
          <div className='w-full max-w-screen-lg h-56'>
            <div
              className='bg-cover bg-no-repeat bg-center flex justify-center items-center w-full h-full rounded-xl'
              style={{ backgroundImage: "url('About.jpg')" }}
            >
              <p className='text-white text-2xl md:text-4xl font-medium'>About Us</p>
            </div>
          </div>
        </div>

        {/* What we do section */}
        <div className='flex flex-col items-center w-full mt-10 md:mt-20 px-4'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full max-w-screen-lg'>
            <img src="plain.jpeg" className='w-full md:w-1/2 rounded-lg' alt="" />
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl md:text-4xl font-bold text-[#2986FE] text-center md:text-left'>
                What We Do
              </h1>
              <p className='text-black text-base md:text-xl font-normal text-start dark:text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, cumque excepturi molestias totam alias veritatis, impedit sed possimus ipsa quas laborum pariatur! Neque ducimus sint odio, necessitatibus nemo officiis nam.
              </p>
              <p className='text-black text-base md:text-xl font-normal text-start dark:text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsum perferendis sit eum repudiandae unde. Est nobis corporis possimus! Aperiam ab sed molestias totam alias veritatis, impedit sed possimus ipsa consectetur, obcaecati error doloribus quae soluta beatae quos.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full max-w-screen-lg mt-10 md:mt-20'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl md:text-4xl font-bold text-[#2986FE] text-center md:text-left'>
                Our Mission
              </h1>
              <p className='text-black text-base md:text-xl font-normal text-start dark:text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, cumque excepturi molestias totam alias veritatis, impedit sed possimus ipsa quas laborum pariatur! Neque ducimus sint odio, necessitatibus nemo officiis nam.
              </p>
              <p className='text-black text-base md:text-xl font-normal text-start dark:text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsum perferendis sit eum repudiandae unde. Est nobis corporis possimus! Aperiam ab sed molestias totam alias veritatis, impedit sed possimus ipsa consectetur, obcaecati error doloribus quae soluta beatae quos.
              </p>
            </div>
            <img src="plain.jpeg" className='w-full md:w-1/2 rounded-lg' alt="" />
          </div>
        </div>
    
        <Footers />
      </section>
      </DarkModeProvider>
    </>
  );
}

export default About;
