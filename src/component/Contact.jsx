import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import animationDataContact from '../lotties/contact.json';
import { IoMdMail } from 'react-icons/io';
import { Checkbox, Label, TextInput, Button } from 'flowbite-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSubmit = () => {
    alert('Message submitted');
    // You can perform additional actions here if needed
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_53om68h', 'template_54diqoq', form.current, {
        publicKey: '1Dd0VmHdRo7LmA3Bp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);

        },
      );
  };
  return (
    <>
      <div className='flex flex-col  pt-10  dark:bg-gray-900 dark:text-white gap-3 sm:pl-0 lg:pl-40' id='Contact'>
        <h1 className='flex gap-4 text-xl font-bold'><IoMdMail
          style={{ fontSize: "30px" }} /> Contact us</h1>
        <p className='text-lg pb-6'>contact us for more information, and get notified for update</p>
      </div>
      <section className='flex  flex-wrap justify-around dark:bg-gray-900 dark:text-white p-3'>

        <div >
          <form className='flex flex-col max-w-md mx-auto dark:bg-gray-900 dark:text-white' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className='id="small-input" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" name="user_name" />
            <label>Email</label>
            <input placeholder='example@gmail.com' className='id="small-input" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="email" name="user_email" />
            <label>Message</label>
            <textarea className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="message" />
            <div className='pt-2'>
              <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" value="Send" onClick={handleSubmit} />
            </div>
          </form>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              backgroundColor: darkMode ? "#111827" : "transparent",
            }}
          >
            <Lottie
              animationData={animationDataContact}
              play
              style={{
                display: "flex-wrap",
                top: 0,
                left: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
