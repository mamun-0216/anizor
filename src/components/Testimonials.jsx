import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sara Rahman",
    image: "/assets/customer1.jpg",
    message: "The quality is exceptional. I love the modern yet traditional vibe!",
  },
  {
    name: "Nadia Chowdhury",
    image: "/assets/customer2.jpg",
    message: "Anizor’s dresses are elegant and fit perfectly. Highly recommended!",
  },
  {
    name: "Farzana Ahmed",
    image: "/assets/customer3.jpg",
    message: "I wore their Kaftan to a party — everyone asked where I got it!",
  },
  {
    name: "Mahira Hasan",
    image: "/assets/customer4.jpg",
    message: "Their collection truly reflects premium craftsmanship. Loved it!",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const visible = testimonials.slice(index, index + 3).concat(testimonials.slice(0, Math.max(0, index + 3 - testimonials.length)));

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-serif text-center mb-8">What Our Customers Say</h2>
      <div className="flex justify-center space-x-6 overflow-hidden">
        {visible.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md w-72 p-6 text-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3">“{t.message}”</p>
            <p className="font-semibold text-gray-900">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
