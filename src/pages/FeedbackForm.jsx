import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback/add", feedback);
      alert("Feedback submitted successfully!");
      setFeedback({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Share Your Feedback
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md text-black placeholder-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md text-black placeholder-gray-500"
        />
        <textarea
          name="message"
          placeholder="Write your feedback..."
          value={feedback.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md text-black placeholder-gray-500 h-24 resize-none"
        />
        <button
          type="submit"
          className="bg-white text-orange-600 font-semibold py-2 px-4 rounded-md hover:bg-yellow-200 transition"
        >
          Submit
        </button>
      </form>

      {/* Check Shared Feedbacks Button */}
      <button
        onClick={() => navigate("/seefeedback")}
        className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Check Shared Feedbacks
      </button>
    </div>
  );
};

export default FeedbackForm;
