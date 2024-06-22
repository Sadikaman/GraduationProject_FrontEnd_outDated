import React from 'react';

const SlicedCard = () => {
  return (
    <div className="relative flex items-center justify-end p-4 bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs">
      <div className="absolute -right-20 -top-20 ">
        <img
          src="Landing.jpg"
          alt="Plane"
          className="w-64 rotate-[45deg]"
        />
      </div>
      <div className="relative z-10 flex flex-col items-start p-4 space-y-2 bg-white rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold">Know More</h3>
        <div className="flex space-x-2">
          <img
            src="telebirr.png"
            alt="Location 1"
            className="w-8 h-8 rounded-full object-cover"
          />
          <img
            src="path_to_image_2.jpg"
            alt="Location 2"
            className="w-8 h-8 rounded-full object-cover"
          />
          <img
            src="path_to_image_3.jpg"
            alt="Location 3"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold">Awesome Places</h4>
          <p className="text-sm text-gray-600">Discover The World One Adventure At A Time!</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-40 h-20 bg-white rotate-[20deg] transform translate-x-8 translate-y-4"></div>
    </div>
  );
};

export default SlicedCard;
