import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">Masala Trails</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-orange-500 transition-colors">Recipes</Link>
            <Link to="#" className="text-gray-600 hover:text-orange-500 transition-colors">Categories</Link>
            <Link to="#" className="text-gray-600 hover:text-orange-500 transition-colors">Latest</Link>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Submit Recipe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}