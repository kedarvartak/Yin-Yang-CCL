import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import stud from '../components/assets/2 students got award in Chinese Bridge Middle school competetion  april 17.jpg';
import prize from '../components/assets/Student got 1st price in china india bridge competetion July 18.jpg';

const achievementsData = [
  {
    id: 1,
    text: '2 students got award in Chinese Bridge Middle school competetion april 17',
    image: stud,
  },
  {
    id: 2,
    text: 'Student got 1st price in china india bridge competetion July 18',
    image: prize,
  },
  {
    id: 3,
    text: 'Over 1500 students have successfully completed education and received the language certification.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+3',
  },
  {
    id: 4,
    text: 'A dedicated team of 10+ teachers along with native and non-native speakers involved in student success.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+4',
  },
  {
    id: 5,
    text: 'Successfully conducted numerous online and offline training programs.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+5',
  },
  {
    id: 6,
    text: 'Established partnerships with international educational institutions.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+6',
  },
  {
    id: 7,
    text: 'Developed a comprehensive online learning platform with interactive tools.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+7',
  },
  {
    id: 8,
    text: 'Hosted annual cultural exchange programs attracting participants globally.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+8',
  },
  {
    id: 9,
    text: 'Received outstanding feedback from over 2000 students in annual surveys.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+9',
  },
  {
    id: 10,
    text: 'Implemented innovative teaching methodologies enhancing language acquisition.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+10',
  },
  {
    id: 11,
    text: 'Expanded to multiple cities, reaching a wider audience and impact.',
    image: 'https://via.placeholder.com/600x400?text=Achievement+11',
  },
];

// Additional Achievements and Awards Data
const otherAchievementsData = [
  'Viral Shah – One-year scholarship to study Chinese language at Zhengzhou Normal University – 2017-18',
  'Vrushali Pirangute – One-year scholarship to study Chinese language at Zhengzhou Normal University – 2017-18',
  'Ishani Kotwal, Spruha Kulkarni, Ashwini Savargaonkar, Gouri Pendse, Kalyani Agashe, Poorvshri Pendse – International volunteers at Jinhua homestay project 2017',
  'Shreya Ranade – Shanghai Theatre Academy scholarship – 2017',
  'Ankita Vikhankar – One Belt One Road scholarship – 2017',
  'Madhura Gokhale, Prabhavati Inamdar, Shraddha Warde, Chandrika Kanetkar, Shreya Ranade – Teachers Training Program at East China University – 2017',
  'Eepsita Kelkar, Malvika Chavan – Culture exchange program for China bridge at Kunming University - 2017',
  'Ishani Kotwal - Shanghai Theatre Academy scholarship – 2018',
  'Tanmay Salvekar – Contestant for International round, middle school China Bridge Competition at Beijing & Kunming University – 2018, received 6 month scholarship for advanced Chinese study',
  'Shreya Ranade – One-year scholarship to study Chinese language at Nanjing Normal University – 2018-19',
  'Shreya Ranade – 4 years scholarship for graduation in Chinese language and literature 2019-2023',
  'Neha Kulkarni – Winner India round, middle school China Bridge Competition 2020',
  'Jui Kahate - Winner India round, middle school China Bridge Competition 2021 - received 6 months scholarship for advanced Chinese study',
  'Ishani Kotwal, Omkar Bhole, Anuprita Lele, Jui Kahate, Gaytree Joshi, Vaibhavi Gosavi, Mrunal Shah, Anup Dravid – Beijing Normal University’s Philosophy Summer School Program – 2021',
  'Gaytree Joshi – Winter program by Beijing Normal University – 2021 & 2022',
  'Arya Satoskar - Shanghai Theatre Academy scholarship – 2023',
  'Aniruddha Joshi, Gayatree Joshi -Philosophy Summer school program at Beijing normal university – 2023',
  'Tanisha Jadhav - Contestant for International round, middle school China Bridge Competition at Beijing, Dali & Kunming University – 2023, received 6 months scholarship for advanced Chinese study',
  'Neha Kulkarni, Aryaa Bagade – Winner talent award, China bridge India round 2023',
  'Gaytree Joshi, Saee Vaidya - Shanghai Theatre Academy scholarship – 2024',
  'Shivani Oak - Philosophy Summer school program at Beijing Normal University – 2024',
  'Juee Vaidya - Contestant for International round, middle school China Bridge Competition at Beijing & Tianjin University – 2024, received 6 months scholarship for advanced Chinese study',
  'Arya Bagade - One-year scholarship to study Chinese language at Beijing Language & Culture University – 2024-25',
  'Yashodhara – International volunteer at Jinhua Homestay Project 2015, Philosophy Summer school program at Beijing Normal University – 2016, Teachers Training Program at East China University – 2017',
];

export default function AchievementsPage() {
  // Duplicate the achievements data for seamless scrolling
  const duplicatedAchievements = [...achievementsData, ...achievementsData];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Achievements Carousel Section */}
      <div className="container mx-auto px-6 py-16 flex-grow">
        <h2
          className="text-6xl font-bold text-teal-600 mb-16 mt-8 text-left lg:scale-y-[1.20]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Achievements
        </h2>

        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll">
            {duplicatedAchievements.map((achievement, index) => {
              // Determine if the current index is odd or even
              const isOdd = index % 2 !== 0;

              // Set text alignment based on image position
              const textAlignment = isOdd ? 'text-left ml-6' : 'text-right mr-6';

              return (
                <div
                  key={`${achievement.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 lg:w-1/3 px-6 py-8"
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105 flex flex-col h-full">
                    {/* Image Section */}
                    <img
                      src={achievement.image}
                      alt={`Achievement ${achievement.id} - ${achievement.text}`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />

                    {/* Text Section */}
                    <div className={`p-6 flex-grow ${textAlignment}`}>
                      <p
                        className="text-gray-800 text-center text-lg md:text-xl font-medium leading-relaxed"
                        style={{ fontFamily: 'Quicksand' }}
                      >
                        {achievement.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Other Achievements and Awards Section */}
      <div className="container mx-auto px-6 pb-16">
        <h3
          className="text-4xl font-semibold text-teal-600 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Other Achievements and Awards for Yin-Yang
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievementsData.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p
                className="text-gray-700 text-md md:text-lg"
                style={{ fontFamily: 'Quicksand' }}
              >
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Custom Styles for Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
