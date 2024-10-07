import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import designImage from '../components/assets/design.png'; // Adjust the path as necessary

const blogs = [
  {
    title: 'Importance of learning Mandarin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'Indo-China relations: history and current',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'Role of Calligraphy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'Corners of China',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'Travel blog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'Prathamesh - for students, how to practice',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'काळाची गरज - सुमॅन्डरिन व्हा ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'चीनी भाषेचे स्वरूप',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'चिनी भाषा जाणणार्‍यांसाठीच्या विविध संधी',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
  {
    title: 'चिनी भाषा कोणी शिकावी व परीक्षांबद्दलची माहिती',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sapien, tempus eu interdum quis, feugiat at odio.',
  },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-16 py-8">
        <h1
          className="text-5xl lg:scale-y-[1.20] font-bold text-left mt-12 text-teal-600 mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
              <div
                className="h-24 mb-4 rounded"
                style={{
                  backgroundImage: `url(${designImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Quicksand' }}>
                {blog.title}
              </h2>
              <p className="text-sm mb-4" style={{ fontFamily: 'Quicksand' }}>
                {blog.description}
              </p>
              {/* Read More Link */}
              <a
                href="#"
                className="text-white underline text-md"
                style={{ fontFamily: 'Quicksand' }}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
