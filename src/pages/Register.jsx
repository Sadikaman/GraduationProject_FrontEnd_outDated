import React, { useState } from "react";
import { Card, Label, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const countries = [
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+53', flag: '🇨🇺', name: 'Cuba' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
  { code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+95', flag: '🇲🇲', name: 'Myanmar' },
  { code: '+98', flag: '🇮🇷', name: 'Iran' },
  { code: '+211', flag: '🇸🇸', name: 'South Sudan' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: '+218', flag: '🇱🇾', name: 'Libya' },
  { code: '+220', flag: '🇬🇲', name: 'Gambia' },
  { code: '+221', flag: '🇸🇳', name: 'Senegal' },
  { code: '+222', flag: '🇲🇷', name: 'Mauritania' },
  { code: '+223', flag: '🇲🇱', name: 'Mali' },
  { code: '+224', flag: '🇬🇳', name: 'Guinea' },
  { code: '+225', flag: '🇨🇮', name: 'Ivory Coast' },
  { code: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
  { code: '+227', flag: '🇳🇪', name: 'Niger' },
  { code: '+228', flag: '🇹🇬', name: 'Togo' },
  { code: '+229', flag: '🇧🇯', name: 'Benin' },
  { code: '+230', flag: '🇲🇺', name: 'Mauritius' },
  { code: '+231', flag: '🇱🇷', name: 'Liberia' },
  { code: '+232', flag: '🇸🇱', name: 'Sierra Leone' },
  { code: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+235', flag: '🇹🇩', name: 'Chad' },
  { code: '+236', flag: '🇨🇫', name: 'Central African Republic' },
  { code: '+237', flag: '🇨🇲', name: 'Cameroon' },
  { code: '+238', flag: '🇨🇻', name: 'Cape Verde' },
  { code: '+239', flag: '🇸🇹', name: 'São Tomé and Príncipe' },
  { code: '+240', flag: '🇬🇶', name: 'Equatorial Guinea' },
  { code: '+241', flag: '🇬🇦', name: 'Gabon' },
  { code: '+242', flag: '🇨🇬', name: 'Congo' },
  { code: '+243', flag: '🇨🇩', name: 'Democratic Republic of the Congo' },
  { code: '+244', flag: '🇦🇴', name: 'Angola' },
  { code: '+245', flag: '🇬🇼', name: 'Guinea-Bissau' },
  { code: '+246', flag: '🇮🇴', name: 'British Indian Ocean Territory' },
  { code: '+248', flag: '🇸🇨', name: 'Seychelles' },
  { code: '+249', flag: '🇸🇩', name: 'Sudan' },
  { code: '+250', flag: '🇷🇼', name: 'Rwanda' },
  { code: '+251', flag: '🇪🇹', name: 'Ethiopia' },
  { code: '+252', flag: '🇸🇴', name: 'Somalia' },
  { code: '+253', flag: '🇩🇯', name: 'Djibouti' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania' },
  { code: '+256', flag: '🇺🇬', name: 'Uganda' },
  { code: '+257', flag: '🇧🇮', name: 'Burundi' },
  { code: '+258', flag: '🇲🇿', name: 'Mozambique' },
  { code: '+260', flag: '🇿🇲', name: 'Zambia' },
  { code: '+261', flag: '🇲🇬', name: 'Madagascar' },
  { code: '+262', flag: '🇾🇹', name: 'Mayotte' },
  { code: '+263', flag: '🇿🇼', name: 'Zimbabwe' },
  { code: '+264', flag: '🇳🇦', name: 'Namibia' },
  { code: '+265', flag: '🇲🇼', name: 'Malawi' },
  { code: '+266', flag: '🇱🇸', name: 'Lesotho' },
  { code: '+267', flag: '🇧🇼', name: 'Botswana' },
  { code: '+268', flag: '🇸🇿', name: 'Eswatini' },
  { code: '+269', flag: '🇰🇲', name: 'Comoros' },
  { code: '+290', flag: '🇸🇭', name: 'Saint Helena' },
  { code: '+291', flag: '🇪🇷', name: 'Eritrea' },
  { code: '+297', flag: '🇦🇼', name: 'Aruba' },
  { code: '+298', flag: '🇫🇴', name: 'Faroe Islands' },
  { code: '+299', flag: '🇬🇱', name: 'Greenland' },
  { code: '+350', flag: '🇬🇮', name: 'Gibraltar' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: '+354', flag: '🇮🇸', name: 'Iceland' },
  { code: '+355', flag: '🇦🇱', name: 'Albania' },
  { code: '+356', flag: '🇲🇹', name: 'Malta' },
  { code: '+357', flag: '🇨🇾', name: 'Cyprus' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+370', flag: '🇱🇹', name: 'Lithuania' },
  { code: '+371', flag: '🇱🇻', name: 'Latvia' },
  { code: '+372', flag: '🇪🇪', name: 'Estonia' },
  { code: '+373', flag: '🇲🇩', name: 'Moldova' },
  { code: '+374', flag: '🇦🇲', name: 'Armenia' },
  { code: '+375', flag: '🇧🇾', name: 'Belarus' },
  { code: '+376', flag: '🇦🇩', name: 'Andorra' },
  { code: '+377', flag: '🇲🇨', name: 'Monaco' },
  { code: '+378', flag: '🇸🇲', name: 'San Marino' },
  { code: '+379', flag: '🇻🇦', name: 'Vatican City' },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+381', flag: '🇷🇸', name: 'Serbia' },
  { code: '+382', flag: '🇲🇪', name: 'Montenegro' },
  { code: '+383', flag: '🇽🇰', name: 'Kosovo' },
  { code: '+385', flag: '🇭🇷', name: 'Croatia' },
  { code: '+386', flag: '🇸🇮', name: 'Slovenia' },
  { code: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { code: '+389', flag: '🇲🇰', name: 'North Macedonia' },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+421', flag: '🇸🇰', name: 'Slovakia' },
  { code: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
  { code: '+500', flag: '🇫🇰', name: 'Falkland Islands' },
  { code: '+501', flag: '🇧🇿', name: 'Belize' },
  { code: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: '+503', flag: '🇸🇻', name: 'El Salvador' },
  { code: '+504', flag: '🇭🇳', name: 'Honduras' },
  { code: '+505', flag: '🇳🇮', name: 'Nicaragua' },
  { code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: '+507', flag: '🇵🇦', name: 'Panama' },
  { code: '+508', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
  { code: '+509', flag: '🇭🇹', name: 'Haiti' },
  { code: '+590', flag: '🇬🇵', name: 'Guadeloupe' },
  { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: '+592', flag: '🇬🇾', name: 'Guyana' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+594', flag: '🇬🇫', name: 'French Guiana' },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: '+596', flag: '🇲🇶', name: 'Martinique' },
  { code: '+597', flag: '🇸🇷', name: 'Suriname' },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: '+599', flag: '🇧🇶', name: 'Caribbean Netherlands' },
  { code: '+670', flag: '🇹🇱', name: 'Timor-Leste' },
  { code: '+672', flag: '🇳🇫', name: 'Norfolk Island' },
  { code: '+673', flag: '🇧🇳', name: 'Brunei' },
  { code: '+674', flag: '🇳🇷', name: 'Nauru' },
  { code: '+675', flag: '🇵🇬', name: 'Papua New Guinea' },
  { code: '+676', flag: '🇹🇴', name: 'Tonga' },
  { code: '+677', flag: '🇸🇧', name: 'Solomon Islands' },
  { code: '+678', flag: '🇻🇺', name: 'Vanuatu' },
  { code: '+679', flag: '🇫🇯', name: 'Fiji' },
  { code: '+680', flag: '🇵🇼', name: 'Palau' },
  { code: '+681', flag: '🇼🇫', name: 'Wallis and Futuna' },
  { code: '+682', flag: '🇨🇰', name: 'Cook Islands' },
  { code: '+683', flag: '🇳🇺', name: 'Niue' },
  { code: '+685', flag: '🇼🇸', name: 'Samoa' },
  { code: '+686', flag: '🇰🇮', name: 'Kiribati' },
  { code: '+687', flag: '🇳🇨', name: 'New Caledonia' },
  { code: '+688', flag: '🇹🇻', name: 'Tuvalu' },
  { code: '+689', flag: '🇵🇫', name: 'French Polynesia' },
  { code: '+690', flag: '🇹🇰', name: 'Tokelau' },
  { code: '+691', flag: '🇫🇲', name: 'Micronesia' },
  { code: '+692', flag: '🇲🇭', name: 'Marshall Islands' },
  { code: '+850', flag: '🇰🇵', name: 'North Korea' },
  { code: '+852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: '+853', flag: '🇲🇴', name: 'Macau' },
  { code: '+855', flag: '🇰🇭', name: 'Cambodia' },
  { code: '+856', flag: '🇱🇦', name: 'Laos' },
  { code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+886', flag: '🇹🇼', name: 'Taiwan' },
  { code: '+960', flag: '🇲🇻', name: 'Maldives' },
  { code: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: '+970', flag: '🇵🇸', name: 'Palestine' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+975', flag: '🇧🇹', name: 'Bhutan' },
  { code: '+976', flag: '🇲🇳', name: 'Mongolia' },
  { code: '+977', flag: '🇳🇵', name: 'Nepal' },
  { code: '+992', flag: '🇹🇯', name: 'Tajikistan' },
  { code: '+993', flag: '🇹🇲', name: 'Turkmenistan' },
  { code: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
  { code: '+995', flag: '🇬🇪', name: 'Georgia' },
  { code: '+996', flag: '🇰🇬', name: 'Kyrgyzstan' },
  { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },

  // Add more countries as needed
];
const Register = () => {
  
  const [showFormPart1, setShowFormPart1] = useState(true);
  const [showFormPart2, setShowFormPart2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleForwardClick = () => {
    setShowFormPart1(false);
    setShowFormPart2(true);
  };

  const handleBackwardClick = () => {
    setShowFormPart1(true);
    setShowFormPart2(false);
  }; 
  
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log(`Selected country:`, selectedOption);
    // You can perform any other actions with the selected option here
  };

  // Transforming countries array into options array with label and value properties
  const countryOptions = countries.map(country => ({
    value: country.code,
    label: `${country.name} ${country.flag}` // Displaying name and flag as a single string
  }));

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const handleSearchInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.code.toLowerCase().includes(searchQuery)
    );
    setFilteredCountries(filtered);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };
  

  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    <div className="font-kanit transition-colors flex justify-center w-full overflow-hidden  ">
      <div className="flex flex-col md:flex-row gap-16 w-[80%] ">
        <form className="flex flex-col py-3 px-6 w-full ">
        {showFormPart1 && (
         <>
          <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden ">
            <a href="/">
            <img
              src="/AfroLogo.png"
              alt="AfroLogo"
              className="object-cover absolute inset-0 m-auto"
            />
            </a>
          </div>
          <div className="pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold pt-2 md:pt-4 lg:pt-6">
            Sign Up
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-500 pt-2 md:pt-4 lg:pt-6">
            Enter your details below to create a new account and get started
          </p>

          </div>
          <div className="grid-cols-1 md:grid-cols-2 pt-2 flex flex-col  ">
            <div className="lg:flex-row flex  gap-2 sm:gap-1 md:gap-3 lg:gap-5 md:flex-col pt-2 flex-col">
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4 "
                  value="Full Name"
                />
                <input
                 required
                  type="text"
                  placeholder="Enter Your First Name"
                  className="rounded-md border-1  border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col w-full pt-1">
                <Label
               
                  className="text-md pb-4 font-semibold pt-4"
                  value="Email"
                />
                <input
                 required
                 placeholder="Example@gmail.com"
                  type="email"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
            </div>

            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="flex flex-col w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4"
                  value="Date of Birth"
                />
                <DatePicker
                 required
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select your date of birth"
                  className="rounded-md w-full border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray- dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              {/* <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-3"
                  value="Phone Number"
                />
                <input
                  type="password"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div> */}
              
     <div className="flex items-center w-full relative  ">
      <div className="flex flex-col gap-7 flex-wrap">
        <label htmlFor="phoneInput" className="font-bold text-xl">
          Phone Number
        </label>
        <button
          id="dropdown-phone-button"
          onClick={toggleDropdown}
          type="button"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        >
          <span className="mr-2">{selectedCountry.flag}</span>
          {selectedCountry.code}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
      {dropdownVisible && (
        <div
          id="dropdown-phone"
          className="absolute mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 max-h-48 overflow-y-auto"
        >
          <input
            type="text"
            required
            placeholder="Search..."
            className="p-2 border-bflex-wrap border-gray-200 dark:border-gray-600"
            onChange={handleSearchInputChange}
          />
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {filteredCountries.map((country) => (
              <li key={country.code}>
                <button
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="mr-2">{country.flag}{country.name}</span>
                  {country.code}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="tel"
        required
        id="phoneInput"
        className="rounded-none mt-14 rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="123-456-7890"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
    </div> 
   </div>
  </>
          )}
          <div className="lg:block">
            {showFormPart2 && (
                <>
  <div className="flex gap-5 flex-col lg:flex-row">
      <div className="flex flex-col w-full">
          <label className="text-md pb-4 font-semibold pt-4">Nationality</label>
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            isSearchable
            placeholder="Search or select a country"
            styles={{
              control: provided => ({
                ...provided,
                border: '1px solid #CBD5E0'
              })
            }}
            theme={theme => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary: '#3182CE'
              }
            })}
          />
        </div>
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-3"
                  value="Gender"
                />
                <div className="relative">
                  <select
                   required
                    value={gender}
                    onChange={handleGenderChange}
                    className="rounded-md border-1 border-gray-200 w-full bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200 appearance-none"
                  >
                   
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 18a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full">
              <Label
                className="text-md pb-4 font-semibold pt-4"
                value="Password"
              />
              <input
                required
                placeholder="**********"
                type="password"
                className="rounded-md border border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <Label
                className="text-md pb-4 font-semibold pt-3"
                value="Confirm Password"
              />
              <input
                required
                placeholder="********"
                type="password"
                className="rounded-md border border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
              />
            </div>
          </div>


            <div className="mt-4">
              <input
                type="checkbox"
                className="mr-2 "
                id="termsCheckbox dark:bg-gray-900 dark:text-white shadow-lg "
             
              />
              <label htmlFor="termsCheckbox">
                By creating an account, I agree to the{" "}
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
              <input id=""  className="rounded-md bg-gray-100 p-2 text-[#101010]" name="cancel" type="reset" size="md"  />
              <input className="rounded-md bg-[#101010] text-[#ffffff] p-2" type="submit"  size="md" name=" Register"   />
               
            <a href="/DiscoverPlaces">this Link must be changed to Register to make to Tour</a>
            </div>

            <p className="mt-4 flex justify-center gap-2 text-gray-500 text-md ">
              Already have an account?{" "}
              <a href="/login" className=" hover:underline text-black font-medium">
                Login
              </a>
            </p>
            
            </> 
            
)}
</div>
        <div className="pt-4">
            <Button
              className="button lg:hidden"
              onClick={showFormPart1 ? handleForwardClick : handleBackwardClick}
            >
              {showFormPart1 ? "Continue" : "Back"}
            </Button>
          </div>


            <div className="flex justify-center items-center flex-col gap-1 p-4">
              {/* Horizontal line and "OR" separator */}
              <div className="flex flex-row items-center gap-2 w-full">
                <div className="w-full sm:w-44 border-b-2 border-black dark:border-white"></div>
                <span className="text-md font-medium text-center w-full sm:w-auto">OR</span>
                <div className="w-full sm:w-44 border-b-2 border-black dark:border-white"></div>
              </div>


              {/* Google Sign-in Button */}
              <Button
                pill
                className="flex flex-row rounded-md w-full sm:w-[600px] mt-4 bg-gray-200 dark:bg-gray-700"
              >
                <FcGoogle className="text-xl mr-8" />
                Continue With Google
              </Button>
            </div>

         
        
        </form>
      </div>
    </div>
  );
};

export default Register;
