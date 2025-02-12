import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing recipes! I tried the pizza, and it was fantastic.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Love the variety of dishes! Great instructions as well.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    review: "The desserts are to die for! My family loved them.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    review: "Super easy-to-follow recipes. Made my first cake today!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Sophia Williams",
    review: "Tried the Asian cuisine section, and it was incredible!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
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

  return (
    <div className="flex items-center justify-center w-full my-12 relative">
      <button
        className="bg-gradient-to-r from-yellow-400 to-orange-300 text-black text-2xl p-3 rounded-full transition duration-300 hover:from-yellow-400 hover:to-red-400 mr-4"
        onClick={prevTestimonial}
      >
        &lt;
      </button>

      <div className="flex overflow-hidden gap-4 w-3/5 justify-center">
        {testimonials.slice(index, index + visibleCount).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gradient-to-br from-yellow-400 to-orange-200 p-6 rounded-lg shadow-lg text-left w-72 h-72 flex flex-col justify-center relative"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full absolute top-2 left-2"
            />
            <h3 className="mt-12 font-bold text-lg pl-2">{testimonial.name}</h3>
            <p className="pl-2">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <button
        className="bg-gradient-to-r from-yellow-400 to-orange-300 text-black text-2xl p-3 rounded-full transition duration-300 hover:from-yellow-400 hover:to-red-400 ml-4"
        onClick={nextTestimonial}
      >
        &gt;
      </button>
    </div>
  );
};

export default Testimonial;
