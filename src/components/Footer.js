import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-12">

        {/* Left Section */}
        <div className="lg:w-1/3">
          <h2
            className="text-5xl mt-5 text-left font-bold lg:scale-y-[1.20]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          > 
            The ultimate destination for Chinese language learning.
          </h2>
        </div>

        {/* Middle Section */}
        <div className="lg:w-1/3" style={{ fontFamily: "Quicksand" }}>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-6">
            <li>
              <button className="bg-red-800 font-semibold text-white px-8 py-6 rounded-full hover:bg-red-900 transition w-full">
                CHINESE LANGUAGE COURSES
              </button>
            </li>
            {/* Grouped Buttons */}
            <li>
              <div className="flex space-x-4">
                <button className="bg-red-800 font-semibold text-white px-4 py-6 rounded-full hover:bg-red-900 transition flex-1">
                  BLOG
                </button>
                <button className="bg-red-800 font-semibold text-white px-4 py-6 rounded-full hover:bg-red-900 transition flex-1">
                  ABOUT US
                </button>
              </div>
            </li>
            <li>
              <button className="bg-red-800 font-semibold text-white px-8 py-6 rounded-full hover:bg-red-900 transition w-full">
                CONTACT
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3" style={{ fontFamily: "Quicksand" }}>
          <h3 className="text-xl font-bold mb-6 mt-2 text-left">Contact</h3>
          <p className='font-semibold text-lg text-left mb-4'>yinyangpune@gmail.com</p>
          <p className='font-semibold text-lg text-left mb-4'>+91 98220 89970</p>
          <p className='font-semibold text-lg text-left mb-6'>
            Office No. 6, 1st floor, Banali Apartments, Nalstop, Karve Road, Pune 411004
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-4xl mt-6">
            <a href="#" className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition" aria-label="Facebook">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition" aria-label="Instagram">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-red-800 p-3 rounded-full hover:bg-red-800 transition" aria-label="LinkedIn">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="#" className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition" aria-label="WhatsApp">
              <FaWhatsapp className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
