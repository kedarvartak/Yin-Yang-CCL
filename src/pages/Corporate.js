import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Corporate() {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-left">
            <h2 className="text-6xl lg:scale-y-[1.20] font-bold text-teal-700" style={{ fontFamily: "'Playfair Display', serif" }}>Corporate <span className='text-black'>Services</span></h2>
            <p className="mt-4 text-gray-600 text-lg font-semibold max-w-2xl" style={{ fontFamily: "Quicksand" }}>
              Yin Yang offers business services to help companies succeed in the Chinese market. 
              Our expert team provides translation, interpretation, marketing advice, and support 
              with import-export. With a deep understanding of Chinese business culture, we guide 
              you through market entry and expansion.
            </p>
          </div>

          {/* Cards Section */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Translation Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-white lg:scale-y-[1.20] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Translation</h3>
              <p className="text-gray-200 text-lg" style={{ fontFamily: "Quicksand" }}>
                Expertise in technical, machine, local, legal, and business translations, including 
                product manuals, certificates, contracts, and marketing materials. We also offer specialized 
                copywriting in Chinese for literature and current affairs.
              </p>
            </div>

            {/* Interpretation Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-white mb-4 lg:scale-y-[1.20]"  style={{ fontFamily: "'Playfair Display', serif" }}>Interpretation</h3>
              <p className="text-gray-200 text-lg" style={{ fontFamily: "Quicksand" }}>
                This course covers essential grammar revision, vocabulary building, situational 
                conversations, individual presentations, group discussions, colloquial Chinese, 
                and role play. You also gain insights into Chinese history, culture, and traditions.
              </p>
            </div>

            {/* Business Consultancy Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-white mb-4 lg:scale-y-[1.20]" style={{ fontFamily: "'Playfair Display', serif" }}>Business Consultancy</h3>
              <p className="text-gray-200 text-lg" style={{ fontFamily: "Quicksand" }}>
                Designed for those looking to elevate their skills, this advanced course includes 
                vocabulary building, business etiquette, contextual dialogue, solo speaking practices, 
                team dialogues, everyday Mandarin, and exploration of contemporary China.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 bg-teal-700 rounded-lg shadow-lg p-6 flex justify-between items-center">
            <span className="text-white text-3xl font-semibold lg:scale-y-[1.20]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get your business going
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
