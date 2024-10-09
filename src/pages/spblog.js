import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SpBlog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-teal-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Importance of Learning Mandarin
              </h1>
              <p className="text-lg sm:text-xl text-gray-600" style={{ fontFamily: 'Quicksand' }}>
                Discover the cultural, economic, and personal benefits of mastering one of the world's most spoken languages.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <article className="prose lg:prose-xl mx-auto text-gray-700">
              <h2 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Learn Mandarin?
              </h2>
              <p>
                Mandarin Chinese is spoken by over a billion people worldwide, making it one of the most widely spoken languages. As China continues to grow as a global economic power, knowing Mandarin opens up significant opportunities in business, politics, and culture.
              </p>
              <p>
                Whether you're a student, business professional, or simply someone who loves learning new languages, Mandarin offers a unique challenge and a gateway to understanding one of the world's oldest and most fascinating cultures.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Cultural Impact
              </h3>
              <p>
                Chinese culture is rich in history, traditions, and philosophy. By learning Mandarin, you're not only mastering a language but also immersing yourself in a civilization that has shaped human history for millennia. You gain access to ancient texts, philosophies such as Confucianism and Taoism, and a modern cultural landscape that is rapidly influencing the world.
              </p>

              <blockquote className="border-l-4 border-teal-600 pl-4 text-lg italic">
                "To learn a language is to have one more window from which to look at the world." — Chinese Proverb
              </blockquote>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                Economic Opportunities
              </h3>
              <p>
                With China being a leading economic powerhouse, learning Mandarin can give you an edge in many fields such as international business, trade, and diplomacy. Many companies value employees who can communicate with Chinese-speaking partners, and knowing the language can set you apart in today's competitive job market.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                How to Get Started
              </h3>
              <p>
                Learning Mandarin might seem daunting at first, but with the right approach, anyone can master it. Start by focusing on the basics: tones, pronunciation, and common vocabulary. Leverage online resources, mobile apps, and professional language teachers to build a solid foundation. Consistency is key, and with regular practice, you'll start seeing progress in no time.
              </p>

              <div className="flex justify-center mt-8">
                <button className="bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition-all">
                  Start Your Mandarin Journey
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
