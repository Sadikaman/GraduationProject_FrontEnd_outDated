import React from 'react'
import Nav from '../component/Nav'
import Footers from '../component/Footers'
import { Footer } from 'flowbite-react'
function About() {
  return (
    <>
    <section className='flex pt-36  flex-col dark:bg-gray-900 dark:text-white'>
        <Nav />
          <div className='flex justify-center'>
            <div className='flex justify-center w-[1500px] h-56 '>
              <div className='bg-cover bg-no-repeat bg-center flex  justify-center items-center  w-full h-full rounded-xl ' style={{backgroundImage:"url('About.jpg')"}}>
                <p className='text-white text-4xl font-medium'>About Us </p>
              </div>
            </div>
          </div>

{/* what we do  */}
      <div className='flex justify-center w-full flex-col mt-20 '>
        
        <div className='w-full flex justify-center'>
        <div className='flex gap-10 w-[80%]'>
          <img src="plain.jpeg" className='w-[1400px]' alt="" />
          <h1 className='flex flex-col text-4xl font-bold text-[#2986FE] gap-3 text-center '>What We Do 
            <p className='text-black text-2xl font-normal text-start dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, cumque excepturi molestias totam alias veritatis, impedit sed possimus ipsamolestias totam alias veritatis, impedit sed possimus ipsa quas laborum pariatur! Neque ducimus sint odio, necessitatibus nemo officiis nam.</p>

          <p className='text-black text-2xl font-normal text-start dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsum perferendis sit eum repudiandae unde. Est nobis corporis possimus! Aperiam ab sed molestias totam alias veritatis, impedit sed possimus ipsa consectetur, obcaecati error doloribus quae soluta beatae quos.</p></h1>
        </div>
        </div>

        <div className='w-full flex justify-center mt-20'>
        <div className='flex gap-10 w-[80%]'>
          <h1 className='flex flex-col text-4xl font-bold text-[#2986FE] gap-3 text-center'>What We Do 
            <p className='text-black text-2xl font-normal text-start dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, cumque excepturi molestias totam alias veritatis, impedit sed possimus ipsamolestias totam alias veritatis, impedit sed possimus ipsa quas laborum pariatur! Neque ducimus sint odio, necessitatibus nemo officiis nam.</p>

          <p className='text-black text-2xl font-normal text-start dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsum perferendis sit eum repudiandae unde. Est nobis corporis possimus! Aperiam ab sed molestias totam alias veritatis, impedit sed possimus ipsa consectetur, obcaecati error doloribus quae soluta beatae quos.</p></h1>
          <img src="plain.jpeg" className='w-[1400px]' alt="" />
        </div>
        </div>
        
      </div>
      <Footers />
    </section>
    </>
  )
}

export default About