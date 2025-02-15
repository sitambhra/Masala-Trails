import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const recipes = [
  { id: 1, name: 'Butter Chicken', description: 'Rich and creamy chicken curry with a buttery base.' },
  { id: 2, name: 'Paneer Tikka', description: 'Spiced and grilled paneer cubes served with mint chutney.' },
  { id: 3, name: 'Biryani', description: 'Aromatic rice dish cooked with meat or vegetables and spices.' },
];

const Recipes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div data-aos="fade-up" className="container mx-auto mt-10">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-yellow-500 mb-6">All Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div data-aos="fade-up" key={recipe.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
            <p className="text-gray-600 mt-2">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
