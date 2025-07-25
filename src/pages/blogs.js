import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import { Link } from 'react-router-dom';
import dood from '../components/assets/dood.png'; // Import the single doodle image

const blogs = [
  {
    title: 'China’s Evolving Demographic Crisis',
    description:
      'Understanding the impact of China\'s population decline and its global implications',
    link: '/Crisis',
    author: 'Omkar Bhole',
  },
  {
    title: 'Political Representation to Ethnic Groups in China',
    description:
      'Being an old civilization, China has a significant diversity in population, especially in terms of different ethnicities getting assimilated at certain periods in history',
    link: '/Political',
    author: 'Omkar Bhole',
  },
  {
    title: 'China’s Global Security Initiative',
    description:
      'China is presently one of the largest military powers in the world in all respects. As a rising military power, it aims to replace the USA’s place as a global net security provider.',
    link: '/Secure',
    author: 'Omkar Bhole',
  },
  {
    title: 'काळाची गरज - सुमॅन्डरिन व्हा ',
    description:
      'पूर्वापारपासून मनुष्य विविध भाषा शिकत आला आहे. भाषा हे आपले मत विचार व्यक्त करायचे माध्यम आहेच पण दैनंदिन व्यवहार व व्यवसायाचे महत्त्वाचे साधन आहे.',
    link: '/Marfour',
    author: 'Yashodhara Gadgil',
  },
  {
    title: 'चीनी भाषेचे स्वरूप',
    description:
      'चिनी भाषा ही तांत्रिकदृष्ट्या भाषा नाही तर मॅन्डरिन ही एक पैचिंग बीजिंग जवळ बोलली जाणारी एक बोली भाषा आहे. संपूर्ण चीनमध्ये दोनशेपेक्षा जास्त बोली भाषा अजूनही अस्तित्वात आहेत',
    link: '/Martwo',
    author: 'Yashodhara Gadgil',
  },
  {
    title: 'चिनी भाषा जाणणार्‍यांसाठीच्या विविध संधी',
    description:
      'पूर्वी एकच पदवी घ्या आणि त्या जोरावर उत्तम नोकरी मिळवा हे सूत्र आपल्याकडे वापरलं जायचं. जसं जसं जग बदललं तसं अधिक व वेगळे ज्ञान मिळवण्याची गरज वाढली.',
    link: '/Marthree',
    author: 'Yashodhara Gadgil',
  },
  {
    title: 'चिनी भाषा कोणी शिकावी व परीक्षांबद्दलची माहिती',
    description:
      'भाषा शिकण्यासाठी खरंतर वयाची कोणतीच अट नसते. परदेशी भाषा शिकताना प्रत्येक जणच त्या भाषेच्या बालवाडीत असतो.',
    link: '/Marone',
    author: 'Yashodhara Gadgil',
  },
  {
    title: 'रामायणाचे चीनी आयाम',
    description:
      'लेनिनने सांगितल्याप्रमाणे, जो माणूस मानव जातीने निर्माण केलेले साहित्य स्वतःचे ज्ञान समृद्ध करण्याबरोबर साम्यवादी समाज घडवण्यासाठी करतो तो खरा कम्युनिस्ट',
    link: '/Marfive',
    author: 'Yashodhara Gadgil',
  },
];

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <WhatsApp />
      <WhatsAppAndScrollToTop />
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 mb-16 py-8">
        {/* Blogs Title */}
        <div className="mb-10">
          <h1
            className="text-5xl sm:text-5xl lg:text-6xl font-bold text-left text-teal-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Blogs
          </h1>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-teal-600 text-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              {/* Image Section */}
              <div
                className="h-40 mb-4 rounded bg-cover bg-center"
                style={{
                  backgroundImage: `url(${dood})`, // Apply the same dood image for every card
                }}
              ></div>

              {/* Title */}
              <h2
                className="text-xl sm:text-2xl font-semibold mb-2"
                style={{ fontFamily: 'Quicksand' }}
              >
                {blog.title}
              </h2>

              {/* Description */}
              <p
                className="text-sm sm:text-base flex-grow mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                {blog.description}
              </p>

              {/* Author */}
              <p
                className="text-sm sm:text-base mb-2"
                style={{ fontFamily: 'Quicksand', fontStyle: 'italic' }}
              >
                Author: {blog.author}
              </p>

              {/* Read More Link */}
              <Link
                to={blog.link}
                className="text-white underline text-md sm:text-lg self-start mt-auto"
                style={{ fontFamily: 'Quicksand' }}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
