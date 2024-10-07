import React from "react";

// Placeholder Component for each Associate
const AssociatePlaceholder = ({ placeholder }) => {
  return (
    <div className="flex justify-center items-center w-full rounded-lg h-40 border border-gray-300 bg-gray-100">
      <img
        src={placeholder}
        alt="Associate Placeholder"
        className="w-full rounded-lg h-full object-cover"
      />
    </div>
  );
};

// Main Component for the Associates Section
const Associates = () => {
  // Array of placeholder image URLs
  const associatesRow1 = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const associatesRow2 = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const associatesRow3 = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="font-['Playfair_Display'] py-12">
      <h2 className="text-5xl lg:scale-y-[1.20] text-red-500 font-bold mt-10 text-left mx-16 mb-10">Our Associates</h2>
      
      {/* First Row - 4 Logos */}
      <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-6 mb-6 px-16 rounded-md">
        {associatesRow1.map((placeholder, index) => (
          <AssociatePlaceholder key={index} placeholder={placeholder} />
        ))}
      </div>
      
      {/* Second Row - 4 Logos */}
      <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-6 mb-6 px-16 rounded-md">
        {associatesRow2.map((placeholder, index) => (
          <AssociatePlaceholder key={index} placeholder={placeholder} />
        ))}
      </div>

      {/* Third Row - 3 Logos */}
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-6 px-16 mb-10 rounded-md">
        {associatesRow3.map((placeholder, index) => (
          <AssociatePlaceholder key={index} placeholder={placeholder} />
        ))}
      </div>
    </div>
  );
};

export default Associates;
