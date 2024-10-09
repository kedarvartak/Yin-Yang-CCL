import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/whatsapp';
import WhatsAppAndScrollToTop from '../components/goUP';

export default function Teach() {
  return (
    <div>
      <Navbar />
      <WhatsApp/>
      <WhatsAppAndScrollToTop/>
      {/* Main Container */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* Title and Subtitle */}
        <div className="text-left lg:text-left mb-12">
          <h1 className="text-5xl lg:scale-y-[1.20] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What we teach at <span className="text-red-600">Yin Yang</span>
          </h1>
          <p className="text-black text-lg lg:text-xl" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            At Yin Yang, we teach more than just Mandarin. Our courses cover pronunciation, Chinese characters, history, culture, and business etiquette. Whether you're preparing for HSK exams or just want to improve your conversational skills, we have courses tailored to fit your needs.
          </p>
        </div>

        {/* Boxes for Course Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Beginner Level */}
          <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl lg:scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Beginner Level</h2>
            <p className="text-black text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Master pronunciation with the help of the phonetic chart and tones, learn 40+ grammar patterns, and build a 200+ word vocabulary. The course includes daily conversation practice, basic Chinese character calligraphy writing, audio-visual lessons, and an introduction to Chinese culture, history, and music.
            </p>
          </div>

          {/* Spoken Chinese Level */}
          <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl lg:scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Spoken Chinese Level</h2>
            <p className="text-black text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              This course covers essential grammar revision, vocabulary building, situational conversation, individual presentations, group discussions, colloquial Chinese, and role play. You'll also gain insights into Chinese history, culture, and traditions, with a focus on everyday Mandarin for practical, spoken communication.
            </p>
          </div>

          {/* Advanced Level Spoken Chinese */}
          <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl lg:scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Advanced Level Spoken Chinese</h2>
            <p className="text-black text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Designed for those looking to elevate their skills, this advanced course includes vocabulary building, business etiquettes, contextual dialogue, solo speaking practices, team dialogues, everyday Mandarin, and interactive scenarios. Additionally, it offers a deep dive into business-level Mandarin and an exploration of contemporary China.
            </p>
          </div>
        </div>

        {/* HSK Section */}
        <div className="container mx-auto py-16 px-4 lg:px-0">
          {/* HSK Title and Subtitle */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="text-left lg:text-left">
              <h2 className="text-5xl lg:scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hanyu Shuiping Kaoshi (HSK)
              </h2>
              <p className="text-black text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                The Hanyu Shuiping Kaoshi (HSK) is the official Chinese proficiency test, endorsed by Hanban (Chinese Language and cooperation center) and the Chinese Ministry of Education. At Yin Yang, we offer expert preparation for all six levels of the HSK exam.
              </p>
            </div>

            {/* Features Section */}
            <div className="mt-8 lg:mt-0 lg:ml-12 text-left lg:text-left">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Features
              </h3>
              <ul className="text-gray-700 space-y-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                <li><strong>1. Mock Tests:</strong> Regular practice exams to build confidence and identify areas for improvement.</li>
                <li><strong>2. Personalized Support:</strong> Dedicated guidance from experienced instructors throughout your HSK journey.</li>
                <li><strong>3. Study Material:</strong> From comprehensive textbooks to digital learning tools, each student receives carefully curated content that supports their learning journey.</li>
              </ul>
            </div>
          </div>

          {/* HSK Levels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HSK 1 & 2 */}
            <div className="bg-red-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl lg:scale-y-[1.20] text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>HSK <span  style={{ fontFamily: "'Quicksand', sans-serif" }}>1 & 2</span> </h3>
              <p className="text-white lg:scale-y-[1.20] text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                60 hours each
              </p>
              <p className='text-white' style={{ fontFamily: "'Quicksand', sans-serif" }}>Basics of grammar, vocabulary, reading, writing, listening, and speaking.</p> 
            </div>

            {/* HSK 3 & 4 */}
            <div className="bg-red-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl lg:scale-y-[1.20] text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>HSK <span  style={{ fontFamily: "'Quicksand', sans-serif" }}>3 & 4</span></h3>
              <p className="text-white lg:scale-y-[1.20] text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                3-130 hours (HSK 3) / 4-140 hours (HSK 4)
              </p>
              <p className='text-white' style={{ fontFamily: "'Quicksand', sans-serif" }}>Advanced grammar, expanded vocabulary, and deeper language skills with cultural exposure.</p> 
            </div>

            {/* HSK 5 */}
            <div className="bg-red-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl lg:scale-y-[1.20] text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>HSK <span  style={{ fontFamily: "'Quicksand', sans-serif" }}>5</span></h3>
              <p className="text-white lg:scale-y-[1.20] text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                200 hours
              </p>
              <p className='text-white' style={{ fontFamily: "'Quicksand', sans-serif" }}>Advanced grammar, expanded vocabulary, and deeper language skills with cultural exposure.</p> 
            </div>

            {/* HSK 6 */}
            <div className="bg-red-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl lg:scale-y-[1.20] text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>HSK <span  style={{ fontFamily: "'Quicksand', sans-serif" }}>6</span></h3>
              <p className="text-white lg:scale-y-[1.20] text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                250 hours
              </p>
              <p className='text-white' style={{ fontFamily: "'Quicksand', sans-serif" }}>Mastery level, refining skills to near-native proficiency across all aspects of the language.</p> 
            </div>
          </div>
        </div>

        {/* HSKK Section */}
        <div className="container mx-auto py-16 px-4 lg:px-0">
          {/* HSKK Title and Subtitle */}
          <div className="text-left lg:text-left mb-12">
            <h2 className="text-5xl scale-y-[1.20] font-bold text-teal-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hanyu Shuiping Kouyu Kaoshi (HSKK)
            </h2>
            <p className="text-black text-lg lg:text-xl" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              The Hanyu Shuiping Kouyu Kaoshi (HSKK) is a Chinese proficiency test focused exclusively on speaking. Complementary to the HSK exams, the HSKK assesses oral language skills and is conducted by Yin Yang at three levels.
            </p>
          </div>

          {/* HSKK Levels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* HSKK 1 */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>HSKK 1</h3>
              <p className="text-white text-lg scale-y-[1.20] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>(Beginner)</p>
              <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Can be taken after clearing HSK 2 or 3.
              </p>
            </div>

            {/* HSKK 2 */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>HSKK 2</h3>
              <p className="text-white text-lg scale-y-[1.20] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>(Intermediate)</p>
              <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Available after clearing HSK 4.
              </p>
            </div>

            {/* HSKK 3 */}
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>HSKK 3</h3>
              <p className="text-white text-lg scale-y-[1.20] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>(Advanced)</p>
              <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                The highest level, building on the foundation of previous levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yin Yang's Unique Courses Section */}
      <div className="bg-red-600 py-16 relative">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl scale-y-[1.20] text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Yin Yang's Unique Courses
          </h2>
        </div>

        {/* Course Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Course 1: Chinese Pronunciation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl scale-y-[1.20] font-bold text-red-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Chinese Pronunciation 
            </h3>
            <p className="text-gray-700 mb-2 font-bold text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              20 hours
            </p>
            <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Learn the basics of Chinese phonetics, pronunciation, tones, and daily vocabulary. Get acquainted with common names, greetings, numbers, and more, while exploring Chinese culture.
            </p>
          </div>

          {/* Course 2: Chinese Character Writing */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl scale-y-[1.20] font-bold text-red-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Chinese Character Writing
            </h3>
            <p className="text-gray-700 mb-2 font-bold text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              10 hours
            </p>
            <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Discover the evolution of Chinese script, from traditional to simplified characters. Practice stroke order, radicals, and writing techniques.
            </p>
          </div>

          {/* Course 3: Chinese Calligraphy */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl scale-y-[1.20] font-bold text-red-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Chinese Calligraphy
            </h3>
            <p className="text-gray-700 mb-2 font-bold text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              20 hours
            </p>
            <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Master Chinese calligraphy with lessons on brush handling, stroke order, and different styles using rice paper.
            </p>
          </div>

          {/* Course 4: Cultural Sensitization */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl scale-y-[1.20] font-bold text-red-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cultural Sensitization
            </h3>
            <p className="text-gray-700 font-bold text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              10-40 hours
            </p>
            <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Tailor your learning to include basic greetings or advanced business Chinese. Gain insights into Chinese culture, etiquette, and business manners.
            </p>
          </div>
        </div>

        {/* Chinese text decoration (optional) */}
        <div className="absolute bottom-0 left-0 opacity-20">
          <h1 className="text-white text-9xl font-bold">你好</h1>
        </div>
      </div>

      {/* Business Chinese Training (BCT) Section */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* BCT Title and Subtitle */}
        <div className="text-left lg:text-left mb-12">
          <h2 className="text-5xl scale-y-[1.20] font-bold text-teal-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Business Chinese Training (BCT)
          </h2>
          <p className="text-black text-lg lg:text-xl" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            The BCT (Business Chinese Training) course is designed to equip you with the language skills needed for professional environments. Prepare to excel in the world of Chinese business with our specialized training at Yin Yang.
            <br />    
            *Yin Yang recommends completing HSK 1 first to build a strong foundation in daily vocabulary.
          </p>
        </div>

        {/* BCT Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* BCT 1 */}
          <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BCT 1</h3>
            <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              The Business Chinese Test (BCT) Level 1 evaluates the basic language skills of non-native Chinese speakers, focusing on their ability to communicate effectively in everyday business and work-related situations.
            </p>
          </div>

          {/* BCT 2 */}
          <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BCT 2</h3>
            <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              BCT Level 2 tests intermediate language proficiency, assessing how well non-native Chinese speakers can handle more complex business interactions and tasks in real-world work environments.
            </p>
          </div>

          {/* BCT 3 */}
          <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-5xl scale-y-[1.20] font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BCT 3</h3>
            <p className="text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              BCT Level 3 (Oral) measures the spoken Chinese abilities of non-native speakers, focusing on their proficiency in navigating business conversations and completing verbal tasks in professional settings.
            </p>
          </div>
        </div>
      </div>

      {/* Youth Chinese Test (YCT) Section */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* Title and Subtitle */}
        <div className="text-left lg:text-left mb-12">
          <div className="lg:flex lg:justify-between mb-12">
            {/* Left Section: Title and Description */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-5xl scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Youth Chinese Test (YCT)
              </h2>
              <p className="text-gray-700 text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                For Ages 6-12: Ideal for younger students who aren't yet eligible for HSK 1 (which requires students to be 12+ years).
              </p>
            </div>

            {/* Right Section: Description */}
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Yin Yang offers the perfect start to mastering Mandarin, even for the youngest learners. The YCT (Youth Chinese Training) course is tailored specifically for children aged 6-12. This 4-level course focuses on daily vocabulary and is designed to make learning Mandarin fun and engaging.
              </p>
              <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                By the end of this course, children will not only be familiar with essential vocabulary but also have the skills to confidently navigate various parts of China. Additionally, they will have learned basic calligraphy, enhancing their cultural experience and connection with the language.
              </p>
            </div>
          </div>

          {/* YCT Levels Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* YCT Level 1 */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>YCT Level 1</h3>
              <p className="text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Designed for children with a vocabulary of around 80 words, YCT Level 1 enables students to understand and use basic Chinese words and sentences, laying a foundation for further Chinese study.
              </p>
            </div>

            {/* YCT Level 2 */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>YCT Level 2</h3>
              <p className="text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                For children with a vocabulary of approximately 150 words, YCT Level 2 focuses on basic communication. Passed students can understand and use simple Chinese phrases to meet essential communication needs.
              </p>
            </div>

            {/* YCT Level 3 */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>YCT Level 3</h3>
              <p className="text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                YCT Level 3 is for children with a vocabulary of around 300 words, allowing them to reach a primary proficiency in Chinese.
              </p>
            </div>

            {/* YCT Level 4 */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl scale-y-[1.20] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>YCT Level 4</h3>
              <p className="text-lg mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                This level is for children who have mastered over 600 words. Passed students can handle basic communication tasks related to daily life, study, and travel in China, making them capable of managing most routine interactions.
              </p>
            </div>
          </div>
        </div> 
      </div>

      {/* College Programs Section */}
      <div className="bg-yellow-400 py-16 relative">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
          {/* Left Side: Title */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-5xl scale-y-[1.20] font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Customized <br /> College Programs
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="lg:w-1/2">
            <p className="text-gray-800 text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              We design tailored Chinese language courses with flexible learning schedules, bringing expert instruction directly to your campus. According to the New Education Policy (NEP), you can earn academic credits through our courses, with 30 hours of study equating to 2 credits and 150 hours per year totaling 10 credits.
            </p>
          </div>
        </div>

        {/* CTA: Call-to-Action Section */}
        <div className="mt-12">
          <div className="container mx-auto bg-red-600 text-white rounded-full flex flex-col lg:flex-row justify-between items-center px-8 py-4 shadow-lg">
            <p className="text-xl font-bold lg:text-2xl text-center lg:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
              Could your campus be the next to go global with Chinese?
            </p>
            <a
              href="https://wa.me/919822089970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-bold py-2 px-6 rounded-full shadow-lg mt-4 lg:mt-0"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Optional Decorative Chinese Text */}
        <div className="absolute bottom-0 right-0 opacity-20">
          <h1 className="text-yellow-600 text-9xl font-bold">你好</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
