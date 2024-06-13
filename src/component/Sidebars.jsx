import React from 'react'
import { Card,Dropdown,Sidebar } from "flowbite-react";
import { FaCalendarDays} from "react-icons/fa6";
import { FaUsers ,FaArrowAltCircleLeft } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { CiLogout,CiSettings } from "react-icons/ci";
function Sidebars() {
  return (
    <>
      <Sidebar className='h-screen' aria-label="Sidebar with logo branding example">
     
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-96'>
          <div className='flex flex-col gap-10'>
          <Sidebar.Item href="#">
          <FaArrowAltCircleLeft className='bg-white rounded-full text-blue-500 text-4xl'/>
          </Sidebar.Item>
          <Sidebar.Item href="/Calender" >
          <FaCalendarDays className='text-blue-500 text-4xl'/>
          </Sidebar.Item>
          <Sidebar.Item href="#">
          <LiaMapMarkedAltSolid className='bg-white rounded-full text-blue-500 text-4xl'/>
          </Sidebar.Item>
          <Sidebar.Item href="/Community">
          <FaUsers className='text-blue-500 text-4xl'/>
          </Sidebar.Item>
          <Sidebar.Item href="#">
          <MdOutlineSupportAgent className='text-blue-500 text-4xl'/>
          </Sidebar.Item>
          <Sidebar.Item href="./PaymentHistory">
          <CiSettings className='text-blue-500 text-4xl'/>
          </Sidebar.Item>
          </div>

         <div className=''>
          <Sidebar.Item href="#">
          <CiLogout className='bg-white rounded-full text-blue-500 text-4xl'/>
          </Sidebar.Item>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  )
}

export default Sidebars
