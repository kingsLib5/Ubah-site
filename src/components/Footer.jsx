import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section: Social Media and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/2348130824260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-2xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            {/* <a href="#hero" className="text-gray-400 hover:text-white mx-2">
              Home
            </a> */}
            <a href="#about" className="text-gray-400 hover:text-white mx-2">
              About
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-white mx-2">
              Gallery
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white mx-2">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section: Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © 2024 Ubah United. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            developed by <a href="#hero" className="text-white hover:underline">DEX</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
