import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PrivacyPolicy = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return (
    <div data-aos="fade-up" className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-200 text-gray-800 py-10 px-5 md:px-20">
      <div data-aos="fade-up" className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-orange-600 text-center mb-6">
          Privacy Policy
        </h1>
        <p data-aos="fade-up" className="text-lg text-gray-600 mb-4">
          Welcome to our recipe website! Your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and protect your
          information.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-orange-500 mt-6">
          Information We Collect
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mt-2">
          We may collect personal information, such as your name and email
          address, when you subscribe to our newsletter or leave a comment. We
          also gather non-personal data, such as browsing activity, for
          analytics purposes.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-orange-500 mt-6">
          How We Use Your Information
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mt-2">
          Your information is used to improve user experience, send recipe
          updates, and enhance site functionality. We do not sell or share your
          data with third parties.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-orange-500 mt-6">Cookies</h2>
        <p data-aos="fade-up" className="text-gray-700 mt-2">
          We use cookies to improve website performance and personalize content.
          You can manage cookie preferences through your browser settings.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-orange-500 mt-6">
          Your Rights
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mt-2">
          You have the right to access, modify, or delete your personal data.
          Contact us if you have any concerns regarding your privacy.
        </p>
        <p data-aos="fade-up" className="text-sm text-gray-500 mt-6 text-center">
          Last updated: February 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
