import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PrivacyPolicy = () => {
  useEffect(() => {
      AOS.init({ duration: 600, once: false });
    }, []);
  return (

    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-200 dark:from-gray-900 dark:to-gray-900 dark:text-gray-100 py-10 px-5 md:px-20 mt-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">

          Welcome to our recipe website! Your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and protect your
          information.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-300 mt-6">
          Information We Collect
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">

          We may collect personal information, such as your name and email
          address, when you subscribe to our newsletter or leave a comment. We
          also gather non-personal data, such as browsing activity, for
          analytics purposes.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-300 mt-6">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">

          Your information is used to improve user experience, send recipe
          updates, and enhance site functionality. We do not sell or share your
          data with third parties.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-300 mt-6">
          Cookies
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          We use cookies to improve website performance and personalize content.
          You can manage cookie preferences through your browser settings.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-300 mt-6">
          Your Rights
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          You have the right to access, modify, or delete your personal data.
          Contact us if you have any concerns regarding your privacy.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">

          Last updated: February 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
