import { Button,Card,TextInput,Label } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdDateRange ,MdOutlineSupportAgent} from "react-icons/md";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaCalendarDays} from "react-icons/fa6";
import { FaXTwitter,FaYoutube,FaLinkedin,FaFacebook,FaPinterest,FaSquareInstagram } from "react-icons/fa6";
import React, { useState } from 'react';
import { EmojiHappyIcon, MicrophoneIcon, CameraIcon, PaperClipIcon } from '@heroicons/react/outline';


  const Pricing = () => {
    

    const [isPartialPayment, setIsPartialPayment] = useState(false);
    const [paymentOption, setPaymentOption] = useState(null);
  
    // Replace this with actual location detection logic
    const isInEthiopia = true; // Mock location check
  
    const handlePaymentChoice = (choice) => {
      setPaymentOption(choice);
    };

    const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Implement your send message logic here
    console.log('Sending message:', message);
    setMessage('');
  };
    const cardsData = [
      { id: 1, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 2, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 3, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 4, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 5, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 6, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 7, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 8, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 9, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      { id: 10, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" },
      // Add more card data objects as needed
    ];

  return (
    <>
    <div className='flex flex-col dark:bg-gray-900  '>
    <div className='flex justify-between w-[85%] pt-3'>
        <a href="/">
        <img 
        className='w-32'
        src="AfroLogo.png" 
        alt="" 
        />
        </a>
        <h1 className='text-2xl font-medium  pt-4'>Contact Provider</h1>
    </div>
    <div  className='flex justify-end w-full pr-10'>
    <Button color="dark" className='w-44 flex '>Cancel Trip</Button>
    </div>
<section className=' flex p-4  gap-20 justify-center'>
    <div className='flex flex-col  gap-4'>
        
    <div className='bg-gray-100 w-[650px] rounded-2xl h-24'>
        <form className="flex max-w-md  gap-4 p-2">
           
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name1" value="Full name" />
                </div>
                <TextInput
                className='border border-black rounded-lg'
                 id="name1" 
                 type="text"
                  required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                className='border border-black rounded-lg'
                 id="email1"
                  type="email"
                   placeholder="example@gmail.com"
                    required />
            </div>
        </form>
    </div>


        <div className='h-[700px] bg-gray-100 rounded-2xl'>
          <h1 className='w-full border-b text-xl text-blue-600 p-3'>BOOKING DETAILS</h1>
          <div className='flex justify-center gap-40 mt-5'>
            <div>
            <p className='flex flex-col text-4xl font-medium gap-4 '>one way <span className='text-xl text-gray-400'>Location</span> Gonder</p>
            </div>
            <div>
              <img className='w-80' src="aksum.jpg" alt="" />
            </div>

           
          </div>
                      {/* tour interval */}
          <div className='flex flex-col mt-4 gap-4' >
              <p className='text-xl text-gray-400'>Tour Interval</p>
              <p className='text-xl font-medium gap-8 flex mt-2 border-b pb-2'><FaCalendarDays className='text-blue-500 text-xl'/>Monday, Jun 10 2024<span className='text-gray-300'>To</span>Wednesday, Jun 12 2024</p>

            </div>
{/* //////////////// */}
            <div className='flex flex-col gap-5 mt-4 p-4 border-b'>
              <p className='text-gray-500'>Accommodation By (ABC  Travel Provider) </p>

              <div className='flex gap-5'>
             <img className='w-28' src="afar.jpg" alt="" />
              <div className='gap-4'>
              <p className='flex gap-2 text-xl font-medium'> <MdOutlineSupportAgent className='text-blue-500 text-4xl'/>Gondar Hills Plaza Hotel </p>
              <p className='flex gap-2 '> <LiaMapMarkedAltSolid className='bg-white rounded-full text-blue-500 text-4xl'/>6 persons </p>
              </div>
            </div>
            </div>
            <p className='text-gray-400 p-2'>include</p>
          </div>



    </div>
    {/* /////////////////// */}
    <form className='flex flex-col  gap-4'>
      <div className='border bg-gray-100 h-[400px] w-full rounded-2xl'>
        <h1 className='w-full border-b text-xl text-[#2986FE] p-3'>PAYMENT DETAILS</h1>
        <div className='flex justify-between p-4'>
          <p className='font-medium'>PAYROLL AMOUNT</p>
          <p className='text-2xl text-[#2986FE]'>ETB 1000</p>
        </div>

        <div className='flex flex-col pl-16 gap-3'>
          <div>
            <input
              type="checkbox"
              className='rounded-full text-[#101010]'
              checked={isPartialPayment}
              onChange={() => setIsPartialPayment(true)}
            /> 
            <label className='text-xl font-medium'>Partial payment</label>
          </div>
          <p className='text-gray-400 ml-10'>
            Pay ETB 500 for confirmation now and pay <br /> the remaining later
          </p>
          <div>
            <input
              type="checkbox"
              className='rounded-full text-[#101010]'
              checked={!isPartialPayment}
              onChange={() => setIsPartialPayment(false)}
            /> 
            <label className='text-xl font-medium'>Full payment</label>
          </div>
          <p className='text-gray-400 ml-10'>
            Pay the entire fare now and start your <br /> journey right away
          </p>
        </div>
      </div>

      <div className='h-[400px] bg-gray-100 w-[800px] rounded-2xl'>
        <h1 className='w-full border-b text-xl text-[#2986FE] p-3'>PAYMENT OPTION</h1>
        <div className='p-4 flex flex-col gap-4'>
          {isInEthiopia ? (
            <div className='flex justify-center gap-20'>
              <button
                type='button'
                className={`  py-2 px-4 rounded bg-white ${paymentOption === 'telebirr' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentChoice('telebirr')}
              >
                <img src="telebirr.png" className='w-16' alt="" />
              </button>
              <button
                type='button'
                className={` py-2 px-4 rounded bg-white ${paymentOption === 'chapa' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentChoice('chapa')}
              >
                <img src="chapa.png" className='w-16' alt="" />
              </button>
            </div>
          ) : (
            <div className='flex gap-20 justify-center'>
              <button
                type='button'
                className={`bg-white py-2 px-4 rounded ${paymentOption === 'paypal' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentChoice('paypal')}
              >
                 <img src="paypal.png" className='w-16' alt="" />
              </button>
              <button
                type='button'
                className={`bg-white py-2 px-4 rounded ${paymentOption === 'stripe' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentChoice('stripe')}
              >
                <img src="stripe.png" className='w-16' alt="" />
              </button>
            </div>
          )}



          
{/* ezra part */}
          {paymentOption === 'telebirr' && (
            <div className='flex justify-center items-center'>
              {/* ezra is gay  */}
            </div>
          )}

          {paymentOption === 'chapa' && (
            <div className='flex flex-col gap-3 pl-40 pr-40'>
            {/* Ezra is gay  */}
          </div>
          )}

          {paymentOption === 'paypal' && (
            <div className='flex flex-col gap-3 pl-40 pr-40'>
             {/* Ezra is gay  */}
            </div>


          )}

{paymentOption === 'stripe' && (
            <div className='flex flex-col gap-3 pl-40 pr-40'>
             {/* ezra is gay  */}
            </div>
            

          )}
        </div>
      </div>
    </form>

</section>










    </div>
    </>
  )
}

export default Pricing
