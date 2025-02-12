import React, { useState, useEffect } from "react";
import "./Testimonial.css";

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
  {
    id: 6,
    name: "David Clark",
    review:
      "The recipe instructions are super clear! I finally made perfect bread.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    review: "Absolutely love the international recipes! So much variety.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Ethan Wilson",
    review: "Great! I never thought cooking would be this fun and easy.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Isabella Taylor",
    review: "Perfect for meal planning! The ingredient lists are very helpful.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    name: "Daniel Anderson",
    review: "My go-to place for new recipes! I’ve tried 10 dishes already.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Default 3 reviews

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1); // Show only 1 review on small screens
      } else {
        setVisibleCount(3); // Show 3 reviews on larger screens
      }
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
    <div className="testimonial-container">
      <button className="nav-button left" onClick={prevTestimonial}>
        &lt;
      </button>

      <div className="testimonial-wrapper">
        {testimonials.slice(index, index + visibleCount).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="user-icon"
            />
            <h3 className="name">{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextTestimonial}>
        &gt;
      </button>
    </div>
  );
};

export default Testimonial;
