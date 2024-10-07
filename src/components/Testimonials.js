import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full mx-auto">
        
        {/* First Column */}
        <div className="flex flex-col space-y-8">
          
          {/* Card 1: Red Background with Title */}
          <div className="bg-red-600 text-white p-12 shadow-lg rounded-md flex items-center justify-center">
            <h2 className="text-2xl md:text-6xl font-bold font-playfair text-left lg:scale-y-[1.20]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hear what our clients say about us
            </h2>
          </div>
          
          {/* Card 2: Large Testimonial */}
          <div className="bg-white p-12 rounded-md flex flex-col justify-between shadow-2xl hover:shadow-red-400">
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4" style={{ fontFamily: 'Quicksand' }}>
              "I believe Yin Yang is not just a class but more like a family. Yashodhara ma’am always guides us with scholarships and summer camps. At Yin Yang, we not only learn the language but also immerse ourselves in the culture and everything about China. I even had the opportunity to teach in China because of Yin Yang."
            </p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-4">
                <p className="font-semibold text-lg text-gray-900" style={{ fontFamily: 'Quicksand' }}>Jui Kahate</p>
                <p className="text-md text-left font-semibold text-gray-600" style={{ fontFamily: 'Quicksand' }}>Teacher</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-8">
          
          {/* Card 1: Large Testimonial */}
          <div className="bg-white p-6 rounded-md flex flex-col justify-between shadow-2xl hover:shadow-red-400">
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4" style={{ fontFamily: 'Quicksand' }}> 
              "Yashodhara ma’am gives exposure to projects, scholarships and other activities to students. All the teachers in Yin Yang are very patient and supportive. I learnt so much from all of them. We also enjoy audio-video material in class. Yin Yang is one of the best classes for Chinese learning."
            </p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-4">
                <p className="font-semibold text-lg text-gray-900" style={{ fontFamily: 'Quicksand' }}>Mrunal Shah</p>
                <p className="text-md text-left font-semibold text-gray-600" style={{ fontFamily: 'Quicksand' }}>Student</p>
              </div>
            </div>
          </div>

          {/* Card 2: Small Testimonial */}
          <div className="bg-white p-20 rounded-md flex flex-col justify-between shadow-2xl hover:shadow-red-400">
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4" style={{ fontFamily: 'Quicksand' }}>
              "I have thoroughly enjoyed learning a language like Mandarin that isn’t often learnt in India. In class we never stuck to our textbooks."
            </p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-4">
                <p className="font-semibold text-lg text-gray-900" style={{ fontFamily: 'Quicksand' }}>Mugdha Saptarshi</p>
                <p className="text-md font-semibold text-left text-gray-600" style={{ fontFamily: 'Quicksand' }}>Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Row with Prompt and Button */}
      <div className="mt-12 w-full bg-red-600 text-white py-8 flex flex-col lg:flex-row items-center justify-between px-6 rounded-md">
      <h3
        className="text-4xl font-bold mb-4 lg:mb-0 transform lg:scale-y-[1.20] transition-transform duration-300"
        style={{ fontFamily: 'Playfair Display' }}
      >
        Ready to level up with us?
      </h3>

      <a
        href="https://wa.me/919822089970"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent text-white px-8 py-2 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-white border-solid border-2 border-white"
        style={{ fontFamily: 'Quicksand' }}
      >
        Enroll now!
      </a>

      </div>
    </div>
  );
};

export default Testimonials;
