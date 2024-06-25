import React, { useRef } from 'react';
import { Card } from "flowbite-react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const CardContainer = () => {
  const cardsData = [
    { id: 1, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/lalibala.jpg" },
    { id: 2, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/harar.jpg" },
    { id: 3, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/aksum.jpg" },
    { id: 4, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/afar.jpg" },
    { id: 5, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 6, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/sameMountain.jpg" },
    { id: 7, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 8, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/south-Omo-Vally.jpg" },
    { id: 9, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 10, name:"Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" }
  ];

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='flex justify-center'>
      <div className="dark:bg-gray-900 dark:text-white p-5 w-[80%]">
        <div className='flex justify-between items-center flex-wrap'>
          <div className='pt-10'>
            <h1 className='text-3xl pt-2 font-bold'>Popular Destinations</h1>
            <p className='text-md pt-2 text-gray-500'>Unleash Your Wanderlust With Sky Wings</p>
          </div>
          <div className="mt-4 flex">
            <button className="font-bold py-2 px-4 rounded-l" onClick={previous}>
              <FaChevronCircleLeft style={{ fontSize: "40px" }} />
            </button>
            <button className="font-bold py-2 px-4 rounded-r" onClick={next}>
              <FaChevronCircleRight style={{ fontSize: "40px" }} />
            </button>
          </div>
        </div>
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardsData.map((card) => (
            <div key={card.id} className="p-4 flex flex-col items-center">
              <div className="w-full flex flex-col gap-3">
                <img className="rounded-3xl object-cover w-full h-48 md:h-64 lg:h-72 xl:h-80" src={card.imageSrc} alt={`Image of ${card.name}`} />
                <div className='flex justify-between items-center'>
                  <a href="#">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {card.name}
                    </h1>
                  </a>
                  <div className="bg-blue-500 w-16 p-1 rounded-full flex items-center justify-center">
                    <span className="text-white"><CiStar style={{ color: "white" }} /></span>
                    <span className="text-white ml-2">{card.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-bold text-gray-500 dark:text-white flex items-center gap-2">
                    <IoLocationSharp />{card.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CardContainer;
