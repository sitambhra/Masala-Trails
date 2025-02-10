import React from 'react';

function Latest() {
  const latestRecipes = [
    {
      id: 1,
      title: "Mango Lassi",
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=500",
      date: "March 15, 2024",
      cookTime: "10 mins",
      description: "A refreshing Indian yogurt-based drink perfect for summer",
    },
    {
      id: 2,
      title: "Tandoori Chicken",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=500",
      date: "March 14, 2024",
      cookTime: "50 mins",
      description: "Classic Indian grilled chicken with aromatic spices",
    },
    {
      id: 3,
      title: "Masala Dosa",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500",
      date: "March 13, 2024",
      cookTime: "40 mins",
      description: "Crispy South Indian crepe filled with spiced potatoes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Recipes</h1>
        
        <div className="space-y-8">
          {latestRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-64 object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {recipe.date}
                    <span className="mx-2">•</span>
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {recipe.cookTime}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Latest;