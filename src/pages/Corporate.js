import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import CallButton from '../components/call';

export default function Corporate() {
  return (
    <div>
      <Navbar />
      <WhatsApp/>
      <WhatsAppAndScrollToTop/>
      <CallButton/>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-left">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-700 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Corporate Services
            </h2>
            <p
              className="mt-4 text-gray-600 text-base sm:text-lg font-semibold max-w-2xl"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              YinYang offers business services to help companies succeed in the Chinese market. 
              Our expert team provides translation, interpretation, marketing advice, and support 
              with import-export. With a deep understanding of Chinese business culture, we guide 
              you through market entry and expansion.
            </p>
          </div>

          {/* Cards Section */}
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Translation Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Translation
              </h3>
              <p
                className="text-gray-200 text-base sm:text-lg"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Expertise in technical, machine, local, legal, and business translations, including 
                product manuals, certificates, contracts, and marketing materials. We also offer specialized 
                copywriting in Chinese for literature and current affairs.
              </p>
            </div>

            {/* Interpretation Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Interpretation
              </h3>
              <p
                className="text-gray-200 text-base sm:text-lg"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                This service covers essential grammar revision, vocabulary building, situational 
                conversations, individual presentations, group discussions, colloquial Chinese, 
                and role play. You also gain insights into Chinese history, culture, and traditions.
              </p>
            </div>

            {/* Business Consultancy Card */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Business Consultancy
              </h3>
              <p
                className="text-gray-200 text-base sm:text-lg"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Designed for those looking to elevate their skills, this advanced service includes 
                vocabulary building, business etiquette, contextual dialogue, solo speaking practices, 
                team dialogues, everyday Mandarin, and exploration of contemporary China.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 bg-teal-700 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center">
            <span
              className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get your business going
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
