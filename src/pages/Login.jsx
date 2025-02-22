import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password!");
      return;
    }

    sessionStorage.setItem("isAuthenticated", "true");
    alert("Login successful!");
    navigate("/"); // Redirect to home or protected page
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-700">
        <h2
          data-aos="fade-up"
          className="text-2xl font-bold text-center text-gray-800 dark:text-white"
        >
          Welcome Back
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-500 text-center mb-6 dark:text-white"
        >
          Login to continue
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
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

          <div data-aos="fade-up" className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            data-aos="fade-up"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <p
          data-aos="fade-up"
          className="text-center text-gray-600 mt-4 dark:text-white"
        >
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
