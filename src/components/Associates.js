// src/components/Associates.js
import React from "react";

// First Group of Associates
import khs from "../components/assets/khs.png";
import kpit from "../components/assets/kpit.png";
import kirloskar from "../components/assets/kirloskar solar.png";
import nie from "../components/assets/nie news paper.png";
import wordsmith from "../components/assets/wordsmith language solution.png";
import med from "../components/assets/University of Kansas Medical Center.png";
import vedanta from "../components/assets/vedanta limited.png";
import belrise from "../components/assets/BELRISE INDUSTRIES LIMITED.png";
import hyosung from "../components/assets/Hyosung T&D INDIA Pvt. Ltd..png";
import tsl from "../components/assets/TSL Consulting.png";

// Second Group of Associates
import ajanta from "../components/assets/Ajanta Universal Fabrics Ltd..webp";
import alta from "../components/assets/Alta Lab.png";
import bharat from "../components/assets/BHARAT FORGE.jpg";
import causis from "../components/assets/CAUSIS E-MOBILITY PRIVATE LIMITED.webp";
import coforge from "../components/assets/Coforge.webp";
import curiotory from "../components/assets/Curiotory.png";
import des from "../components/assets/Deccan Education Society.png";
import deepak from "../components/assets/Deepak Fertilisers.png";
import desai from "../components/assets/desai bandhu ambewale.png";
import dolphin from "../components/assets/Dolphin international.png";
import Firodia from '../components/assets/Firodia.jpg'
import ites from '../components/assets/ITESKUL.png'
import jnana from '../components/assets/jnana.jpg'
import lexi from '../components/assets/lexi.png'
import mills from '../components/assets/millenium.jpeg'
import sanjay from '../components/assets/sanjay.png'
import sp from '../components/assets/sp.png'
import surya from '../components/assets/surya.jpg'
import agsk from '../components/assets/agsk.jpeg'
import ftb from '../components/assets/ftb.jpeg'
import gb from '../components/assets/gb.webp'

// First Array of Associates
const associatesGroup1 = [
  { src: khs, alt: "KHS" },
  { src: kpit, alt: "KPIT" },
  { src: kirloskar, alt: "Kirloskar Solar" },
  { src: nie, alt: "NIE Newspaper" },
  { src: wordsmith, alt: "Wordsmith Language Solution" },
  { src: med, alt: "University of Kansas Medical Center" },
  { src: vedanta, alt: "Vedanta Limited" },
  { src: belrise, alt: "Belrise Industries Limited" },
  { src: hyosung, alt: "Hyosung T&D India Pvt. Ltd." },
  { src: tsl, alt: "TSL Consulting" },
  { src: jnana, alt: "TSL Consulting" },
  { src: lexi, alt: "TSL Consulting" },
  { src: mills, alt: "TSL Consulting" },
  { src: sanjay, alt: "TSL Consulting" },
  { src: sp, alt: "TSL Consulting" },
  { src: surya, alt: "TSL Consulting" },
  { src: ftb, alt: "TSL Consulting" },
  { src: gb, alt: "TSL Consulting" },
];

// Second Array of Associates
const associatesGroup2 = [
  { src: ajanta, alt: "Ajanta Universal Fabrics Ltd." },
  { src: alta, alt: "Alta Lab" },
  { src: bharat, alt: "Bharat Forge" },
  { src: causis, alt: "CAUSIS E-Mobility Pvt. Ltd." },
  { src: coforge, alt: "Coforge" },
  { src: curiotory, alt: "Curiotory" },
  { src: des, alt: "Deccan Education Society" },
  { src: deepak, alt: "Deepak Fertilisers" },
  { src: desai, alt: "Desai Bandhu Ambewale" },
  { src: dolphin, alt: "Dolphin International" },
  { src: Firodia, alt: "Firodia" },
  { src: ites, alt: "Firodia" },
  { src: agsk, alt: "Firodia" },
];

const Associates = ({ reverse = false, animationDuration = "10s" }) => {
  // Duplicate the arrays for seamless scrolling
  const tickerAssociates1 = [...associatesGroup1, ...associatesGroup1];
  const tickerAssociates2 = [...associatesGroup2, ...associatesGroup2];

  return (
    <div className="overflow-hidden w-full p-8 my-8">
      <h3
        className="text-6xl scale-y-120 font-bold text-red-600 mb-12 scale-y-[1.20] text-center "
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Associates
      </h3>
      
      {/* Container for Both Tickers with Space Between */}
      <div className="space-y-12">
        
        {/* First Ticker */}
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } ${reverse ? "animate-scrollRight" : "animate-scrollLeft"}`}
          style={{ animationDuration }}
        >
          {tickerAssociates1.map((logo, index) => (
            <div key={`group1-${logo.alt}-${index}`} className="flex-shrink-0 px-4">
              <div className="flex justify-center items-center w-48 h-40 rounded-lg border border-gray-300 bg-gray-300 p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Ticker */}
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } ${reverse ? "animate-scrollRight" : "animate-scrollLeft"}`}
          style={{ animationDuration }}
        >
          {tickerAssociates2.map((logo, index) => (
            <div key={`group2-${logo.alt}-${index}`} className="flex-shrink-0 px-4">
              <div className="flex justify-center items-center w-48 h-40 rounded-lg border border-gray-300 bg-gray-300 p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Associates;
