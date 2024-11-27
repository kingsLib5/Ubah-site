import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0); // True when scrolled down
    };

    // Initial state check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">Ubah United</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#gallery" className="hover:text-blue-500">
            Gallery
          </a>
          <a href="#products" className="hover:text-blue-500">
            Products
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="bg-white md:hidden">
          <ul className="flex flex-col space-y-4 items-center py-4">
            <li>
              <a
                href="#hero"
                onClick={toggleMenu}
                className="hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={toggleMenu}
                className="hover:text-blue-500"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={toggleMenu}
                className="hover:text-blue-500"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
