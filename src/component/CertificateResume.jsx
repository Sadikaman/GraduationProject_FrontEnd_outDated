import React from 'react'
import Lottie from "react-lottie-player"
import animationDataContact from "../lotties/contact.json"
import { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import { IoMdMail } from "react-icons/io";
import { Checkbox, Label, TextInput, Button } from 'flowbite-react';
const CertificateResume = (isDarkMode, toggleDarkMode) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Use Tailwind dark mode utility classes on the body element
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleDownload = () => {
    // Specify the path to the file in the public folder
    const filePath = '/Resume.pdf'
    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the file path
    link.href = window.location.origin + filePath;

    // Set the download attribute to specify the default file name
    link.download = 'Resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body after the download
    document.body.removeChild(link);
  };
  'use client';
  return (
    <section className='flex justify-around pt-10 dark:bg-gray-900 dark:text-white' id='Education'>
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4">Certificate and Resume</h2>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
          <Carousel pauseOnHover >
            <a href="https://www.udemy.com/certificate/UC-2f09adf8-a5de-4774-a1db-f1817b06e54c" rel="noopener" target="_blank"><img src="./html-centificate.jpg" alt="..." /></a>
            <a href="https://www.udemy.com/certificate/UC-cc41111a-4fcc-4de5-a816-6f567a1ed1dd/" rel="noopener" target="_blank"><img src="./media-query.jpg" alt="..." /></a>
            <a href="https://www.udemy.com/certificate/UC-7ba85ace-d3b2-4bb5-9c88-e7d113683886/" rel="noopener" target="_blank"><img src="./js-centificate.jpg" alt="..." /></a>
            <a href="https://www.udemy.com/certificate/UC-27fe2727-1bb8-470d-930f-a98c520e8e54/" rel="noopener" target="_blank"><img src="./githup-centififcate.jpg" alt="..." /></a>
            <a href="https://www.udemy.com/certificate/UC-41cc12b2-ebd7-4ed5-89d8-38cf4eb99b41/" rel="noopener" target="_blank"><img src="./modernjs.jpg" alt="..." /></a>

          </Carousel>
        </div>

        <div className="flex space-x-4 pt-5">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificateResume;