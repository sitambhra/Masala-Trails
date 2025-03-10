import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Breakfast",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=500",
      recipeCount: 45,
    },
    {
      id: 2,
      name: "Main Course",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=500",
      recipeCount: 82,
    },
    {
      id: 3,
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=500",
      recipeCount: 36,
    },
    {
      id: 4,
      name: "Beverages",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=500",
      recipeCount: 28,
    },
    {
      id: 5,
      name: "Street Food",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500",
      recipeCount: 54,
    },
    {
      id: 6,
      name: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
      recipeCount: 63,
    },
  ];

  useEffect(() => {
        AOS.init({ duration: 600, once: true });
      }, []);

  return (
    <div data-aos="fade-up" className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 ">
      <div  className="max-w-7xl mx-auto">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-900 mb-8"style={{marginTop:"65px"}}>Recipe Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div data-aos="fade-up" className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
                <h3 className="text-2xl font-bold text-center mb-2">{category.name}</h3>
                <p className="text-sm font-medium">{category.recipeCount} Recipes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;