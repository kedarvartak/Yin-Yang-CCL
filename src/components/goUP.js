import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'; // Import the icons from React Icons

export default function WhatsAppAndScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  // Detect if the user has scrolled to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      
      // Show button if the user is at 80% or more of the page height
      if (scrollPosition / bottomPosition >= 0.8) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/11234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
        aria-label="Chat on WhatsApp"
      >
        <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300">
          <FaWhatsapp className="text-white w-8 h-8" />
        </div>
      </a>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 z-50 bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}
