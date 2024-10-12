import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import stud from '../components/assets/2 students got award in Chinese Bridge Middle school competetion  april 17.jpg';
import prize from '../components/assets/Student got 1st price in china india bridge competetion July 18.jpg';
import team from '../components/assets/team.png'
import inter from '../components/assets/inter.jpg'
import chancellor from '../components/assets/chancellor.jpg'
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import CallButton from '../components/call';

const achievementsData = [
  {
    id: 10,
    text: 'Our founder Mrs. Yashodhara Gadgil proudly serves as the official interpreter between the mayors of Pune and China, fostering global connections and collaboration.',
    image: chancellor,
  },

  {
    id: 1,
    text: '2 students got award in Chinese Bridge Middle school competition April 17',
    image: stud,
  },
  {
    id: 2,
    text: 'Student got 1st price in China India Bridge competition July 18',
    image: prize,
  },
  {
    id: 4,
    text: 'A dedicated team of 10+ teachers along with native and non-native speakers involved in student success.',
    image: team,
  },
  {
    id: 6,
    text: 'Established partnerships with international educational institutions.',
    image: inter,
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
      <WhatsApp/>
      <WhatsAppAndScrollToTop/>
      <Navbar />
      <CallButton/>
      {/* Achievements Carousel Section */}
      <div className="container mx-auto px-6 py-16 flex-grow">
        <h2
          className="text-5xl sm:text-5xl lg:text-6xl font-bold text-teal-600 mb-16 mt-8 text-left lg:scale-y-[1.20]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Achievements
        </h2>

        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll">
            {duplicatedAchievements.map((achievement, index) => (
              <div
                key={`${achievement.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 lg:w-1/3 px-4 py-8"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col h-full">
                  {/* Image Section */}
                  <img
                    src={achievement.image}
                    alt={`Achievement ${achievement.id} - ${achievement.text}`}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-3xl"
                    loading="lazy"
                  />

                  {/* Text Section */}
                  <div className="p-6 flex-grow text-left">
                    <p
                      className="text-gray-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
                      style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                      {achievement.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Achievements and Awards Section */}
      <div className="container mx-auto px-6 pb-16">
        <h3
          className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-teal-600 mb-8 text-left"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Other Achievements and Awards for YinYang
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievementsData.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

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

      <Footer />
    </div>
  );
}
