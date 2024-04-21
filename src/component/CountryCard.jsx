import React from 'react';
import { FaWifi, FaCloudMoonRain, FaDollarSign, FaSignal, FaHeart, FaShieldAlt } from "react-icons/fa";

const countryData = [
  {
    countryName: "United States",
    weather: "Sunny",
    costOfLiving: "$2000/month",
    internetSpeed: "96 Mbps",
    downtown: "New York",
    pricing: "2400$",
    overall: 80,
    cost: 70,
    internet: 90,
    liked: 85,
    safety: 75,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thailand",
    weather: "Hot",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "1400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },

  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "land",
    weather: "col",
    costOfLiving: "$11000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "14050$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  {
    countryName: "Thai",
    weather: "Ho",
    costOfLiving: "$1000/month",
    internetSpeed: "50 Mbps",
    downtown: "Bangkok",
    pricing: "15400$",
    overall: 85,
    cost: 65,
    internet: 80,
    liked: 90,
    safety: 70,
    imageUrl: "https://absoluteethiopia.com/wp-content/uploads/2018/06/e213534406f5e673030b12a49a117407_XL.jpg", // Replace with actual image URL
  },
  // Add more country data objects as needed
];

const CountryCard = () => {
   
  return (
    <div className="container flex flex-row flex-wrap mx-auto p-4  gap-4 dark:bg-gray-900 dark:text-white">
      {countryData.map((country, index) => (
        <div key={index} className="relative bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md shadow-gray-500 dark:shadow-cyan-500" style={{ width: '300px', height: '300px' }}>
          <div className="group h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ">
              <div className="flex flex-col justify-around h-full ">
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Overall</span>
                    <div className="flex items-center">
                      <FaHeart className="text-green-500 mr-3" />
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${country.overall}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Cost</span>
                    <div className="flex items-center">
                      <FaDollarSign className="text-green-500 mr-2" />
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${country.cost}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Internet</span>
                    <div className="flex items-center">
                      <FaSignal className="text-green-500 mr-2" />
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${country.internet}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Liked</span>
                    <div className="flex items-center">
                      <FaHeart className="text-green-500 mr-2" />
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${country.liked}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Safety</span>
                    <div className="flex items-center">
                      <FaShieldAlt className="text-green-500 mr-2" />
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${country.safety}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${country.imageUrl})` }}></div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex justify-center items-center mr-2">
                    <span><FaWifi /></span>
                  </div>
                  <span>{country.internetSpeed}</span>
                </div>
                <span className="text-gray-600">Card {index + 1}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{country.countryName}</h2>
              <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">Weather:</span>
                <span>{country.weather}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">Cost of Living:</span>
                <span>{country.costOfLiving}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Internet Speed:</span>
                <span>{country.internetSpeed}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">Downtown:</span>
                <span>{country.downtown}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Pricing:</span>
                <span>{country.pricing}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
