import React from "react";

const newArrivals = [
  { name: "Luxury Kaftan", image: "/assets/new1.jpg", price: "৳ 6,500" },
  { name: "Designer Gown", image: "/assets/new2.jpg", price: "৳ 8,200" },
  { name: "Silk Saree", image: "/assets/new3.jpg", price: "৳ 7,500" },
  { name: "Western Dress", image: "/assets/new4.jpg", price: "৳ 5,200" },
  { name: "Men's Panjabi", image: "/assets/new5.jpg", price: "৳ 3,900" },
  { name: "Party Co-ord Set", image: "/assets/new6.jpg", price: "৳ 6,000" },
  { name: "Elegant Abaya", image: "/assets/new7.jpg", price: "৳ 4,700" },
  { name: "Modern Kurti", image: "/assets/new8.jpg", price: "৳ 3,500" },
  { name: "Luxury Two Piece", image: "/assets/new9.jpg", price: "৳ 5,900" },
  { name: "Western Suit", image: "/assets/new10.jpg", price: "৳ 8,000" },
  { name: "Silk Maxi Dress", image: "/assets/new11.jpg", price: "৳ 6,800" },
  { name: "Wedding Lehenga", image: "/assets/new12.jpg", price: "৳ 9,200" },
];

const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-serif mb-8 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={item.image} alt={item.name} className="object-cover w-full h-64" />
            <div className="p-4 text-center">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
