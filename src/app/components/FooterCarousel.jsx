// components/FooterCarousel.js
"use client"

import React, { useRef, useEffect } from 'react';

const FooterCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 2000); // Adjust the time interval (2000ms = 2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-green-200 py-4">
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
      >
        &#10094;
      </button>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide space-x-10 px-4"
      >
        {/* Image cards */}
        <img
          src="https://th.bing.com/th/id/OIP.rGNcVOIBWYG9yX4GSNktyAHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 1"
        />
        <img
          src="https://th.bing.com/th/id/OIP.HmJNGvs3BTA7yntFAAHf1QHaD8?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 2"
        />
        <img
          src="https://th.bing.com/th/id/OIP.OEMILrxV5iuaJPnXZby6uQHaEA?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 3"
        />
        <img
          src="https://th.bing.com/th/id/OIP.Tm1BlnnI5RC53twpguCtugAAAA?w=295&h=69&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 4"
        />
        <img
          src="data:image/jpeg;base64,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"
          className="w-48 h-32 object-contain"
          alt="Logo 5"
        />
       <img
          src="https://th.bing.com/th/id/OIP.rGNcVOIBWYG9yX4GSNktyAHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 1"
        />
        <img
          src="https://th.bing.com/th/id/OIP.HmJNGvs3BTA7yntFAAHf1QHaD8?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 2"
        />
        <img
          src="https://th.bing.com/th/id/OIP.OEMILrxV5iuaJPnXZby6uQHaEA?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 3"
        />
        <img
          src="https://th.bing.com/th/id/OIP.Tm1BlnnI5RC53twpguCtugAAAA?w=295&h=69&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="w-48 h-32 object-contain"
          alt="Logo 4"
        />
        <img
          src="data:image/jpeg;base64,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"
          className="w-48 h-32 object-contain"
          alt="Logo 5"
        />
      </div>

{/* Right arrow */}
<button
  onClick={scrollRight}
  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
>
  &#10095;
</button>
</div>
);
};

export default FooterCarousel;
