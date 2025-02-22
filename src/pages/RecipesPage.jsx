import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Rich and creamy chicken curry with a buttery base.",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Spiced and grilled paneer cubes served with mint chutney.",
  },
  {
    id: 3,
    name: "Biryani",
    description:
      "Aromatic rice dish cooked with meat or vegetables and spices.",
  },
];

const Recipes = () => {
  const [bookmarked, setBookmarked] = useState({});
  const [alert, setAlert] = useState(false);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => {
      const newStatus = !prev[id];
      if (newStatus) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 1000);
      }
      return { ...prev, [id]: newStatus };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">All Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Bookmark Button */}
              <button
                onClick={() => toggleBookmark(recipe.id)}
                className={`absolute top-4 right-4 p-2 rounded-full shadow transition duration-300 ${
                  bookmarked[recipe.id] ? "bg-yellow-500" : "bg-blue-600"
                }`}
              >
                <FaBookmark className="text-xl text-white" />
              </button>
              <h3 className="text-xl font-semibold text-gray-800">
                {recipe.name}
              </h3>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
      {alert && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg">
          Saved!
        </div>
      )}
    </div>
  );
};

export default Recipes;
