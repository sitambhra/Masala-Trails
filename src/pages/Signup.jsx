import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
      setError("Email already registered. Try logging in!");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Signup successful! Please log in.");
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
        AOS.init({ duration: 600, once: false });
      }, []);

  return (
    <div data-aos="fade-up" className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-700 ">
        <h2 data-aos="fade-up" className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <p data-aos="fade-up" className="text-gray-500 text-center mb-6 dark:text-white">Sign up to get started</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignup}>
          <div data-aos="fade-up" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div data-aos="fade-up" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div data-aos="fade-up" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button data-aos="fade-up" className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
            Sign Up
          </button>
        </form>

        <p data-aos="fade-up" className="text-center text-gray-600 mt-4 dark:text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
