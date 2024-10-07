import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from React Icons

export default function WhatsApp() {
  return (
    <div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919822089970" // Remove the '+' from the WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
        aria-label="Chat on WhatsApp"
      >
        <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300">
          <FaWhatsapp className="text-white w-8 h-8" />
        </div>
      </a>
    </div>
  );
}
