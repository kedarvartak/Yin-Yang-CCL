import React from 'react';
import { MdCall } from 'react-icons/md'; // Import the Call icon from Material Design

export default function CallButton() {
  return (
    <div>
      {/* Call Floating Button */}
      <a
        href="tel:+919822089970" // Replace with your desired phone number
        className="fixed bottom-5 left-5 z-50"
        aria-label="Call us"
      >
        <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300">
          <MdCall className="text-white w-8 h-8" />
        </div>
      </a>
    </div>
  );
}
