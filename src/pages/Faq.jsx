import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is this recipe website about?",
    answer:
      "This website provides various recipes from different countries with step-by-step instructions.",
  },
  {
    question: "Are these recipes suitable for beginners?",
    answer:
      "Yes, we offer simple step-by-step instructions that anyone can follow, even beginners.",
  },
  {
    question: "Can I submit my own recipes?",
    answer: "Sure, you always can!",
  },
  {
    question: "Do I need special ingredients for international recipes?",
    answer:
      "Most ingredients can be found in local supermarkets, but some specialty items may require visiting an international store.",
  },
  {
    question: "Are the recipes healthy?",
    answer:
      "We offer a variety of recipes, including healthy options. Look for our 'Healthy Choice' section for nutritious meals.",
  },
  {
    question: "What should I do if my dish doesn’t turn out as expected?",
    answer:
      "Check if you've followed the measurements correctly and review any cooking tips provided in the recipe.",
  },
  {
    question: "Where do these recipes come from?",
    answer:
      "Our recipes are curated from expert chefs, home cooks, and traditional sources to ensure authenticity and taste.",
  },
  {
    question: "How can I request a specific recipe?",
    answer:
      "You can submit a request through our contact form, and we’ll do our best to add it to our collection!",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  return (
    <div data-aos="fade-up" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 data-aos="fade-right" className="text-center text-3xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <div data-aos="fade-right" key={index} className="border-b border-gray-300 py-4">
          <div data-aos="fade-up"
            className="flex justify-between items-center text-lg font-semibold text-black-600 cursor-pointer hover:text-blue-800 transition duration-300"
            onClick={() => handleToggle(index)}
          >
            {item.question}
            <span className="text-xl transform transition-transform duration-300">
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-700 text-base leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
