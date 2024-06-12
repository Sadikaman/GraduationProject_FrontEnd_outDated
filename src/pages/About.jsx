import React from 'react'
import Nav from '../component/Nav'
function About() {
  return (
    <>
    <section className='flex  flex-col'>
        <Nav />
        <div className='flex justify-center'>
<div className='bg-cover bg-no-repeat flex  justify-center items-center  w-[1000px] ' style={{backgroundImage:"url('ethiopiaAbout.jpeg')"}}>
   <p className='pt-20 pb-20'>About us </p>
</div>
</div>
    </section>
    </>
  )
}

export default About