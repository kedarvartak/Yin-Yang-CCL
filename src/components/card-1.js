import React from 'react';
import logo from '../components/assets/Vector.png'

// Card Component
function Card({ title, description, span = false }) {
  return (
    <div
      className={`border-4 border-red-500 p-6 rounded-lg shadow-xl hover:shadow-red-200 transition-shadow duration-300 ${
        span ? 'col-span-2' : ''
      } flex flex-col h-full w-full`}
    >
      {/* Logo and Title Container */}
      <div className="flex items-center mb-4">
        {/* Logo Placeholder */}
        <img
          src={logo}
          alt={`${title} Logo`}
          className="w-15 h-15 mr-4"
        />
        {/* Title */}
        <h3
          className="text-red-500 text-4xl font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p
        className="text-red-500 text-lg flex-grow"
        style={{ fontFamily: 'Quicksand' }}
      >
        {description}
      </p>
      
      {/* Optional: Add a button or link at the bottom */}
      {/* <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Learn More</button> */}
    </div>
  );
}

export default function UniqueComponent() {
  // Define an array of card data with span specifications
  const cardsData = [
    {
      title: "Exclusive Teaching",
      description:
        "At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.",
      span: true, // This card spans two columns
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
        "Broaden your geopolitical understanding by engaging in discussions on current events and trade agreements. This helps deepen your skills in Chinese language and world affairs.At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.At YinYang, we focus exclusively on teaching Chinese, ensuring a specialized and immersive learning experience tailored to your needs.",
      span: true, // This card spans two columns
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 bg-teal-100/40 p-6">
          <h2
            className="text-red-500 text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Makes <span className="text-teal-600">YinYang</span> Unique?
          </h2>
          <p
            className="text-red-500 mt-12 text-xl font-semibold mb-8"
            style={{ fontFamily: 'Quicksand' }}
          >
            YinYang offers unrivaled expertise in Chinese language and culture. From flexible scheduling to top-notch guidance, we provide everything you need for successful application and comprehensive Chinese experiences.
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              {/* You can add an image or icon here */}
              {/* Example: <img src="/path-to-image.jpg" alt="YinYang Logo" /> */}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
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
