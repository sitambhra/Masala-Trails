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
