// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { GoTriangleUp } from "react-icons/go";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerScroll = 300; // Adjust this value based on when you want the button to appear
            setIsVisible(scrollY > triggerScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-6 right-6 bg-gray-700 flex text-white w-12 h-12 justify-center items-center rounded-full focus:outline-none`}
            onClick={scrollToTop}
        >
            <GoTriangleUp className='text-xl'/>
        </button>
    );
};

export default ScrollToTopButton;
