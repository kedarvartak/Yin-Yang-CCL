// src/components/UniqueComponent.js
import React from 'react';
import logo from '../components/assets/Vector.png';
import pattern from '../components/assets/design.png'; // Assuming the pattern image is imported

// Card Component
function Card({ title, description, span = false }) {
  return (
    <div
      className={`border-4 border-red-500 p-4 md:p-6 rounded-lg shadow-xl hover:shadow-red-200 transition-shadow duration-300 ${
        span ? 'md:col-span-2' : ''
      } flex flex-col h-full w-full`}
    >
      {/* Logo and Title Container */}
      <div className="flex items-center mb-2 md:mb-4">
        {/* Logo Placeholder */}
        <img src={logo} alt={`${title} Logo`} className="w-10 h-10 md:w-15 md:h-15 mr-2 md:mr-4" />
        {/* Title */}
        <h3
          className="text-red-500 text-2xl md:text-4xl font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-red-500 text-sm md:text-lg flex-grow" style={{ fontFamily: 'Quicksand' }}>
        {description}
      </p>
    </div>
  );
}

export default function UniqueComponent() {
  // Define an array of card data with span specifications
  const cardsData = [
    {
      title: "Exclusive Teaching",
      description:
        "At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.",
      span: true, // This card spans two columns on md screens
    },
    {
      title: "Flexible Sessions",
      description:
        "Whether you prefer learning from home or in-person, our sessions are customizable, easily adapted for various levels of proficiency, and offered to suit all schedules.",
      span: false,
    },
    {
      title: "Top-Notch Guidance for Certification",
      description:
        "We provide the best guidance to help you achieve international Chinese certification with confidence and professional expertise every step of the way.",
      span: false,
    },
    {
      title: "Scholarship Assistance",
      description:
        "Our dedicated team offers immediate assistance with Chinese-specific scholarships, opening doors to further education and teaching opportunities.",
      span: false,
    },
    {
      title: "Immersive Experience",
      description:
        "Experience the richness of Chinese culture by attending first-hand immersive sessions that will enrich both language and cultural understanding.",
      span: false,
    },
    {
      title: "Professional Translation Services",
      description:
        "YinYang offers expert translation services, delivering fast, reliable, and flawless communication in Chinese.",
      span: false,
    },
    {
      title: "Business Consultancy Expertise",
      description:
        "With our profound business consultancy, YinYang helps bridge important cultural gaps, providing market expertise and success in the Chinese market.",
      span: false,
    },
    {
      title: "Global Perspective",
      description:
        "Broaden your geopolitical understanding by engaging in discussions on current events and trade agreements. This helps deepen your skills in Chinese language and world affairs.",
      span: true, // This card spans two columns on md screens
    },
  ];

  return (
    <section className="bg-gray-50 py-6 md:py-10 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
        {/* Left Column */}
        <div className="md:col-span-1 bg-teal-100/40 p-4 md:p-6 relative z-10 overflow-hidden">
          {/* Background Pattern for Left Column */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-auto bg-center opacity-20 z-0"
            style={{ backgroundImage: `url(${pattern})` }}
          ></div>
          <h2
            className="text-red-500 text-5xl md:text-6xl font-bold mb-2 md:mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Makes <span className="text-teal-600">YinYang</span> Unique?
          </h2>
          <p
            className="text-red-500 mt-4 md:mt-6 text-base md:text-xl font-semibold mb-4 md:mb-8"
            style={{ fontFamily: 'Quicksand' }}
          >
            YinYang offers unrivalled expertise in Chinese language and culture. From flexible scheduling to top-notch guidance, we provide everything you need for successful application and comprehensive Chinese experiences.
          </p>
          <div className="flex justify-center">
            
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
            {cardsData.map((card, index) => (
              <Card 
                key={index}
                title={card.title}
                description={card.description}
                span={card.span}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
