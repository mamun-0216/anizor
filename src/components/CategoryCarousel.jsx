import React, { useState } from "react";

const categories = [
  { name: "Gown", image: "/assets/category1.jpg" },
  { name: "Kaftan", image: "/assets/category2.jpg" },
  { name: "Co-ord", image: "/assets/category3.jpg" },
  { name: "Saree", image: "/assets/category4.jpg" },
  { name: "Western", image: "/assets/category5.jpg" },
  { name: "Kurti", image: "/assets/category6.jpg" },
  { name: "Two Piece", image: "/assets/category7.jpg" },
  { name: "Luxury Suit", image: "/assets/category8.jpg" },
];

const CategoryCarousel = () => {
  const [start, setStart] = useState(0);
  const visibleCount = 5;

  const next = () => {
    setStart((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setStart((prev) =>
      prev === 0 ? categories.length - 1 : (prev - 1) % categories.length
    );
  };

  const visible = categories
    .slice(start, start + visibleCount)
    .concat(categories.slice(0, Math.max(0, start + visibleCount - categories.length)));

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-serif text-center mb-8">Explore Our Collections</h2>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prev}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full"
        >
          ‹
        </button>

        <div className="flex space-x-4 overflow-hidden">
          {visible.map((item, idx) => (
            <div
              key={idx}
              className="relative w-40 h-48 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black/50 text-white text-center w-full py-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default CategoryCarousel;
