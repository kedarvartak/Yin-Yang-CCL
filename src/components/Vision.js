import React from "react";

export const VisionMission = () => {
  return (
    <div className="bg-teal-500 text-white py-32 px-16 md:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Header Section */}
          <h2
            className="text-7xl font-semibold text-left mb-12 md:mb-0 md:mr-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Vision & Mission
          </h2>

          {/* Text Content */}
          <div className="text-xl leading-relaxed">
            <p
              className="mb-6 font-semibold text-justify"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              We aim to be your one-stop shop for everything related to China and
              the Chinese language, offering a comprehensive and immersive learning
              experience.
            </p>
            <p
              className="mb-6 text-justify"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              At Yin Yang, our vision is to be the ultimate hub for everything
              related to China, from language learning to cultural understanding.
              Our mission is to cultivate a thriving community of Chinese language
              experts who are equipped to play a pivotal role in shaping the future
              of Indo-China relations.
              As China remains our largest trade partner and a key neighbor, we
              recognize the growing need for Chinese language experts. Yin Yang
              strives to be a powerhouse in cultivating not just language
              proficiency but also a deep understanding of China's culture,
              economy, politics, and societal mindset, preparing our students to
              contribute meaningfully to international relations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
