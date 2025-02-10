import React, { useState } from "react";
import { Search } from "lucide-react";

const recipes = ["Butter Chicken", "Pad Thai", "Margherita Pizza"];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setQuery(searchText);

    // Filter recipes based on input
    if (searchText.trim() === "") {
      setFilteredRecipes([]);
    } else {
      const results = recipes.filter((recipe) =>
        recipe.toLowerCase().includes(searchText)
      );
      setFilteredRecipes(results);
    }
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Masala Trails
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Discover authentic recipes from around the world, crafted with love
          and tradition.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for recipes..."
              value={query}
              onChange={handleSearch}
              className="w-full px-6 py-4 rounded-full text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Search Results */}
          {query && (
            <div className="mt-4 bg-white shadow-lg rounded-lg p-4 text-left max-w-xl mx-auto">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe, index) => (
                  <div key={index} className="p-2 border-b last:border-0">
                    {recipe}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
