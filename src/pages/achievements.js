// src/components/AchievementsPage.js
import React, { useMemo, useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import stud from '../components/assets/2 students got award in Chinese Bridge Middle school competetion  april 17.jpg';
import prize from '../components/assets/Student got 1st price in china india bridge competetion July 18.jpg';
import team from '../components/assets/team.png';
import inter from '../components/assets/inter.jpg';
import chancellor from '../components/assets/chancellor.jpg';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';
import { FaAward, FaUniversity, FaUserGraduate, FaGlobeAsia } from 'react-icons/fa';
import jinhua from "../components/assets/jinhua.jpg"

const achievementsData = [
  {
    id: 10,
    text: 'Our founder Mrs. Yashodhara Gadgil proudly serves as the official interpreter between the mayors of Pune and China, fostering global connections and collaboration.',
    image: jinhua,
  },
  {
    id: 1,
    text: '2 students got award in Chinese Bridge Middle school competition April 17',
    image: stud,
  },
  {
    id: 2,
    text: 'Student got 1st prize in China India Bridge competition July 18',
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

// Refactored Other Achievements and Awards Data with Year Information
const otherAchievementsData = [
  {
    text: 'Viral Shah – One-year scholarship to study Chinese language at Zhengzhou Normal University',
    year: 2018,
  },
  {
    text: 'Vrushali Pirangute – One-year scholarship to study Chinese language at Zhengzhou Normal University',
    year: 2018,
  },
  {
    text: 'Ishani Kotwal, Spruha Kulkarni, Ashwini Savargaonkar, Gouri Pendse, Kalyani Agashe, Poorvshri Pendse – International volunteers at Jinhua homestay project',
    year: 2017,
  },
  {
    text: 'Shreya Ranade – Shanghai Theatre Academy scholarship',
    year: 2017,
  },
  {
    text: 'Ankita Vikhankar – One Belt One Road scholarship',
    year: 2017,
  },
  {
    text: 'Madhura Gokhale, Prabhavati Inamdar, Shraddha Warde, Chandrika Kanetkar, Shreya Ranade – Teachers Training Program at East China University',
    year: 2017,
  },
  {
    text: 'Eepsita Kelkar, Malvika Chavan – Culture exchange program for China bridge at Kunming University',
    year: 2017,
  },
  {
    text: 'Ishani Kotwal - Shanghai Theatre Academy scholarship',
    year: 2018,
  },
  {
    text: 'Tanmay Salvekar – Contestant for International round, middle school China Bridge Competition at Beijing & Kunming University – received 6 month scholarship for advanced Chinese study',
    year: 2018,
  },
  {
    text: 'Shreya Ranade – One-year scholarship to study Chinese language at Nanjing Normal University',
    year: 2019,
  },
  {
    text: 'Shreya Ranade – 4 years scholarship for graduation in Chinese language and literature',
    year: 2023,
  },
  {
    text: 'Neha Kulkarni – Winner India round, middle school China Bridge Competition',
    year: 2020,
  },
  {
    text: 'Jui Kahate - Winner India round, middle school China Bridge Competition - received 6 months scholarship for advanced Chinese study',
    year: 2021,
  },
  {
    text: 'Ishani Kotwal, Omkar Bhole, Anuprita Lele, Jui Kahate, Gaytree Joshi, Vaibhavi Gosavi, Mrunal Shah, Anup Dravid – Beijing Normal University’s Philosophy Summer School Program',
    year: 2021,
  },
  {
    text: 'Gaytree Joshi – Winter program by Beijing Normal University',
    year: 2022,
  },
  {
    text: 'Arya Satoskar - Shanghai Theatre Academy scholarship',
    year: 2023,
  },
  {
    text: 'Aniruddha Joshi, Gayatree Joshi - Philosophy Summer school program at Beijing Normal University',
    year: 2023,
  },
  {
    text: 'Tanisha Jadhav - Contestant for International round, middle school China Bridge Competition at Beijing & Tianjin University – received 6 months scholarship for advanced Chinese study',
    year: 2023,
  },
  {
    text: 'Neha Kulkarni, Aryaa Bagade – Winner talent award, China bridge India round',
    year: 2023,
  },
  {
    text: 'Gaytree Joshi, Saee Vaidya - Shanghai Theatre Academy scholarship',
    year: 2024,
  },
  {
    text: 'Shivani Oak - Philosophy Summer school program at Beijing Normal University',
    year: 2024,
  },
  {
    text: 'Juee Vaidya - Contestant for International round, middle school China Bridge Competition at Beijing & Tianjin University – received 6 months scholarship for advanced Chinese study',
    year: 2024,
  },
  {
    text: 'Arya Bagade - One-year scholarship to study Chinese language at Beijing Language & Culture University',
    year: 2024,
  },
  {
    text: 'Yashodhara Gadgil – International volunteer at Jinhua Homestay Project 2015, Philosophy Summer school program at Beijing Normal University – 2016, Teachers Training Program at East China University',
    year: 2017, // Latest year in the entry
  },
];

// Function to sort achievements in descending order based on year
const sortAchievementsDescending = (achievements) => {
  // Create a shallow copy to avoid mutating the original array
  return [...achievements].sort((a, b) => b.year - a.year);
};

export default function AchievementsPage() {
  // Remove duplicated achievements and animation-related code
  const sortedOtherAchievements = useMemo(
    () => sortAchievementsDescending(otherAchievementsData),
    []
  );

  // Function to render achievement text with bolded names and underlined achievements
  const renderAchievementText = (text) => {
    // Split the text at the first occurrence of '–' or '-'
    const separator = text.includes('–') ? '–' : '-';
    const parts = text.split(separator);

    if (parts.length >= 2) {
      const names = parts[0].trim();
      const description = parts.slice(1).join(separator).trim();

      return (
        <>
          <strong>{names}</strong> {separator}{' '}
          <span className="underline">{description}</span>
        </>
      );
    }

    // If no separator is found, return the text as is
    return text;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <WhatsApp />
      <WhatsAppAndScrollToTop />
      <Navbar />

      {/* Achievements Grid Section */}
      <div className="container mx-auto px-6 py-16 flex-grow">
        <h2
          className="text-5xl sm:text-5xl lg:text-6xl font-bold text-teal-600 mb-16 mt-8 text-left lg:scale-y-[1.20]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Achievements
        </h2>

        {/* Static Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={achievement.image}
                  alt={`Achievement ${achievement.id} - ${achievement.text}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

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
          ))}
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
          {sortedOtherAchievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-start"
            >
              <div className="flex-shrink-0 mr-4 mt-1">
                {achievement.text.includes('scholarship') ? (
                  <FaUniversity className="text-teal-600 text-2xl" />
                ) : achievement.text.includes('award') ||
                  achievement.text.includes('Winner') ? (
                  <FaAward className="text-teal-600 text-2xl" />
                ) : achievement.text.includes('Program') ||
                  achievement.text.includes('exchange') ? (
                  <FaGlobeAsia className="text-teal-600 text-2xl" />
                ) : (
                  <FaUserGraduate className="text-teal-600 text-2xl" />
                )}
              </div>
              <div>
                <p
                  className="text-gray-800 text-sm sm:text-base md:text-lg"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {renderAchievementText(achievement.text)}{' '}
                  {achievement.year ? (
                    <span className="text-teal-600 font-semibold">
                      ({achievement.year})
                    </span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
