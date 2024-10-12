// src/components/HeroSection.js
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white mt-10 md:mt-20 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover opacity-10"
        style={{ backgroundImage: "url('https://your-pattern-image-url')" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-8 text-center relative z-10">
        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl text-teal-600 font-bold lg:scale-y-[1.20]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Discover China the <span className="text-red-500">YinYang</span> way.
        </h1>

        {/* Subheading */}
        <p
          className="text-2xl md:text-4xl text-teal-600 font-semibold mt-4 lg:scale-y-[1.20]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The ultimate destination for Chinese language and culture
        </p>

        {/* Description */}
        <p
          className="mt-6 text-base md:text-lg text-teal-600 max-w-5xl mx-auto"
          style={{ fontFamily: 'Quicksand' }}
        >
          Join over <span className="font-bold">1,500 students</span> who have earned their international certifications
          with us, gaining from our expert coaching and comprehensive curriculum. Additionally,
          <span className="font-bold"> 50+ Corporates</span> have trusted us for professional services in interpretation,
          translation, and business consultancy.
        </p>

        {/* Button */}
        <a
          href="https://wa.me/919822089970" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="mt-8 mb-6 px-6 py-3 text-lg md:text-xl border-2 border-red-500 text-red-500 font-semibold rounded-xl shadow-xl hover:shadow-red-300 transition-shadow duration-300"
            style={{ fontFamily: 'Quicksand' }}
          >
            Enroll now!
          </button>
        </a>
      </div>
    </section>
  );
}
