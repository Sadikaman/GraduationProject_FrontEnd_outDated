import React, { useRef } from 'react';
import { Card } from "flowbite-react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
const CardContainer = () => {
  
  // Array of card data
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
    { id: 10, name: "Lalibela", rating: 4.5, price: 599, imageSrc: "/images.jpeg" }
    
    // Add more card data objects as needed
  ];

  const sliderRef = useRef(null);

  // Function to handle next button click
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to handle previous button click
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="pl-40">
      <div className='flex justify-between'>
      <div className='pt-10 '>
      <h1 className='text-2xl pt-2 font-extrabold'>Popular Destinations</h1>
      <p className='text-md pt-2'>Unleash Your Wanderlust With Sky Wings</p>
      </div>
      <div className="mt-4 pr-40 ">
        <button className="  font-bold py-2 px-4 rounded-l" onClick={previous}>
        <FaChevronCircleLeft  style={{fontSize:"40px"}}/>
        </button>
        <button className="  font-bold py-2 px-4 rounded-r" onClick={next}>
        <FaChevronCircleRight style={{fontSize:"40px"}}/>
        </button>
      </div>
      </div>
      <Slider {...sliderSettings} ref={sliderRef}>
        {cardsData.map((card) => (
          <div key={card.id} className="p-4">
            <Card className="max-w-sm" imgAlt={`Image of ${card.name}`} imgSrc={card.imageSrc}>
              <div className='flex justify-between'>
                <a href="#">
                  <h1 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
                    {card.name}
                  </h1>
                </a>
                <div className="bg-blue-500 w-16 p-1 rounded-full flex items-center justify-center">
                  <span className="text-white"><CiStar style={{ color: "white" }} /></span>
                  <span className="text-white ml-2">{card.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${card.price}</span>
                <a
                  href="#"
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add to cart
                </a>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

export default CardContainer;
