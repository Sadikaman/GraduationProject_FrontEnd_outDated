import React from 'react'
import Sidebars from '../component/Sidebars'
function Community() {
  return (
    <div className='flex gap-10 p-5'>
      < Sidebars />
      <div className='h-screen bg-gray-100 rounded-xl border-2 border-black w-full p-5'>
<h1>The Afro Community </h1>
<div className='border-2 border-black bg-gray-300 rounded-xl w-[100%] h-[50%]'></div>

      </div>
      <div className='h-screen bg-slate-200 rounded-xl border-2 border-black w-[40%] '></div>
    </div>
  )
}

export default Community
