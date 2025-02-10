import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser ||
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true"); // Mark user as logged in
    alert("Login successful!");
    navigate("/"); // Redirect to protected page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-700 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6 dark:text-white">Login to continue</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
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

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 dark:text-white">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
