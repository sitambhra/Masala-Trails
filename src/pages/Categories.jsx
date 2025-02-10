import React from "react";

const categories = [
  { name: "Indian", image: "/images/indian.jpeg" },
  { name: "Chinese", image: "/images/chinese.jpeg" },
  { name: "Italian", image: "/images/italian.jpg" },
  { name: "Mexican", image: "/images/mexican.jpeg" },
  { name: "Mediterranean", image: "/images/Mediterranean.jpeg" },
  { name: "American", image: "/images/American.jpeg" },
  { name: "Desserts", image: "/images/desserts.jpeg" },
  { name: "Drinks", image: "/images/drinks.jpeg" },
];

export default function Categories() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Recipe Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] rounded-lg shadow-lg overflow-hidden group cursor-pointer bg-gray-200"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
