import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../components/assets/newspaper - 2017 1.png';
import news1 from '../components/assets/news 2 (1).png';
import news2 from '../components/assets/news 2 (2).png';
import school1 from '../components/assets/school1 (1).jpg';
import school2 from '../components/assets/school2.jpg';
import school3 from '../components/assets/school3.jpg';
import waah from '../components/assets/waah.jpg';
import baal from '../components/assets/Bal Bharati Std. 11 book Release July 19.jpg';
import play from '../components/assets/play.jpg';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';

export default function Gallery() {
  const galleryImages = [
    { src: school1, alt: 'Gallery Image 1' },
    { src: school3, alt: 'Gallery Image 3' },
    { src: waah, alt: 'Gallery Image' },
    { src: school2, alt: 'Gallery Image 2' },
    { src: baal, alt: 'Gallery Image 2' },
    { src: play, alt: 'Gallery Image 2' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsApp/>
      <WhatsAppAndScrollToTop/>
      <main className="flex-grow px-4 sm:px-6 md:px-10 mb-12">
        {/* Press & Media Section */}
        <div className="p-4 sm:p-6 mt-12 space-y-6">
          {/* Press & Media Title */}
          <div className="flex">
            <h2
              className="text-5xl sm:text-5xl lg:scale-y-[1.20] ml-0 sm:ml-10 mt-10 text-left font-bold text-red-600"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Press & Media
            </h2>
          </div>

          {/* Press & Media Content */}
          <div className="p-4 sm:p-6 mt-6 space-y-6">
            <div className="space-y-8">
              {/* Large Rectangle Image */}
              <div className="w-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src={News}
                  alt="Press & Media Large Rectangle"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* First Row: Two Rectangles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Rectangle Image 1 */}
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={news1}
                    alt="Press & Media Rectangle 1"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Rectangle Image 2 */}
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={news2}
                    alt="Press & Media Rectangle 2"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video Content */}
        <div className="flex mt-10">
          <h1
            className="text-5xl sm:text-5xl lg:scale-y-[1.20] ml-0 sm:ml-10 mt-10 text-left font-bold text-red-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our YouTube Channel
          </h1>
        </div>
        <div className="p-4 sm:p-6 mt-6">
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0aM2ScRxWT0"
              title="Our YouTube Channel Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="flex mt-10">
          <h1
            className="text-5xl sm:text-5xl lg:scale-y-[1.20] ml-0 sm:ml-10 mt-10 text-left font-bold text-red-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Photo Gallery
          </h1>
        </div>

        {/* Gallery Content */}
        <div className="p-4 sm:p-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="w-full overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Available';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
