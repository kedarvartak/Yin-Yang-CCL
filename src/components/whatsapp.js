import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from React Icons

export default function WhatsApp() {
  return (
    <div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919822089970" // WhatsApp link with the correct format
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="z-50 fixed bottom-4 right-4 bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300">
          <FaWhatsapp className="text-white w-8 h-8" />
        </div>
      </a>
    </div>
  );
}
