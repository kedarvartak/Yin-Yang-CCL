import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Marone() {
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
                चीनी भाषेचे स्वरूप
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                चीनी भाषा शिकण्यासाठी आवश्यक माहिती आणि तिच्या परीक्षांविषयी तपशील.
              </p>
              {/* Author Information */}
              <p
                className="text-sm sm:text-base text-gray-700 italic"
                style={{ fontFamily: 'Quicksand' }}
              >
                लेखक: Yashodhara Gadgil
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
                चीनी भाषेचे स्वरूप
              </h2>
              <p>
                चिनी भाषा ही तांत्रिकदृष्ट्या भाषा नाही तर मॅन्डरिन ही एक पैचिंग बीजिंग जवळ बोलली जाणारी एक बोली भाषा आहे. संपूर्ण चीनमध्ये दोनशेपेक्षा जास्त बोली भाषा अजूनही अस्तित्वात आहेत. त्यापैकी मुख्यत्वे मॅन्डरिन, कॅन्टनीज् (जी हाँगकाँग व दक्षिण चीन मध्ये बोलली जाते) तसेच हाका, वू, कान, मिन या इतर महत्त्वाच्या बोलीभाषा आहेत. मॅन्डरिन ही चिनी सरकारने राज्यभाषा म्हणून स्वीकारली आहे सर्व शिक्षण सरकारी कामकाज हे याच बोलीभाषेतून चालते.
              </p>
              <p>
                चिनी भाषा ही जगातील सर्वात अवघड भाषा म्हटली जाते पण ही अवघड नसून वेगळी आहे. चिनी भाषा शिकताना आपल्याला तीन गोष्टी शिकाव्या लागतात लिपी (हान् च्), उच्चार (फिन् यिन्) व टोन. चिनी भाषेत आद्याक्षरे बाराखडी नाही. प्रत्येक दिसणारं चित्र हा एक शब्द असतो. शिकताना आपण शब्द-शब्द शिकतो.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                चित्रलिपी आणि रॅडिकल्स
              </h3>
              <p>
                चिनी माणसाने तीन हजार वर्षांपूर्वी जे पाहिलं ते त्याने चित्र काढून सांगितलं. प्रत्येक शब्दात असा काही भाग असतो ज्यातून आपल्याला त्याच्या अर्थाचा अंदाज बांधता येतो. त्या भागाला रॅडिकल असे म्हणतात. एकदा का यातील बारकावे समजले कि ही लिहिताना खूप मजा येते. ही एक सर्वात जुनी लेखी भाषा आहे असं मानलं जातं.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                फिन् यिन् आणि टोनल भाषा
              </h3>
              <p>
                चिनी सरकारच्या एका कमिटीने चिनी भाषेच्या उच्चारांचे romanization केले, ज्यामुळे परदेशी विद्यार्थ्यांना ही भाषा योग्य उच्चारासकट शिकणे सोपे झाले. चीनी भाषा टोनल आहे, म्हणजे शब्दांच्या उच्चाराची फेक बदलली की शब्दाचा अर्थही बदलतो. उदाहरणार्थ, 'मा' या शब्दाचा एका टोन मधला अर्थ 'आई' आहे तर दुसऱ्या टोन मधला अर्थ 'घोडा' आहे.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                सोपं व्याकरण
              </h3>
              <p>
                चिनी भाषेत व्याकरणाचे नियम खूप सोपे आहेत. क्रियापद विशेषण यांचे रूप लिंगाप्रमाणे बदलत नाही, आणि इंग्रजीप्रमाणे 'ए', 'एन', 'द' अशी आर्टिकल्स नाहीत. त्यामुळे व्याकरण शिकणे सोपे होते.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                एच एस के आणि पातळ्या
              </h3>
              <p>
                चिनी सरकारने ही भाषेचे 6 स्तर केले आहेत ज्याला एच एस के म्हणतात. पहिल्या दोन परीक्षांना दीडशे-दीडशे शब्द असतात. तिसऱ्या परीक्षेपासून फक्त चिनी लिपी असते. HSK 6 पर्यंत साधारण पाच हजार शब्द येतात.
              </p>
              <p>
                माझ्या चिनी भाषा शिकवण्याच्या काही वर्षांच्या अनुभवावरून, एखाद्याने सलग दोन वर्षे भारतात राहून चिनी भाषेचा अभ्यास केला तर त्याच्या चार लेखी परीक्षा व दोन तोंडी परीक्षा इथेच राहून पूर्ण होऊ शकतात. या परीक्षेनंतर विद्यार्थ्याला चीनमध्ये जाऊन शिकण्याची शिष्यवृत्ती प्राप्त होऊ शकते.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                संधीचे दार
              </h3>
              <p>
                सहा महिने ते चार वर्षे अशा वेगवेगळ्या शिष्यवृत्या चीन व भारत सरकारने आता उपलब्ध करुन दिलेल्या आहेत. यानंतर भाषांतरकार व दुभाषी म्हणून काम सुरू करता येऊ शकते. प्रत्येक क्षेत्रात काय काय संधी उपलब्ध असू शकतात हे आपण पुढच्या लेखात बघू.
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
