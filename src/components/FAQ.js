import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  const faqs = [
    { question: "Are there Opportunities in this field?", answer: "Yes, there are various opportunities in this field including teaching, translation, and business roles." },
    { question: "Why Chinese?", answer: "Chinese is one of the most spoken languages in the world, and learning it can open up opportunities in business and international relations." },
    { question: "Examination", answer: "We offer exams that are aligned with international Chinese proficiency standards." },
    { question: "How is the language?", answer: "Chinese is a tonal language with a rich history and culture." },
    { question: "Demo Class", answer: "You can book a demo class through our website to see if the course is right for you." },
    { question: "Types of Translation/Interpretation", answer: "We offer both translation and interpretation services in various sectors." },
    { question: "What is the ideal age to learn a language?", answer: "You can start learning a language at any age, but earlier exposure can help in mastering it faster." },
    { question: "Can I learn only spoken Chinese, and should I learn Hanzi for basic spoken skills?", answer: "Yes, you can focus on spoken Chinese, but learning Hanzi is highly recommended to understand the language fully." },
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
