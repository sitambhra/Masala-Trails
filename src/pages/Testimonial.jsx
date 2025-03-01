import React, { useState, useEffect } from "react";
import man from "../assets/man.jpeg";
import man2 from "../assets/man2.jpeg";
import woman1 from "../assets/woman1.jpeg";
import woman3 from "../assets/woman3.jpeg";
import chef1 from "../assets/chef1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing recipes! I tried the pizza, and it was fantastic.",
    image: man,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Love the variety of dishes! Great instructions as well.",
    image: man2,
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Johnson",
    review: "The desserts are to die for! My family loved them.",
    image: woman1,
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    review: "Super easy-to-follow recipes. Made my first cake today!",
    image: chef1,
    rating: 3,
  },
  {
    id: 5,
    name: "Sophia Williams",
    review: "Tried the Asian cuisine section, and it was incredible!",
    image: woman3,
    rating: 4,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevTestimonial = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  // Function to generate star rating
  const renderStars = (rating) => "⭐".repeat(rating);

  useEffect(() => {
    AOS.init({ duration: 100, once: true});
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full my-12  py-12">
      {/* Added Section Heading */}
      <h2 className="text-3xl font-bold text-orange-700 mb-6">
        What Our Customers Say
      </h2>
      <div className="flex items-center w-4/5 justify-center">
        <button
          className="bg-orange-200 text-orange-700 text-2xl p-3 rounded-lg transition duration-300 hover:bg-orange-300 hover:text-orange-900 ml-4"
          onClick={nextTestimonial}
        >
          &lt;
        </button>

        <div className="flex gap-6 justify-center w-full overflow-hidden">
          {testimonials
            .slice(index, index + visibleCount)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-[250px] h-[300px] flex flex-col justify-center items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-2"
                />
                <p className="text-yellow-500 text-xl">
                  {renderStars(testimonial.rating)}
                </p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            ))}
        </div>

        <button
          className="bg-orange-200 text-orange-700 text-2xl p-3 rounded-lg transition duration-300 hover:bg-orange-300 hover:text-orange-900 ml-4"
          onClick={nextTestimonial}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
