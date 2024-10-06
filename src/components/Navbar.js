import React, { useState } from 'react';
import logo from '../components/assets/yin-logo.png'; // Ensure the path is correct

export default function Navbar() {
  // State to handle mobile dropdowns
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white z-50 relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-20">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-full max-h-20 object-contain"
          />
        </div>

        {/* Desktop Menu Items */}
        <ul
          className="hidden md:flex space-x-8 text-red-500 text-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
          }}
        >
          <li className="hover:text-red-700 cursor-pointer">Home</li>

          {/* Chinese Language Courses Dropdown */}
          <li className="relative group">
            <button className="hover:text-red-700 cursor-pointer flex items-center">
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
            <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Beginner Course
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Intermediate Course
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Advanced Course
              </li>
            </ul>
          </li>

          <li className="hover:text-red-700 cursor-pointer">Achievements</li>
          <li className="hover:text-red-700 cursor-pointer">Gallery</li>

          {/* Blog Dropdown */}
          <li className="relative group">
            <button className="hover:text-red-700 cursor-pointer flex items-center">
              Blog
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
            <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Latest Posts
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Tutorials
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                News
              </li>
            </ul>
          </li>

          <li className="hover:text-red-700 cursor-pointer">About</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-red-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
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
            <li className="hover:text-red-700 cursor-pointer">Home</li>

            {/* Chinese Language Courses Mobile Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-red-700 cursor-pointer"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                aria-expanded={isCoursesOpen}
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
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="hover:text-red-700 cursor-pointer">
                    Beginner Course
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    Intermediate Course
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    Advanced Course
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-red-700 cursor-pointer">Achievements</li>
            <li className="hover:text-red-700 cursor-pointer">Gallery</li>

            {/* Blog Mobile Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-red-700 cursor-pointer"
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                aria-expanded={isBlogOpen}
              >
                <span>Blog</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isBlogOpen ? 'rotate-180' : 'rotate-0'
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
              {isBlogOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="hover:text-red-700 cursor-pointer">
                    Latest Posts
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    Tutorials
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">News</li>
                </ul>
              )}
            </li>

            <li className="hover:text-red-700 cursor-pointer">About</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
