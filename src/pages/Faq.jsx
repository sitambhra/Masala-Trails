import React, { useState } from "react";
import "./faq.css";

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
    answer: "Sure,you always can!",
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

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${activeIndex === index ? "open" : ""}`}
            onClick={() => handleToggle(index)}
          >
            {item.question}
            <span className="faq-icon">
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </div>
          <div
            className={`faq-answer ${activeIndex === index ? "active" : ""}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
