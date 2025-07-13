// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const mapsUrl = "https://www.google.com/maps/place/18%C2%B030'23.6%22N+73%C2%B049'43.1%22E/@18.5066704,73.8273395,18.04z/data=!4m4!3m3!8m2!3d18.5065632!4d73.8286362?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-red-600 text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section: Title */}
          <div className="flex flex-col justify-start">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The ultimate destination for Chinese language learning.
            </h2>
          </div>
          
          {/* Middle Section: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/Teach" 
                  className="bg-red-800 text-lg sm:text-xl font-semibold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-red-900 transition w-full flex items-center justify-center"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  CHINESE LANGUAGE COURSES
                </Link>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link 
                    to="/blogs" 
                    className="bg-red-800 text-lg sm:text-xl font-semibold text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-red-900 transition flex-1 flex items-center justify-center"
                    style={{ fontFamily: "Quicksand, sans-serif" }}
                  >
                    BLOG
                  </Link>
                  <Link 
                    to="/About" 
                    className="bg-red-800 text-lg sm:text-xl font-semibold text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-red-900 transition flex-1 flex items-center justify-center"
                    style={{ fontFamily: "Quicksand, sans-serif" }}
                  >
                    ABOUT US
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right Section: Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Contact
            </h3>
            
            {/* Updated Email as Active Link */}
            <a 
              href="mailto:yinyangpune@gmail.com" 
              className="font-semibold text-lg mb-2 text-white hover:underline" 
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              yinyangpune@gmail.com
            </a>
            
            <p className="font-semibold text-lg mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              +91 98220 89970
            </p>

            {/* Address with Google Maps Link */}
            <div className="flex items-start gap-2 mb-6 group">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg hover:underline" 
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                1st Floor, Prabhukrupa, Plot No. 2/5, Opposite SNDT College, Behind SBI Erandwane Branch, Off Karve Road, Pune, 411004.
              </a>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-2 rounded-full hover:bg-red-900 transition flex-shrink-0 group-hover:bg-red-900"
                aria-label="View on Google Maps"
              >
                <FaMapMarkerAlt className="text-white" size={20} />
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-24">
              <a
                href="https://www.instagram.com/yinyangpune/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/yinyang-center-for-chinese-language/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" size={20} />
              </a>
              <a
                href="https://wa.me/919822089970"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white" size={20} />
              </a>
              <a
                href="https://www.facebook.com/yinyangpune/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-red-900 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
