// src/components/Associates.js
import React from 'react';

// Import your associates' logos
import khs from '../components/assets/khs.png';
import kpit from '../components/assets/kpit.png';
import kirloskar from '../components/assets/kirloskar solar.png';
import nie from '../components/assets/nie news paper.png';
import wordsmith from '../components/assets/wordsmith language solution.png';
import med from '../components/assets/University of Kansas Medical Center.png';
import vedanta from '../components/assets/vedanta limited.png';
import belrise from '../components/assets/BELRISE INDUSTRIES LIMITED.png';
import hyosung from '../components/assets/Hyosung T&D INDIA Pvt. Ltd..png';
import tsl from '../components/assets/TSL Consulting.png';
import ajanta from '../components/assets/Ajanta Universal Fabrics Ltd..webp';
import alta from '../components/assets/Alta Lab.png';
import bharat from '../components/assets/BHARAT FORGE.jpg';
import causis from '../components/assets/CAUSIS E-MOBILITY PRIVATE LIMITED.webp';
import coforge from '../components/assets/Coforge.webp';
import curiotory from '../components/assets/Curiotory.png';
import des from '../components/assets/Deccan Education Society.png';
import deepak from '../components/assets/Deepak Fertilisers.png';
import desai from '../components/assets/desai bandhu ambewale.png';
import dolphin from '../components/assets/Dolphin international.png';
import Firodia from '../components/assets/Firodia.jpg';
import ites from '../components/assets/ITESKUL.png';
import jnana from '../components/assets/jnana.jpg';
import lexi from '../components/assets/lexi.png';
import mills from '../components/assets/millenium.jpeg';
import sanjay from '../components/assets/sanjay.png';
import sp from '../components/assets/sp.png';
import surya from '../components/assets/surya.jpg';
import agsk from '../components/assets/agsk.jpeg';
import ftb from '../components/assets/ftb.jpeg';
import gb from '../components/assets/gb.webp';

// Combine all associates into a single array
const associates = [
  // First Group
  { src: khs, alt: 'KHS' },
  { src: kpit, alt: 'KPIT' },
  { src: kirloskar, alt: 'Kirloskar Solar' },
  { src: nie, alt: 'NIE Newspaper' },
  { src: wordsmith, alt: 'Wordsmith Language Solution' },
  { src: med, alt: 'University of Kansas Medical Center' },
  { src: vedanta, alt: 'Vedanta Limited' },
  { src: belrise, alt: 'Belrise Industries Limited' },
  { src: hyosung, alt: 'Hyosung T&D India Pvt. Ltd.' },
  { src: tsl, alt: 'TSL Consulting' },
  { src: jnana, alt: 'Jnana' },
  { src: lexi, alt: 'Lexi' },
  { src: mills, alt: 'Millennium' },
  { src: sanjay, alt: 'Sanjay' },
  { src: sp, alt: 'SP' },
  { src: surya, alt: 'Surya' },
  { src: ftb, alt: 'FTB' },
  { src: gb, alt: 'GB' },
  // Second Group
  { src: ajanta, alt: 'Ajanta Universal Fabrics Ltd.' },
  { src: alta, alt: 'Alta Lab' },
  { src: bharat, alt: 'Bharat Forge' },
  { src: causis, alt: 'CAUSIS E-Mobility Pvt. Ltd.' },
  { src: coforge, alt: 'Coforge' },
  { src: curiotory, alt: 'Curiotory' },
  { src: des, alt: 'Deccan Education Society' },
  { src: deepak, alt: 'Deepak Fertilisers' },
  { src: desai, alt: 'Desai Bandhu Ambewale' },
  { src: dolphin, alt: 'Dolphin International' },
  { src: Firodia, alt: 'Firodia' },
  { src: ites, alt: 'ITESKUL' },
  { src: agsk, alt: 'AGSK' },
];

export default function Associates() {
  return (
    <div className="w-full py-8 my-8 px-4 ">
      <h3
        className="text-6xl font-bold text-red-600 mb-12 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Associates
      </h3>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {associates.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center bg-gray-300 rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 aspect-[4/3]"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
