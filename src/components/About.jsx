import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
      AOS.init({ duration: 600, once: false });
    }, []);
  return (
    <div data-aos="fade-up" className="bg-gradient-to-r from-orange-400 to-yellow-300 min-h-screen flex items-center justify-center p-6 dark:bg-gray-900  ">
      <div data-aos="fade-up" className="max-w-4xl bg-white p-8 rounded-2xl shadow-2xl dark:bg-gray-900">
        <h1 data-aos="fade-up"  className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
          About Our Recipe World
        </h1>
        <p data-aos="fade-up" className="text-lg text-gray-700 text-center mb-6 dark:text-white ">
          Welcome to our culinary paradise, where we bring you the best recipes
          from different countries! Explore diverse flavors, rich traditions,
          and easy-to-follow guides to make every meal special.
        </p>
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We aim to connect food lovers with authentic, delicious, and
              easy-to-make recipes from around the world.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-2">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              Our recipes are curated by passionate chefs and home cooks to
              ensure authenticity and simplicity in every dish.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="text-center mt-6">
          <a
            href="/recipes"
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Explore Recipes
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
