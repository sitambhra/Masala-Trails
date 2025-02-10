import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
    bottom: "20px",
    right: "20px",
    display: isVisible ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",  
    height: "50px", 
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "50%", 
    cursor: "pointer",
    fontSize: "24px", 
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    transition: "opacity 0.3s",
      }}
    >
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="white"
      >
        <path d="M12 2L4 10h5v10h6V10h5z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
