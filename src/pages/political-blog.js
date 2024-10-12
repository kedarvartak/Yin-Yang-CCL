import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Marthree() {
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
                Political Representation to Ethnic Groups in China
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                An analysis of political representation for ethnic minorities in China's governance system.
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
                Introduction to China's Ethnic Diversity
              </h2>
              <p>
                China, as one of the world's oldest civilizations, has significant ethnic diversity. The Han community dominates with 91% of the population, while 55 ethnic minority communities make up the remaining share. Over time, many of these communities have migrated to China from neighboring regions or coexisted with the Han majority. Some of the notable non-Han ethnic groups include the Mongols, Uyghurs, Tibetans, Hui, and Zhuang.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Autonomous Regions for Ethnic Minorities
              </h3>
              <p>
                After the People's Republic of China was established in 1949, regions where ethnic minorities were concentrated were designated as autonomous regions. Currently, five autonomous regions exist—Inner Mongolia (Mongols), Xinjiang (Uyghurs), Tibet (Tibetan), Ningxia (Hui), and Guangxi (Zhuang). These regions have more legislative powers than other provinces, and ethnic minorities receive preferential representation in local governance.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                National-Level Representation
              </h3>
              <p>
                Although minority communities receive preferential representation at the regional level, their presence in national politics remains limited. For example, in the 20th National Party Congress of the Communist Party of China (CPC), only 11.5% of the delegates were from ethnic minorities. The number of ethnic communities represented also fell from 43 in the 19th Congress to 40 in the 20th Congress.
              </p>
              <p>
                In the powerful Central Committee of the CPC, ethnic representation has also declined, with only 33 minority delegates in the 20th Congress, compared to 42 in the previous Congress. This shrinking representation reflects an overall trend of reduced political participation for minority communities at the national level.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Representation in the Military
              </h3>
              <p>
                The representation of non-Han minorities in the military is even lower. Out of 66 military personnel elected to the 20th Central Committee, only one belonged to a non-Han ethnic group. Strategic military positions in minority-dominated regions like Xinjiang and Tibet are almost exclusively held by Han Chinese, reflecting limitations on minority promotions within the military.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Role of the United Front Work Department (UFWD)
              </h3>
              <p>
                The United Front Work Department (UFWD) is responsible for formulating policies related to ethnic minorities. Shi Taifeng, a Han Chinese, now leads the UFWD, marking a shift in leadership. Shi’s background in education policy suggests that the Chinese Communist Party (CPC) is intensifying its efforts to integrate non-Han communities into a unified national identity, which includes promoting Mandarin in schools of minority regions.
              </p>
              <p>
                Previously, the State Ethnic Affairs Commission, which operates under the UFWD, was typically headed by a member of a minority group. However, since 2020, Han Chinese leaders have taken charge of the commission, signaling a shift towards Han dominance in the administration of minority affairs.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Conclusion
              </h3>
              <p>
                Despite China's claims of achieving economic success in autonomous regions, the lack of political representation for ethnic minorities at the national level tells a different story. The underrepresentation of non-Han communities in high-level political, military, and administrative roles limits their influence in shaping policies that affect their communities. The push to create a unified national identity under Xi Jinping's leadership continues to blur the lines of ethnic diversity, as China's central government remains cautious about the risks of ethnic separatism and dissent.
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
