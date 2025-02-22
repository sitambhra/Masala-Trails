import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/feedback/all")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
          All Feedbacks
        </h2>
        <ul className="space-y-4">
          {feedbacks.length > 0 ? (
            feedbacks.map((fb) => (
              <li
                key={fb._id}
                className="p-4 bg-gray-100 rounded-md shadow-md border-l-4 border-orange-500"
              >
                <p className="text-lg font-semibold text-orange-600">
                  {fb.name}
                </p>
                <p className="text-gray-700">{fb.message}</p>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No feedbacks available.</p>
          )}
        </ul>

        {/* Button to go back */}
        <button
          onClick={() => navigate("/feedback")}
          className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-400 transition"
        >
          Back to Feedback Form
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
