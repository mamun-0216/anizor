import React from "react";

const items = [
  { name: "Gown", image: "/assets/fashion1.jpg" },
  { name: "Co-ord", image: "/assets/fashion2.jpg" },
  { name: "Kaftan", image: "/assets/fashion3.jpg" },
  { name: "Saree", image: "/assets/fashion4.jpg" },
  { name: "Lehenga", image: "/assets/fashion5.jpg" },
  { name: "Tops", image: "/assets/fashion6.jpg" },
  { name: "Kurti", image: "/assets/fashion7.jpg" },
  { name: "Maxi", image: "/assets/fashion8.jpg" },
  { name: "Abaya", image: "/assets/fashion9.jpg" },
  { name: "Western Set", image: "/assets/fashion10.jpg" },
  { name: "Two Piece", image: "/assets/fashion11.jpg" },
  { name: "Luxury Suit", image: "/assets/fashion12.jpg" },
];

const FashionOnTrend = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-serif mb-8 text-center">
        Fashion On Trend
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FashionOnTrend;
