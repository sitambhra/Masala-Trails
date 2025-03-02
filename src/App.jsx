import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import Hero from "./components/Hero";
import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/RecipesPage";
import Categories from "./pages/Categories";
import Latest from "./pages/Latest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq";
import Submit from "./pages/Submit";
import Contact from "./components/Contact";
import About from "./components/About";
import PrivacyPolicy from "./components/Privacy";
import Footer from "./components/Footer";
import Testimonial from "./pages/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const featuredRecipes = [
  {
    title: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    title: "Pad Thai",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "30 mins",
    servings: 2,
    difficulty: "Easy",
    cuisine: "Thai",
  },
  {
    title: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
  },
];

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12 dark:bg-gray-900">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 dark:text-white">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </section>
        <section className="mt-16 hover:scale-[1.1] transition-all ease-in-out duration-300">
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 dark:bg-gray-700 ">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white ">
                Share Your Recipe
              </h2>
              <p className="text-gray-600 mb-6 dark:text-white">
                Join our community of food lovers and share your favorite
                recipes with the world.
              </p>
              <Link to="/submit">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                  Submit Your Recipe
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Testimonial />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />

        {/* Main content area grows to push footer down */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>

        <Footer />

        <ScrollToTop
          smooth
          style={{
            background: "#F97316",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            border: "none",
          }}
          component={
            <FiArrowUp
              style={{
                color: "white",
                width: "70px",
                height: "60px",
                strokeWidth: "3",
              }}
            />
          }
        />
      </div>
    </Router>
  );
}

export default App;
