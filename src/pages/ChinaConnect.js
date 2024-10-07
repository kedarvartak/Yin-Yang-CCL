import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import design from '../components/assets/design.png'; // Importing the design pattern image

export default function ChinaConnect() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-12">
        {/* Header Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h1
            className="text-6xl font-bold text-red-600 lg:scale-y-[1.20] mb-4 md:mb-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            China <br />
            <span className='text-black'> Connect </span> 
          </h1>
          <p
            className="text-lg mt-4 font-semibold md:mt-0 max-w-2xl text-black md:text-right"
            style={{ fontFamily: "Quicksand" }}
          >
            Our China Connect section helps you explore more than just the language. We offer
            courses in Mandarin, Chinese history, culture, and business manners. Whether you’re a
            student or a professional, these programs will give you the skills to connect with
            China and succeed in different industries, fostering strong global relationships.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Chinese Katta */}
          <div 
            className="bg-red-600 text-white p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${design})`,  // Use template literal to insert the imported image
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              opacity: 0.9, // Adjust opacity of the background pattern
            }}
          >
            <h2
              className="text-4xl lg:scale-y-[1.20] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chinese Katta
            </h2>
            <p className='text-white font-semibold'  style={{ fontFamily: "Quicksand" }}>
              A unique gathering where students converse solely in Mandarin, exploring new topics
              each session. It’s not just about practicing speaking skills; it’s also about
              mastering listening abilities in a lively, interactive setting.
            </p>
          </div>

          {/* Art Circle */}
          <div 
            className="bg-red-600 text-white p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${design})`,  // Corrected usage of backgroundImage with imported image
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
            }}
          >
            <h2
              className="text-4xl lg:scale-y-[1.20] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Art Circle
            </h2>
            <p className='text-white font-semibold' style={{ fontFamily: "Quicksand" }}>
              Dive into the rich and diverse art forms of China with workshops on music, dance,
              calligraphy, and even paper cutting. Run by our teachers and talented students, these
              sessions are perfect for everyone, from veterans to children, who wish to explore
              Chinese art.
            </p>
          </div>

          {/* China Beyond Language */}
          <div 
            className="bg-red-600 text-white p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${design})`, 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
            }}
          >
            <h2
              className="text-4xl lg:scale-y-[1.20] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              China Beyond Language
            </h2>
            <p className='text-white font-semibold' style={{ fontFamily: "Quicksand" }}>
              At YinYang, we believe that mastering a language is intertwined with exploring its
              culture and history. Our special sessions, held periodically, delve into Chinese
              culture, philosophy, geopolitics, and more, offering a comprehensive understanding
              that enriches your language learning journey.
            </p>
          </div>

          {/* Kids Workshops */}
          <div 
            className="bg-red-600 text-white p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${design})`, 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
            }}
          >
            <h2
              className="text-4xl lg:scale-y-[1.20] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kids Workshops
            </h2>
            <p className='text-white font-semibold' style={{ fontFamily: "Quicksand" }}>
              Our kids’ workshops are crafted to make learning Mandarin enjoyable and less
              intimidating for young learners. Through fun activities and interactive sessions,
              children use their natural abilities—visual memory and imitation—to engage with daily
              words, vocabulary, and phrases. This approach turns language learning into a playful
              and rewarding experience.
            </p>
          </div>
        </div>

        {/* Bridge the Gap Section */}
        <div className="container mx-auto mt-12">
          <div className="bg-red-700 text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <span
              className="text-4xl lg:scale-y-[1.20] font-semibold mb-4 md:mb-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bridge the gap
            </span>
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
      </div>
      <Footer />
    </div>
  );
}
