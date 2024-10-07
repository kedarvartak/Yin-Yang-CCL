import React, { useState, useEffect } from "react";
import khs from "../components/assets/khs.png";
import kpit from "../components/assets/kpit.png";
import kirloskar from "../components/assets/kirloskar solar.png";
import nie from "../components/assets/nie news paper.png";
import wordsmith from "../components/assets/wordsmith language solution.png";
import med from "../components/assets/University of Kansas Medical Center.png";
import vedanta from "../components/assets/vedanta limited.png";
import belrise from "../components/assets/BELRISE INDUSTRIES LIMITED.png";
import hyosung from "../components/assets/Hyosung T&D INDIA Pvt. Ltd..png";
import tsl from "../components/assets/TSL Consulting.png";

// Placeholder Component for each Associate
const AssociatePlaceholder = ({ placeholder }) => {
  return (
    <div className="flex justify-center items-center w-full rounded-lg h-60 border border-gray-300 bg-gray-100 p-4">
      <img
        src={placeholder}
        alt="Associate Placeholder"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// Main Component for the Associates Carousel
const Associates = () => {
  // Array of all associate images
  const associates = [
    khs,
    kpit,
    kirloskar,
    nie,
    wordsmith,
    med,
    vedanta,
    belrise,
    hyosung,
    tsl,
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to track images per slide based on screen size
  const [imagesPerSlide, setImagesPerSlide] = useState(getImagesPerSlide());

  // Function to determine images per slide based on window width
  function getImagesPerSlide() {
    const width = window.innerWidth;
    if (width >= 1024) return 4; // Desktop: 4 images per slide
    if (width >= 768) return 2;  // Tablet: 2 images per slide
    return 1;                    // Mobile: 1 image per slide
  }

  // Update imagesPerSlide on window resize
  useEffect(() => {
    const handleResize = () => {
      setImagesPerSlide(getImagesPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total number of slides
  const totalSlides = Math.ceil(associates.length / imagesPerSlide);

  // Auto-play functionality: change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [totalSlides]);

  // Handle Next Slide manually
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Handle Previous Slide manually
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Calculate the translateX value based on the current slide
  const translateX = () => {
    return -(currentSlide * 100);
  };

  return (
    <div className="font-['Playfair_Display'] py-12">
      {/* Section Title */}
      <h2 className="text-5xl lg:text-6xl text-red-500 font-bold mt-10 text-left mx-16 mb-10">
        Our Associates
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden mx-16">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateX()}%)`,
            width: `${(100 / imagesPerSlide) * totalSlides}%`,
          }}
        >
          {associates.map((placeholder, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / imagesPerSlide}%` }}
            >
              <AssociatePlaceholder placeholder={placeholder} />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300"
          aria-label="Previous Slide"
        >
          &#10094; {/* Left Arrow */}
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300"
          aria-label="Next Slide"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-teal-600" : "bg-gray-300"
            } hover:bg-teal-500 transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Associates;
