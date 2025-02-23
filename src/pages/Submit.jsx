import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default function Submit() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    time: "",
    servings: "",
    difficulty: "Easy",
    cuisine: "",
  });

  const [message, setMessage] = useState(""); // Success/Error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recipes/submit",
        formData
      );
      setMessage(response.data.message); // Show success message
      setFormData({
        title: "",
        ingredients: "",
        time: "",
        servings: "",
        difficulty: "Easy",
        cuisine: "",
      });
    } catch (error) {
      setMessage("Failed to submit recipe. Please try again.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-300"
    >
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-center">
    <div data-aos="fade-up" className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-300 "style={{marginTop:"100px"}}>
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 mt-3 text-center">
        Submit Your Recipe
      </h2>

      {message && (
        <p className="text-center text-lg font-semibold text-green-600">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Name */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Recipe Name:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Ingredients */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Ingredients:</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Cooking Time */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Cooking Time (mins):</label>
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Servings */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Servings:</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Difficulty */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Difficulty:</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Cuisine */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Cuisine:</label>
          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <div data-aos="fade-up" className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
