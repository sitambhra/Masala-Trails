import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Submit() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cookingTime: "",
    servings: "",
    difficulty: "Easy",
    file: null, // Change image to file
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("cookingTime", formData.cookingTime);
    formDataToSend.append("servings", formData.servings);
    formDataToSend.append("difficulty", formData.difficulty);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Recipe submitted successfully!");
        setFormData({
          name: "",
          description: "",
          cookingTime: "",
          servings: "",
          difficulty: "Easy",
          image: null,
        });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Error submitting the recipe. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-300"
      style={{ marginTop: "100px" }}
    >
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold mb-6 mt-3 text-center"
      >
        Submit Your Recipe
      </h2>
      {message && <p className="text-center text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Name */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Recipe Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* description */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Description:</label>
          <textarea
            name="description"
            value={formData.description}
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
            name="cookingTime"
            value={formData.cookingTime}
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

        {/* Image Upload */}
        <div data-aos="fade-up">
          <label className="block font-semibold">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <div data-aos="fade-up" className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            {loading ? "Submitting..." : "Submit Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
}
