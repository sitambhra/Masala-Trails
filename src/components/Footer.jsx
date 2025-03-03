import { Link } from "react-router-dom";
import CopyrightYear from "./CopyrightYear";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Masala Trails</h3>
            <p className="text-gray-400">
              Discover and share authentic recipes from around the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors group relative"
                >
                  About Us
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors group relative"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-orange-500 transition-colors group relative"
                >
                  FAQ
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 transition-colors group relative"
                >
                  Privacy Policy
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors group relative">
                  Terms of Service
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest recipes and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-800 md:w-[80%]"
              />
              <button className="bg-orange-500 px-4 md:px-1 py-2 rounded-r-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
             <div className="flex  gap-4 mt-7 justify-center">
           <a href="https://github.com/sitambhra/Masala-Trails">
                <FaGithub className="w-6 h-6 transition duration-300 ease-in-out hover:scale-125 hover:rotate-[10deg] hover:shadow-[4px_4px_10px_rgba(77,66,177,3)] text-white hover:text-[#6C61C4]  " />
            </a>
            <a href="#">
                <FaInstagram className="w-6 h-6 transition duration-300 ease-in-out hover:scale-125 hover:rotate-[10deg] hover:shadow-[4px_4px_10px_rgba(255,105,180,0.6)] hover:text-[#FF69B4]" />
            </a>
              <a href="">
                <FaFacebook className="w-6 h-6 transition duration-300 ease-in-out hover:scale-125 hover:rotate-[10deg] hover:shadow-[4px_4px_10px_rgba(59,89,152,0.6)] hover:text-[#1877F2]" />
              </a>
              <a href="#">
                <FaDiscord className="w-6 h-6 transition duration-300 ease-in-out hover:scale-125 hover:rotate-[10deg] hover:shadow-[4px_4px_10px_rgba(114,137,218,0.6)] hover:text-[#5865F2]" />
              </a>
             <a href="#">
                <FaLinkedin className="w-6 h-6 transition duration-300 ease-in-out hover:scale-125 hover:rotate-[10deg] hover:shadow-[4px_4px_10px_rgba(0,119,181,0.6)] hover:text-[#0077B5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
         <hr className="my-5 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <CopyrightYear/>
    </footer>
  );
}
