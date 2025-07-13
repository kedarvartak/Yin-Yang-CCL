// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../components/assets/yin-logo.png'; // Ensure the path is correct

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <nav className="bg-white z-50 relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-24"> {/* Increase height of navbar */}
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-24 max-h-26 object-contain" // Increased height here
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <ul
          className="hidden md:flex space-x-8 text-red-500 text-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
          }}
        >
          <li className="hover:text-red-700 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-red-700 cursor-pointer">
            <Link to="/About">About</Link>
          </li>

          {/* Chinese Language Courses Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button
              className="hover:text-red-700 cursor-pointer flex items-center"
              aria-haspopup="true"
              aria-expanded={isCoursesOpen}
            >
              Chinese Language Courses
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute left-0 top-full w-56 bg-white border rounded-md shadow-lg transition-opacity duration-300 z-50 ${
                isCoursesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              aria-label="submenu"
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/Teach">What we teach at Yin-Yang</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/Corporate">Corporate Services</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/ChinaConnect">China Connect</Link>
              </li>
            </ul>
          </li>

          <li className="hover:text-red-700 cursor-pointer">
            <Link to="/achievements">Achievements</Link>
          </li>
          <li className="hover:text-red-700 cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </li>

          {/* Blog Link */}
          <li className="hover:text-red-700 cursor-pointer">
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-red-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t z-50">
          <ul
            className="flex flex-col space-y-4 text-red-500 text-lg font-semibold p-4"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <li className="hover:text-red-700 cursor-pointer">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>

            <li className="hover:text-red-700 cursor-pointer">
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>

            {/* Chinese Language Courses Mobile Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-red-700 cursor-pointer"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                aria-expanded={isCoursesOpen}
                aria-controls="mobile-courses-dropdown"
              >
                <span>Chinese Language Courses</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isCoursesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isCoursesOpen && (
                <ul
                  id="mobile-courses-dropdown"
                  className="mt-2 pl-4 space-y-2"
                >
                  <li className="hover:text-red-700 cursor-pointer">
                    <Link to="/Teach" onClick={handleLinkClick}>
                      What we teach at Yin-Yang
                    </Link>
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <Link to="/Corporate" onClick={handleLinkClick}>
                      Corporate Services
                    </Link>
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <Link to="/ChinaConnect" onClick={handleLinkClick}>
                      China Connect
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-red-700 cursor-pointer">
              <Link to="/achievements" onClick={handleLinkClick}>
                Achievements
              </Link>
            </li>
            <li className="hover:text-red-700 cursor-pointer">
              <Link to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>

            {/* Blog Link */}
            <li className="hover:text-red-700 cursor-pointer">
              <Link to="/blogs" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
