// src/pages/Crisis.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Crisis() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="text-4xl sm:text-5xl font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                China’s Evolving Demographic Crisis
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                Understanding the impact of China's population decline and its global implications.
              </p>
              {/* Author Information */}
              <p
                className="text-sm sm:text-base text-gray-700 italic"
                style={{ fontFamily: 'Quicksand' }}
              >
                Author: Omkar Bhole
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <article className="prose lg:prose-xl mx-auto text-gray-700">
              <h2
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                China’s population in numbers
              </h2>
              <p>
                China’s National Bureau of Statistics (NBS) reported that China’s population decreased to 1.4118 billion in December 2022, from 1.4126 billion in 2021. This marks the first population decline since 1960, driven largely by China’s birth control policies. Additionally, it means that India is set to surpass China as the most populous country in the world this year, as predicted by the United Nations.
              </p>
              <p>
                In 2022, China’s birth rate fell to 6.77 per 1000 people, the lowest since 1949, resulting in only 9.56 million births, a 10% decrease from the previous year. Simultaneously, China’s death rate rose to 7.37 per 1000 people, with 10.41 million deaths recorded, highlighting a significant demographic shift.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Causes of China’s population decline
              </h3>
              <p>
                One of the major causes of China’s population decline is the long-standing ‘one child policy’ (一胎制), introduced in 1980. This policy severely restricted families to one child, with fines and punishments for violations. Though it was abolished in 2016 and replaced with pro-natalist policies like the 'three-child policy,' the effects of the ‘one child policy’ still linger.
              </p>
              <p>
                The societal shift towards small families, high living costs, career-oriented women delaying childbirth, and ideological differences about family systems also contribute to the declining birth rate. Cities like Shanghai, Guangzhou, and Shenzhen are some of the costliest cities globally, where young professionals face work pressures that discourage large families.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Impact of demographic changes
              </h3>
              <p>
                China’s shrinking working-age population poses challenges to its economic growth. The working-age population (ages 16 to 59) dropped by 0.5% in 2022. Meanwhile, the elderly population (ages 60 and above) reached 280 million, accounting for around 20% of the population. This places pressure on China’s social security system and reduces the supply of cheap labor, once a key advantage for the country.
              </p>
              <p>
                In response, China has adopted measures such as delaying the retirement age and emphasizing technological innovation to compensate for the shrinking workforce. These demographic shifts are reshaping China’s economic strategies, pushing the nation to focus on scientific and technological advancements.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What does it mean for India
              </h3>
              <p>
                As China’s population declines, India is set to become the world’s most populous nation. India’s demographic dividend is expected to last until 2056, offering a valuable opportunity for economic growth. However, it is crucial for India to learn from China’s experience and carefully manage its workforce, attract foreign businesses, and create sustainable employment opportunities for its young labor force.
              </p>
              <p>
                India must avoid the pitfalls that China faced while reaping the benefits of a young, cheap labor force. By carefully navigating these demographic changes, India has the potential to secure long-term economic prosperity.
              </p>

              {/* Back to Blogs Button */}
              <div className="text-center mt-8">
                <Link to="/blogs">
                  <button
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    style={{ fontFamily: 'Quicksand' }}
                    aria-label="Back to Blogs"
                  >
                    Back to Blogs
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
