import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import founderImage from '../components/assets/YG 1 JPEG.jpg'; // Add your founder image path here
import shreya from '../components/assets/Shreya Ranade.png';
import ishani from '../components/assets/Ishani Kotwal.png';
import bhole from '../components/assets/Omkar Bhole.png';
import eepsita from '../components/assets/Eepsita Kelar.png';
import neha from '../components/assets/Neha Kulkarni.png';
import jui from '../components/assets/Jui Kahate.png';
import anu from '../components/assets/Anuprita Lele.png';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import shivani from '../components/assets/shivani oak.jpeg';
import gayatree from '../components/assets/gayatree joshi.jpeg';
import CallButton from '../components/call';
import kanade from '../components/assets/kanade.jpg'



export default function About() {
  // Define the team members data
  const teamMembers = [
    {
      name: 'Col. Kiran Kanade (Retd.)',
      image: kanade, // Replace with actual image path if available
      roles: [
        "Master's in Chinese Language",
        'Translator & Interpreter for the Indian Government',
        'Contributor to Bal Bharti and Maharashtra Government HSC Textbooks',
      ],
    },
    {
      name: 'Ishani Kotwal',
      image: ishani,
      roles: [
        "Master's in China Studies",
        'HSK 5 Certified',
        'Asia Slate - China 101 Certificate',
        'Nanjing University Certificate Course',
        'International Volunteer for China Tourism Project',
        'Shanghai Theatre Academy Scholarship Recipient',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
      ],
    },
    {
      name: 'Neha Kulkarni',
      image: neha,
      roles: [
        'Pursuing LLB',
        'HSK 5 Certified',
        'Winner of China Bridge Competition 2020 Middle School India Finals',
        'Best Talent Award at China Bridge Competition 2023 College Group India Finals',
      ],
    },
    {
      name: 'Omkar Bole',
      image: bhole,
      roles: [
        "Master's in China Studies",
        'HSK 5 Certified',
        'Asia Slate - China 101 Certificate',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
        'Academician',
      ],
    },
    {
      name: 'Shreya Ranade',
      image: shreya,
      roles: [
        'Chinese Government Teachers Training Scholarship Program Recipient',
        'HSK 6 Certified, Shanghai Theatre Academy Scholarship Recipient',
        "Master's in Chinese Language Interpretation & Translation from Swansea University, UK",
        "Bachelor's in Chinese Language and Culture from Suzhou University",
      ],
    },
    {
      name: 'Jui Kahate',
      image: jui,
      roles: [
        'BCS',
        'HSK 5 Certified',
        'Winner of China Bridge Competition 2021 Middle School India Finals',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
      ],
    },
    {
      name: 'Shivani Oak',
      image: shivani, // Replace with actual image path if available
      roles: [
        'MA in International Relations',
        'Pursuing HSK 5',
        'Beijing Language & Culture University Certificate',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
      ],
    },
    {
      name: 'Eepsita Kelkar',
      image: eepsita,
      roles: [
        'BA, MBA',
        'HSK 4 Certified',
        'China India Cultural Exchange Scholarship Program Recipient',
      ],
    },
    {
      name: 'Anuprita Lele',
      image: anu,
      roles: [
        "Master's in China Studies",
        'HSK 5 Certified',
        'Asia Slate - China 101 Certificate',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
      ],
    },
    {
      name: 'Gayatree Joshi',
      image: gayatree, // Replace with actual image path if available
      roles: [
        'BA, Pursuing MBA',
        'Pursuing HSK 5',
        "Beijing Normal University's Philosophy Summer Program Scholarship Recipient",
        'Shanghai Theatre Academy Scholarship Program Recipient',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsApp />
      <CallButton />
      <WhatsAppAndScrollToTop />
      
      {/* About Section */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* Title */}
        <h1
          className="text-5xl sm:text-5xl lg:text-6xl font-bold text-red-600 text-left sm:text-left lg:text-left mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Know <br />
          <span className="text-black">Our Founder</span>
        </h1>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-12 flex">
            <img
              src={founderImage}
              alt="Mrs. Yashodhara Gadgil, Founder"
              className="rounded-lg shadow-lg w-full object-cover flex-grow"
              loading="lazy"
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between px-4 sm:px-6 lg:px-0">
            {/* Added `px-4 sm:px-6` for increased padding on mobile and small screens */}
            <div>
              <p
                className="text-gray-700 text-justify leading-8 mb-4"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Mrs. Yashodhara Gadgil is a highly accomplished Mandarin Chinese language professional
                with over a decade of experience in the field. Her work spans various roles, including
                <span className="text-red-600 font-semibold"> interpreter and translator</span> for multinational companies and the Government of India and China.
                Yashodhara’s deep passion for Chinese language and culture has taken her to
                <span className="text-red-600 font-semibold"> China eight times</span>, where she engaged in
                study programs and volunteered for projects such as China's tourism homestay initiative,
                gaining invaluable insights into the country’s rich heritage.
              </p>

              <p
                className="text-gray-700 text-justify leading-8 mb-4"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Academically, she holds a <span className="text-red-600 font-semibold">Master’s in China Studies</span>,
                specializing in the Chinese economy, politics, international relations, and more—making her
                one of the few people with an in-depth understanding of China. She has also completed <span className="text-red-600 font-semibold">two
                residential language courses equivalent to international certification level 5 (HSK 5)</span> from
                prestigious institutions—<span className="text-red-600 font-semibold">Suzhou Normal University</span>
                and <span className="text-red-600 font-semibold">Beijing Language and Culture University</span>.
                Furthermore, she is a <span className="text-red-600 font-semibold">certified language teacher</span> recognized by the <span className="text-red-600 font-semibold">Government of China</span> and has been <span className="text-red-600 font-semibold">awarded scholarships</span> to study Chinese philosophy at Beijing Normal University and complete the <span className='text-red-600 font-semibold'>Asia Slate China 101 Capsule course</span>.
              </p>

              <p
                className="text-gray-700 text-justify leading-8 mb-4"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Beyond her impressive credentials, Yashodhara has contributed significantly to the academic
                community by <span className="text-red-600 font-semibold">co-authoring Chinese language textbooks </span>
                for the <span className="text-red-600 font-semibold">Maharashtra State Board</span> and co-translating blog series that made Chinese news accessible
                to English-speaking audiences. She has written articles on Chinese language and career opportunities,
                featured in publications like <span className="text-red-600 font-semibold">Maharashtra Times</span>.
              </p>

              <p
                className="text-gray-700 text-justify leading-8 mt-4"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Yashodhara’s dedication extends to her teaching, where she is known for creating a secure,
                engaging environment. Her classes are not just about learning a language; they are about
                exploring a culture. She is always there for her students, making each session interactive
                and enjoyable. Her warmth and enthusiasm make her not just a teacher but a mentor who genuinely
                cares about her students’ success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* Team Title */}
        <h2
          className="text-5xl sm:text-5xl lg:text-6xl font-bold text-teal-600 text-center sm:text-center lg:text-left mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-105"
            >
              {/* Team Member Image */}
              <div className="w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-teal-600"
                  loading="lazy"
                />
              </div>

              {/* Team Member Name */}
              <h3
                className="text-xl font-semibold mb-2 text-center sm:text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {member.name}
              </h3>

              {/* Team Member Roles */}
              <ul
                className="list-disc list-inside text-sm sm:text-base text-left flex-grow"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {member.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
