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
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-r  py-12 w-10/12 max-w-2xl mx-auto rounded-lg shadow-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-11/12">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Recent Feedbacks
        </h2>
        <ul className="space-y-4">
          {feedbacks.length > 0 ? (
            feedbacks.slice(0, 3).map((fb) => (
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

        {/* Show "More Feedbacks" link if there are more than 3 feedbacks */}
        {feedbacks.length > 3 && (
          <button
            onClick={() => navigate("/seefeedback")}
            className="mt-4 w-full text-orange-600 font-semibold py-2 rounded-md hover:underline transition"
          >
            More Feedbacks
          </button>
        )}

        {/* Button to go back */}
      </div>
    </div>
  );
};

export default FeedbackList;
