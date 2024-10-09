import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import CallButton from '../components/call';

export default function ChinaConnect() {
  return (
    <div>
      <Navbar />
      <WhatsApp/>
      <WhatsAppAndScrollToTop/>
      <CallButton/>
      <div className="bg-white py-12">
        {/* Header Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-left px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 lg:scale-y-[1.20] mb-4 md:mb-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            China <br />
            <span className='text-black'>Connect</span> 
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl font-semibold max-w-2xl text-black md:text-left"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Our China Connect section helps you explore more than just the language. We offer
            courses in Mandarin, Chinese history, culture, and business manners. Whether you’re a
            student or a professional, these programs will give you the skills to connect with
            China and succeed in different industries, fostering strong global relationships.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 sm:px-6 lg:px-8">
          {/* Chinese Katta */}
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-md">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:scale-y-[1.20]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chinese Katta
            </h2>
            <p className='font-semibold text-base sm:text-lg' style={{ fontFamily: "Quicksand, sans-serif" }}>
              A unique gathering where students converse solely in Mandarin, exploring new topics
              each session. It’s not just about practicing speaking skills; it’s also about
              mastering listening abilities in a lively, interactive setting.
            </p>
          </div>

          {/* Art Circle */}
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-md">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:scale-y-[1.20]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Art Circle
            </h2>
            <p className='font-semibold text-base sm:text-lg' style={{ fontFamily: "Quicksand, sans-serif" }}>
              Dive into the rich and diverse art forms of China with workshops on music, dance,
              calligraphy, and even paper cutting. Run by our teachers and talented students, these
              sessions are perfect for everyone, from veterans to children, who wish to explore
              Chinese art.
            </p>
          </div>

          {/* China Beyond Language */}
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-md">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:scale-y-[1.20]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              China Beyond Language
            </h2>
            <p className='font-semibold text-base sm:text-lg' style={{ fontFamily: "Quicksand, sans-serif" }}>
              At YinYang, we believe that mastering a language is intertwined with exploring its
              culture and history. Our special sessions, held periodically, delve into Chinese
              culture, philosophy, geopolitics, and more, offering a comprehensive understanding
              that enriches your language learning journey.
            </p>
          </div>

          {/* Kids Workshops */}
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-md">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:scale-y-[1.20]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kids Workshops
            </h2>
            <p className='font-semibold text-base sm:text-lg' style={{ fontFamily: "Quicksand, sans-serif" }}>
              Our kids’ workshops are crafted to make learning Mandarin enjoyable and less
              intimidating for young learners. Through fun activities and interactive sessions,
              children use their natural abilities—visual memory and imitation—to engage with daily
              words, vocabulary, and phrases. This approach turns language learning into a playful
              and rewarding experience.
            </p>
          </div>
        </div>

        {/* Bridge the Gap Section */}
        <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-red-700 text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <span
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 md:mb-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bridge the gap
            </span>
            <a
              href="https://wa.me/919822089970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white px-6 py-2 rounded-xl text-base sm:text-lg font-semibold shadow-2xl hover:shadow-white border-2 border-white transition duration-300"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
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
