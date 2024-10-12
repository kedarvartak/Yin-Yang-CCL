// src/pages/Secure.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Secure() {
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
                China’s Global Security Initiative
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                Exploring China's strategy to become a global security provider.
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
                Introduction to the Global Security Initiative (GSI)
              </h2>
              <p>
                China, as one of the largest military powers globally, has launched the Global Security Initiative (GSI) under President Xi Jinping’s leadership at the Boao Forum for Asia on April 21, 2022. The initiative positions China as a key player in global security, aiming to replace the USA's role as the dominant security provider. The GSI emphasizes a cooperative, comprehensive, and sustainable global security framework, focusing on "indivisible security"—the idea that no nation’s security is separable from others in the region.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                China’s Critique of Current Security Mechanisms
              </h3>
              <p>
                Xi’s GSI is positioned as an alternative to the existing security alliances like NATO, which China criticizes as fostering a "cold war mentality." China views the rise of regional alliances such as AUKUS and the Quad as threats to its interests, especially in the Asia-Pacific region. The GSI, therefore, seeks to counter the influence of these alliances by advocating for a United Nations-centered security system that diminishes regional blocs.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                UN-Centered Security and China’s Role
              </h3>
              <p>
                China plays a significant role in UN peacekeeping operations (UNPKO) and is the second-largest financial contributor after the USA. Additionally, China is one of the five permanent members of the UN Security Council, which provides it with veto power. By emphasizing a UN-centric approach to global security, the GSI aligns with China’s strategic interests.
              </p>
              <p>
                Furthermore, the GSI seeks to expand the concept of security to include non-traditional threats such as pandemics, climate change, and non-state actors. China's criticism of unilateral sanctions imposed by Western nations, particularly in the context of the Russia-Ukraine conflict, underscores its call for a security system that avoids punitive measures and promotes a shared future for humanity.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Global Strategy of GSI
              </h3>
              <p>
                The GSI is part of China’s broader strategy, which includes initiatives like the Belt and Road Initiative (BRI) and the Global Development Initiative (GDI). Together, these programs aim to solidify China’s global influence by offering Chinese solutions to global challenges. GSI offers China a platform to extend its influence in global security, particularly in regions like Africa and South America.
              </p>
              <p>
                China is already promoting GSI in African countries through military training, intelligence sharing, and anti-terrorism measures, potentially shifting the regional security influence away from Western powers like the USA and France.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Challenges and Future Prospects
              </h3>
              <p>
                Despite its ambition, the GSI is still a developing concept. Some experts believe that China’s support for Russia in the Ukraine war, under the guise of "indivisible security," limits its broader acceptance. However, should China mediate between Ukraine and Russia successfully, it could significantly boost the credibility of GSI. The success of this initiative depends on China’s ability to shape global security norms without alienating Western nations.
              </p>
              <p>
                As China continues to push its GSI agenda, it will be interesting to observe how it competes with existing security alliances and whether it will be able to establish itself as a global security leader.
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
