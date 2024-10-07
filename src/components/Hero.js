import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white mt-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cover opacity-10" style={{ backgroundImage: "url('https://your-pattern-image-url')" }}></div>

      {/* Content */}
      <div className="container mx-auto py-24 px-4 text-center relative z-10">
        <h1 className="text-7xl text-teal-600  font-bold lg:scale-y-[1.20]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Discover China the <span className="text-red-500">Yin Yang</span> way.
        </h1>
        <p className="text-4xl text-teal-600 font-semibold  mt-4 lg:scale-y-[1.20]" style={{ fontFamily: "'Playfair Display', serif" }}>
          the ultimate destination for chinese language and culture
        </p>


        <p className="mt-6 text-lg md:text-xl text-teal-600 max-w-5xl mx-auto" style={{ fontFamily: 'Quicksand' }}>
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
          <button className="mt-12 mb-10 px-8 py-2 text-lg border-2 border-red-500 text-red-500 font-semibold rounded-xl shadow-xl hover:shadow-red-300" style={{ fontFamily: 'Quicksand' }}>
            Enroll now!
          </button>
        </a>

      </div>
    </section>
  );
}
