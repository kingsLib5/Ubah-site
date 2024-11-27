import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col items-center text-center space-y-10">
        {/* WhatsApp Number */}
        <div className="group">
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-green-500 text-4xl mb-2 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-green-500 transition-transform duration-300 ease-in-out" />
            <p className="text-lg font-semibold text-gray-700 group-hover:text-green-500 transition-colors duration-300 ease-in-out">
              +234 813 082 4260
            </p>
          </div>
        </div>

        {/* Social Media Handles */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-700"
          >
            <FaFacebook className="hover:shadow-lg hover:shadow-blue-700" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-pink-600"
          >
            <FaInstagram className="hover:shadow-lg hover:shadow-pink-500" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
          >
            <FaTwitter className="hover:shadow-lg hover:shadow-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
