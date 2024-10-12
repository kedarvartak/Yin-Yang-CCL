// src/components/Associates.js
import React, { useRef, useEffect, useState } from 'react';

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
  // Split the associates into three groups for the tickers
  const totalAssociates = associates.length;
  const chunkSize = Math.ceil(totalAssociates / 3);
  const associatesGroup1 = associates.slice(0, chunkSize);
  const associatesGroup2 = associates.slice(chunkSize, chunkSize * 2);
  const associatesGroup3 = associates.slice(chunkSize * 2);

  // Refs to the ticker containers
  const tickerRef1 = useRef(null);
  const tickerRef2 = useRef(null);
  const tickerRef3 = useRef(null);

  // State to store the width of the tickers
  const [tickerWidth1, setTickerWidth1] = useState(0);
  const [tickerWidth2, setTickerWidth2] = useState(0);
  const [tickerWidth3, setTickerWidth3] = useState(0);

  useEffect(() => {
    // Function to set the ticker widths
    const updateWidths = () => {
      if (tickerRef1.current) {
        setTickerWidth1(tickerRef1.current.scrollWidth / 2);
      }
      if (tickerRef2.current) {
        setTickerWidth2(tickerRef2.current.scrollWidth / 2);
      }
      if (tickerRef3.current) {
        setTickerWidth3(tickerRef3.current.scrollWidth / 2);
      }
    };

    updateWidths();

    // Add event listener to update widths on window resize
    window.addEventListener('resize', updateWidths);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-8 my-8">
      <h3
        className="text-6xl font-bold text-red-600 mb-12 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Associates
      </h3>

      {/* Include the CSS styles within a style tag */}
      <style>{`
        .ticker-wrapper {
          overflow: hidden;
          position: relative;
        }

        .ticker {
          display: flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .ticker__item {
          flex: 0 0 auto;
          margin-right: 1rem;
        }

        .ticker__item-inner {
          width: 12rem;
          height: 8rem;
          background-color: #C9C4C4; /* Dark grey background */
        }

        @media (max-width: 768px) {
          .ticker__item-inner {
            width: 10rem;
            height: 6rem;
          }
        }
      `}</style>

      {/* Ticker 1 */}
      <div className="ticker-wrapper mb-8">
        <div
          className="ticker"
          ref={tickerRef1}
          style={{
            animationName: 'tickerAnimation1',
            animationDuration: `${tickerWidth1 / 50}s`,
          }}
        >
          {/* Duplicate logos for seamless scrolling */}
          {[...associatesGroup1, ...associatesGroup1].map((logo, index) => (
            <div key={`group1-${index}`} className="ticker__item">
              <div className="ticker__item-inner flex justify-center items-center rounded-lg border border-gray-300 p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
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
        <style>{`
          @keyframes tickerAnimation1 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${tickerWidth1}px);
            }
          }
        `}</style>
      </div>

      {/* Ticker 2 */}
      <div className="ticker-wrapper mb-8">
        <div
          className="ticker"
          ref={tickerRef2}
          style={{
            animationName: 'tickerAnimation2',
            animationDuration: `${tickerWidth2 / 50}s`,
            animationDirection: 'reverse',
          }}
        >
          {/* Duplicate logos for seamless scrolling */}
          {[...associatesGroup2, ...associatesGroup2].map((logo, index) => (
            <div key={`group2-${index}`} className="ticker__item">
              <div className="ticker__item-inner flex justify-center items-center rounded-lg border border-gray-300 p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
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
        <style>{`
          @keyframes tickerAnimation2 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${tickerWidth2}px);
            }
          }
        `}</style>
      </div>

      {/* Ticker 3 */}
      <div className="ticker-wrapper">
        <div
          className="ticker"
          ref={tickerRef3}
          style={{
            animationName: 'tickerAnimation3',
            animationDuration: `${tickerWidth3 / 50}s`,
          }}
        >
          {/* Duplicate logos for seamless scrolling */}
          {[...associatesGroup3, ...associatesGroup3].map((logo, index) => (
            <div key={`group3-${index}`} className="ticker__item">
              <div className="ticker__item-inner flex justify-center items-center rounded-lg border border-gray-300 p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
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
        <style>{`
          @keyframes tickerAnimation3 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${tickerWidth3}px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
