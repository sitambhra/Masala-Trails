import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookmark } from "react-icons/fa";
import { Clock, Users, ChefHat, Trash2 } from "lucide-react"; // Added Trash2 icon for delete

const API_URL = "http://localhost:5000/api/recipes";
const IMAGE_PATH = "http://localhost:5000/uploads/";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [bookmarked, setBookmarked] = useState({});
  const [alert, setAlert] = useState(false);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${API_URL}/get`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const deleteRecipe = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      const response = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
      } else {
        console.error("Failed to delete recipe");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div
        className="container mx-auto"
        style={{ marginTop: "105px", marginBottom: "500px" }}
      >
        <h2 className="text-3xl font-bold text-yellow-500" data-aos="fade-up">
          All Recipes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="hover:scale-[1.04] transition-all ease-in-out duration-300"
              data-aos="fade-up"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group dark:bg-[#374151]">
                <div className="h-48 overflow-hidden" data-aos="fade-up">
                  <img
                    src={`${IMAGE_PATH}${recipe.image}`}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-[1.2] transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleBookmark(recipe._id)}
                      className={`p-2 rounded-full shadow transition duration-300 ${
                        bookmarked[recipe._id] ? "bg-yellow-500" : "bg-blue-600"
                      }`}
                    >
                      <FaBookmark className="text-xl text-white" />
                    </button>

                    <button
                      onClick={() => deleteRecipe(recipe._id)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-50">
                    {recipe.name}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {expanded[recipe._id] || recipe.description.length <= 50
                      ? recipe.description
                      : `${recipe.description.slice(0, 50)}... `}
                    {recipe.description.length > 50 && (
                      <span
                        onClick={() => toggleReadMore(recipe._id)}
                        className="text-blue-500 cursor-pointer hover:underline"
                      >
                        {expanded[recipe._id] ? " Show less" : " Read more"}
                      </span>
                    )}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-300">
                    <div
                      className="flex items-center space-x-1"
                      data-aos="fade-up"
                    >
                      <Clock size={16} />
                      <span className="text-sm">{recipe.cookingTime} mins</span>
                    </div>
                    <div
                      className="flex items-center space-x-1"
                      data-aos="fade-up"
                    >
                      <Users size={16} />
                      <span className="text-sm">
                        {recipe.servings} servings
                      </span>
                    </div>
                    <div
                      className="flex items-center space-x-1"
                      data-aos="fade-up"
                    >
                      <ChefHat size={16} />
                      <span className="text-sm">{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
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
