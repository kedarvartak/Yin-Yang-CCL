import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import founderImage from '../components/assets/yasho.jpg'; // Add your founder image path here

export default function About() {
  return (
    <div>
      <Navbar />
      
      {/* About Section */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        {/* Title */}
        <h1
          className="text-6xl font-bold text-red-600 text-center lg:text-left mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Know <br />
          <span className="text-black">Our Founder</span>
        </h1>
        
        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-12">
            <img 
              src={founderImage} 
              alt="Mrs. Yashodhara Gadgil, Founder" 
              className="rounded-lg shadow-lg w-full object-cover"
              style={{ minHeight: '600px' }} // Adjust the minHeight as needed
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-2/3">
            <p className="text-gray-700 leading-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Mrs. Yashodhara Gadgil is a highly accomplished Mandarin Chinese language professional 
              with over a decade of experience in the field. Her work spans various roles, including 
              <span className="text-red-600 font-semibold"> interpreter and translator</span> for multinational companies and the <span className="text-red-600 font-semibold">Government of India</span>.
              Yashodhara’s deep passion for Chinese language and culture has taken her to  
              <span className="text-red-600 font-semibold"> China eight times</span>, where she engaged in 
              study programs and volunteered for projects such as China's tourism homestay initiative, 
              gaining invaluable insights into the country’s rich heritage.
            </p>

            <p className="text-gray-700 mt-4 leading-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Academically, she holds a <span className="text-red-600 font-semibold">Master’s in China Studies</span>, 
              specializing in the Chinese economy, politics, international relations, and more—making her 
              one of the few people with an in-depth understanding of China. She has also completed <span className="text-red-600 font-semibold">two 
              residential language courses equivalent to international certification level 5 (HSK 5)</span> from 
              prestigious institutions—<span className="text-red-600 font-semibold">Suzhou Normal University</span> 
              and <span className="text-red-600 font-semibold">Beijing Language and Culture University</span>.
              Furthermore, she is a <span className="text-red-600 font-semibold">certified language teacher</span> recognized by the <span className="text-red-600 font-semibold">Government of China</span> and has been <span className="text-red-600 font-semibold">awarded scholarships</span> to study Chinese philosophy at Beijing Normal University and complete the <span className='text-red-600 font-semibold'>Asia Slate China 101 Capsule course</span>.

            </p>

            <p className="text-gray-700 mt-4 leading-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Beyond her impressive credentials, Yashodhara has contributed significantly to the academic 
              community by <span className="text-red-600 font-semibold">co-authoring Chinese language textbooks </span> 
              for the <span className="text-red-600 font-semibold">Maharashtra State Board</span> and co-translating blog series that made Chinese news accessible 
              to English-speaking audiences. She has written articles on Chinese language and career opportunities, 
              featured in publications like <span className="text-red-600 font-semibold">Maharashtra Times</span>.
            </p>
            
            <p className="text-gray-700 mt-4 leading-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Yashodhara’s dedication extends to her teaching, where she is known for creating a secure, 
              engaging environment. Her classes are not just about learning a language; they are about 
              exploring a culture. She is always there for her students, making each session interactive 
              and enjoyable. Her warmth and enthusiasm make her not just a teacher but a mentor who genuinely 
              cares about her students’ success.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 lg:px-0">
  {/* Team Title */}
  <h2 className="text-5xl scale-y-[1.20] font-bold text-teal-600 text-center lg:text-left mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
    Our Team
  </h2>

  {/* Team Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Team Member 1 */}
    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Col. Kiran Kanade (Retd.)
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Master's in Chinese Language</li>
        <li>Translator & Interpreter for the Indian Government</li>
        <li>Contributor to Bal Bharti and Maharashtra Government HSC Textbooks</li>
      </ul>
    </div>

    {/* Team Member 2 */}
    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Ishani Kotwal
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Master's in China Studies</li>
        <li>HSK 5 Certified</li>
        <li>Asia Slate - China 101 Certificate</li>
        <li>Nanjing University Certificate Course</li>
        <li>International Volunteer for China Tourism Project</li>
        <li>Shanghai Theatre Academy Scholarship Recipient</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
      </ul>
    </div>

    {/* Team Member 3 */}
    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Neha Kulkarni
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Pursuing LLB</li>
        <li>HSK 5 Certified</li>
        <li>Winner of China Bridge Competition 2020 Middle School India Finals</li>
        <li>Best Talent Award at China Bridge Competition 2023 College Group India Finals</li>
      </ul>
    </div>

    {/* Team Member 4 */}
    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Omkar Bole
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Master's in China Studies</li>
        <li>HSK 5 Certified</li>
        <li>Asia Slate - China 101 Certificate</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
        <li>Academician</li>
      </ul>
    </div>

    {/* Additional Team Members */}
    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Shreya Ranade
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Chinese Government Teachers Training Scholarship Program Recipient</li>
        <li>HSK 6 Certified, Shanghai Theatre Academy Scholarship Recipient</li>
        <li>Master's in Chinese Language Interpretation & Translation from Swansea University, UK</li>
        <li>Bachelor's in Chinese Language and Culture from Suzhou University</li>
      </ul>
    </div>

    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Jui Kahate
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>BCS</li>
        <li>HSK 5 Certified</li>
        <li>Winner of China Bridge Competition 2021 Middle School India Finals</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
      </ul>
    </div>

    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Shivani Oak
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>MA in International Relations</li>
        <li>Pursuing HSK 5</li>
        <li>Beijing Language & Culture University Certificate</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
      </ul>
    </div>

    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Eepsita Kelkar
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>BA, MBA</li>
        <li>HSK 4 Certified</li>
        <li>China India Cultural Exchange Scholarship Program Recipient</li>
      </ul>
    </div>

    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Anuprita Lele
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>Master's in China Studies</li>
        <li>HSK 5 Certified</li>
        <li>Asia Slate - China 101 Certificate</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
      </ul>
    </div>

    <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150x200"
        alt="Team Member"
        className="mb-4 w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Gayatree Joshi
      </h3>
      <ul className="list-disc ml-6" style={{ fontFamily: "'Quicksand', sans-serif'" }}>
        <li>BA, Pursuing MBA</li>
        <li>Pursuing HSK 5</li>
        <li>Beijing Normal University's Philosophy Summer Program Scholarship Recipient</li>
        <li>Shanghai Theatre Academy Scholarship Program Recipient</li>
      </ul>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}
