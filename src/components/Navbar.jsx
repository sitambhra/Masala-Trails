import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/Home" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800 dark:text-white ">
              Masala Trails
            </span>
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="" className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white">Recipes</Link>
            <Link to="/Categories"  className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white">Categories</Link>
            <Link to="/latest" className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white">Latest</Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-500 transition-colors dark:text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
              >
                Login
              </Link>
            )}
            <Link to="/submit">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Submit Recipe
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg rounded-lg dark:bg-gray-900">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
            >
              Recipes
            </Link>
            <Link
              to="/categories"
              className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
            >
              Categories
            </Link>
            <Link
              to="/latest"
              className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
            >
              Latest
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-500 transition-colors dark:text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-orange-500 transition-colors dark:text-white"
              >
                Login
              </Link>
            )}
            <Link to="/submit">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors dark:text-white">
                Submit Recipe
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
