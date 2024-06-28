import { Button, Card, TextInput, Label } from 'flowbite-react';
import { CgProfile } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdDateRange, MdOutlineSupportAgent } from "react-icons/md";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaCalendarDays } from "react-icons/fa6";
import { FaXTwitter, FaYoutube, FaLinkedin, FaFacebook, FaPinterest, FaSquareInstagram } from "react-icons/fa6";
import React, { useState } from 'react';
import { EmojiHappyIcon, MicrophoneIcon, CameraIcon, PaperClipIcon } from '@heroicons/react/outline';
import { DarkModeProvider } from '../component/DarkModeProvider';
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
    <DarkModeProvider>
      <div className='flex flex-col dark:bg-gray-900 min-h-screen'>
        <div className='flex justify-between w-full md:w-[85%] pt-3 mx-auto px-4'>
          <a href="/">
            <img 
              className='w-24 md:w-32'
              src="AfroLogo.png" 
              alt="AfroLogo" 
            />
          </a>
          <h1 className='text-xl md:text-2xl font-medium pt-4'>Contact Provider</h1>
        </div>
        <div className='flex justify-end w-full pr-4 md:pr-10 mt-2 md:mt-0'>
          <Button color="dark" className='w-32 md:w-44'>Cancel Trip</Button>
        </div>
        <section className='flex flex-col md:flex-row p-4 gap-4 md:gap-20 justify-center items-start'>
          <div className='flex flex-col gap-4 w-full md:w-auto'>
            <div className='bg-gray-100 w-full md:w-[650px] rounded-2xl h-auto md:h-24 p-4'>
              <form className="flex flex-col md:flex-row gap-4 p-2">
                <div className='w-full md:w-auto'>
                  <div className="mb-2 block">
                    <Label htmlFor="name1" value="Full name" />
                  </div>
                  <TextInput
                    className='border border-black rounded-lg w-full md:w-auto'
                    id="name1"
                    type="text"
                    required />
                </div>
                <div className='w-full md:w-auto'>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Email" />
                  </div>
                  <TextInput
                    className='border border-black rounded-lg w-full md:w-auto'
                    id="email1"
                    type="email"
                    placeholder="example@gmail.com"
                    required />
                </div>
              </form>
            </div>

            <div className='bg-gray-100 w-full md:w-[650px] rounded-2xl p-4'>
              <h1 className='w-full border-b text-xl text-blue-600 p-3'>BOOKING DETAILS</h1>
              <div className='flex flex-col md:flex-row justify-between mt-5'>
                <div className='flex-1'>
                  <p className='text-xl md:text-4xl font-medium mb-2 md:mb-4'>One way</p>
                  <p className='text-lg md:text-xl text-gray-400 mb-2'>Location</p>
                  <p className='text-lg md:text-4xl font-medium mb-2 md:mb-4'>Gonder</p>
                </div>
                <div className='flex-1 md:flex-none'>
                  <img className='w-full md:w-80' src="aksum.jpg" alt="Aksum" />
                </div>
              </div>
              <div className='flex flex-col mt-4 gap-4'>
                <p className='text-lg md:text-xl text-gray-400'>Tour Interval</p>
                <p className='text-lg md:text-xl font-medium flex gap-2 md:gap-8 items-center mt-2 border-b pb-2'>
                  <FaCalendarDays className='text-blue-500' />
                  Monday, Jun 10 2024
                  <span className='text-gray-300'>To</span>
                  Wednesday, Jun 12 2024
                </p>
              </div>
              <div className='flex flex-col gap-4 mt-4 p-4 border-b'>
                <p className='text-gray-500'>Accommodation By (ABC Travel Provider)</p>
                <div className='flex gap-4 md:gap-5 items-center'>
                  <img className='w-24 md:w-28' src="afar.jpg" alt="Afar" />
                  <div className='flex flex-col gap-2'>
                    <p className='flex gap-2 items-center text-lg md:text-xl font-medium'>
                      <MdOutlineSupportAgent className='text-blue-500 text-2xl md:text-4xl' />
                      Gondar Hills Plaza Hotel
                    </p>
                    <p className='flex gap-2 items-center'>
                      <LiaMapMarkedAltSolid className='bg-white rounded-full text-blue-500 text-2xl md:text-4xl' />
                      6 persons
                    </p>
                  </div>
                </div>
              </div>
              <p className='text-gray-400 p-2'>Include</p>
            </div>
          </div>

          <form className='flex flex-col gap-4 w-full md:w-auto'>
            <div className='border bg-gray-100 rounded-2xl p-4'>
              <h1 className='w-full border-b text-xl text-[#2986FE] p-3'>PAYMENT DETAILS</h1>
              <div className='flex justify-between p-4'>
                <p className='font-medium'>PAYROLL AMOUNT</p>
                <p className='text-2xl text-[#2986FE]'>ETB 1000</p>
              </div>
              <div className='flex flex-col pl-4 gap-3'>
                <div className='flex items-center'>
                  <input
                    type="checkbox"
                    className='rounded-full text-[#101010]'
                    checked={isPartialPayment}
                    onChange={() => setIsPartialPayment(true)}
                  />
                  <label className='text-lg md:text-xl font-medium ml-2'>Partial payment</label>
                </div>
                <p className='text-gray-400 ml-6'>
                  Pay ETB 500 for confirmation now and pay <br /> the remaining later
                </p>
                <div className='flex items-center'>
                  <input
                    type="checkbox"
                    className='rounded-full text-[#101010]'
                    checked={!isPartialPayment}
                    onChange={() => setIsPartialPayment(false)}
                  />
                  <label className='text-lg md:text-xl font-medium ml-2'>Full payment</label>
                </div>
                <p className='text-gray-400 ml-6'>
                  Pay the entire fare now and start your <br /> journey right away
                </p>
              </div>
            </div>

            <div className='bg-gray-100 rounded-2xl p-4'>
              <h1 className='w-full border-b text-xl text-[#2986FE] p-3'>PAYMENT OPTION</h1>
              <div className='p-4 flex flex-col gap-4'>
                {isInEthiopia ? (
                  <div className='flex flex-wrap justify-center gap-4 md:gap-20'>
                    <button
                      type='button'
                      className={`py-2 px-4 rounded bg-white ${paymentOption === 'telebirr' ? 'bg-blue-700' : ''}`}
                      onClick={() => handlePaymentChoice('telebirr')}
                    >
                      <img src="telebirr.png" className='w-12 md:w-16' alt="telebirr" />
                    </button>
                    <button
                      type='button'
                      className={`py-2 px-4 rounded bg-white ${paymentOption === 'chapa' ? 'bg-blue-700' : ''}`}
                      onClick={() => handlePaymentChoice('chapa')}
                    >
                      <img src="chapa.png" className='w-12 md:w-16' alt="chapa" />
                    </button>
                  </div>
                ) : (
                  <div className='flex flex-wrap justify-center gap-4 md:gap-20'>
                    <button
                      type='button'
                      className={`py-2 px-4 rounded bg-white ${paymentOption === 'paypal' ? 'bg-blue-700' : ''}`}
                      onClick={() => handlePaymentChoice('paypal')}
                    >
                      <img src="paypal.png" className='w-12 md:w-16' alt="paypal" />
                    </button>
                    <button
                      type='button'
                      className={`py-2 px-4 rounded bg-white ${paymentOption === 'stripe' ? 'bg-blue-700' : ''}`}
                      onClick={() => handlePaymentChoice('stripe')}
                    >
                      <img src="stripe.png" className='w-12 md:w-16' alt="stripe" />
                    </button>
                  </div>
                )}

                {paymentOption === 'telebirr' && (
                  <div className='flex justify-center items-center'>
                    {/* Ezra is gay */}
                  </div>
                )}

                {paymentOption === 'chapa' && (
                  <div className='flex flex-col gap-3'>
                    {/* Ezra is gay */}
                  </div>
                )}

                {paymentOption === 'paypal' && (
                  <div className='flex flex-col gap-3'>
                    {/* Ezra is gay */}
                  </div>
                )}

                {paymentOption === 'stripe' && (
                  <div className='flex flex-col gap-3'>
                    {/* Ezra is gay */}
                  </div>
                )}
              </div>
            </div>
          </form>
        </section>
      </div>
    </DarkModeProvider>
    </>
  );
}

export default Pricing;
