import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  const faqs = [
    { question: "How is the language?", answer: "Studying Chinese at Yin Yang unlocks career opportunities in international trade, diplomacy, and key industries like automotive, IT, manufacturing, and pharmaceuticals. Our expert guidance connects you with global prospects across these sectors and more." },
    { question: "Why Chinese?", answer: "Chinese opens doors to understanding China’s culture and global influence. Yin Yang provides a comprehensive learning experience to boost both your career and personal growth." },
    { question: "Examination", answer: "At Yin Yang, we offer HSK certification for those aiming to master Mandarin. If you're not pursuing certification, you can also choose Chinese as an optional language for your HSC board exams, with our tailored programs ensuring your success either way." },
    { question: "How is the language?", answer: "We teach Mandarin, the official Chinese dialect, ensuring you master the standard language used in both formal and everyday contexts. Chinese is unique and rewarding, featuring pictorial script and tonal elements. At Yin Yang, we make learning engaging and accessible, guiding you through these distinctive aspects with expert support." },
    { question: "Demo Class", answer: "Join our free demo class every month to experience our teaching style and see how Yin Yang can meet your needs." },
    { question: "Types of Translation/Interpretation", answer: "Yin Yang offers professional translation and interpretation services for business, legal, and live events, ensuring accurate communication." },
    { question: "What is the ideal age to learn a language?", answer: "There's no perfect age to start learning a language. At Yin Yang, we offer courses for all ages, so it's never too early or too late to begin your journey with Chinese.Our YCT courses are designed for children as young as 6 years old, making learning Chinese fun and engaging while laying a strong foundation for their future." },
    { question: "Can I learn only spoken Chinese, and should I learn Hanzi for basic spoken skills?", answer: "Yes, you can focus solely on spoken Chinese with our courses designed for speaking and listening. Learning Hanzi (Chinese characters) is optional and can be pursued later if you wish to enhance your skills further." },
  ];

  return (
    <div className="max-w-full mx-auto bg-teal-600 p-6 lg:p-12 rounded-lg shadow-lg">
      <h2 className="text-5xl mx-20 mt-10 lg:scale-y-[1.20] text-left text-white font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 mx-20 mb-10 text-white" style={{ fontFamily: 'Quicksand' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-lg font-medium">{index + 1}. {faq.question}</span>
              <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
