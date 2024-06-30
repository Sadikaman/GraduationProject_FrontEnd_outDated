// src/PhoneInputForm.js
import React, { useState,useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { DarkModeProvider } from './DarkModeProvider';
const PhoneInputForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Name:', name);
    console.log('Phone:', phone);
  };

  const [theme, setTheme] = useState("Light");
  // Initialize dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  return (
    <DarkModeProvider>
    <div className="mt-2 w-full">
      <label htmlFor="phone" className="block dark:text-[#ffffff] text-gray-700 font-semibold mb-2">
        Phone Number
      </label>
      
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
          
        }}

        inputStyle={{
            backgroundColor: darkMode ? "#374151" : "#ffffff",
            color: darkMode ? "white" : " black", // Adjust background color for dark and light modes
          width: "100%",
        
        //   padding: "0.75rem", // Adjust padding as needed
        }}
        
        containerStyle={{
            backgroundColor: darkMode ? "#1a202c" : "#ffffff",
            color: darkMode ? "white" : " #374151", // Ad

        }}
        dropdownStyle={{

            backgroundColor: darkMode ? "#1a202c" : "#ffffff",
            color: darkMode ? "#374151" : " black",
           
            
             // Ad
        }}
    

       
      />
     
    </div>
    </DarkModeProvider>
  );
};

export default PhoneInputForm;
