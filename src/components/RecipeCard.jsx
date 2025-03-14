import React from "react";
import { Clock, Users, ChefHat } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function RecipeCard({
  title,
  image,
  time,
  servings,
  difficulty,
  cuisine,
}) {
  // useEffect(() => {
  //   AOS.init({ duration: 100, once: true });
  // }, []);
  return (
    <div className="w-full hover:scale-[1.02] transition-all ease-in-out duration-300 animate-fadeIn">
      <div
        className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group dark:bg-[#374151] animate-fadeIn"
      >
        <div className=" w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.2] transition-all ease-in-out duration-300"
          />
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
            {cuisine}
          </span>

          <h3 className="mt-2 text-xl font-bold text-gray-800">{title}</h3>
          <div className="mt-4 flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-1">
              {/* <h3 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-50">
                {title}
              </h3> */}
              <div className="gap-16 flex items-center justify-between text-gray-600 dark:text-gray-300">
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
        </div>
      </div>
    </div>
  );
}
