import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const refForm = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        refForm.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    if (refForm.current) {
      refForm.current.reset();
    }
  };

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return (
    <div data-aos="fade-up" className="flex items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-gray-900 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full dark:bg-gray-700 ">
        <h2 data-aos="fade-down" className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-white">
          Contact Us
        </h2>
        <form ref={refForm} onSubmit={handleSubmit}>
          <div data-aos="fade-right" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              name="username"
              ref={usernameRef}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div data-aos="fade-left" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div data-aos="fade-right" className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              ref={messageRef}
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button data-aos="fade-up"
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
