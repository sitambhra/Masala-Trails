import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

export default function RecipeCard({ title, image, time, servings, difficulty, cuisine }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">{cuisine}</span>
        <h3 className="mt-2 text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-4 flex items-center justify-between text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span className="text-sm">{servings} servings</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChefHat size={16} />
            <span className="text-sm">{difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}