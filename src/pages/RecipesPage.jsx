import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/recipes/all"
        );
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load recipes.");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-red-300 flex flex-col items-center py-12 px-4">
      <h2 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        🍽️ Submitted Recipes
      </h2>

      {loading && (
        <p className="text-lg text-white font-semibold animate-pulse">
          Loading recipes...
        </p>
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookmark } from "react-icons/fa";

const recipes = [
  { id: 1, name: "Butter Chicken", description: "Rich and creamy chicken curry with a buttery base." },
  { id: 2, name: "Paneer Tikka", description: "Spiced and grilled paneer cubes served with mint chutney." },
  { id: 3, name: "Biryani", description: "Aromatic rice dish cooked with meat or vegetables and spices." },
];

const Recipes = () => {
  const [bookmarked, setBookmarked] = useState({});
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div data-aos="fade-up" className="container mx-auto" style={{ marginTop: "105px", marginBottom: "500px" }}>
        <h2 data-aos="fade-up" className="text-3xl font-bold text-yellow-500">All Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes.map((recipe) => (
            <div
              data-aos="fade-up"
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
              <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Message */}
      {alert && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg">
          Saved!
        </div>
      )}
      {error && <p className="text-lg text-red-700 font-semibold">{error}</p>}

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="w-[280px] bg-white bg-opacity-80 backdrop-blur-lg p-5 rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              {recipe.title}
            </h3>
            <p className="text-gray-800">
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p className="text-gray-800">
              <strong>Cooking Time:</strong> {recipe.time} mins
            </p>
            <p className="text-gray-800">
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p className="text-gray-800">
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
            {recipe.cuisine && (
              <p className="text-gray-800">
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
