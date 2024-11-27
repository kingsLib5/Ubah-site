import React from 'react';
import AboutImage from '../assets/mama.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in-left"
        >
          <h2 className="text-3xl font-bold mb-4 transition-transform duration-500 ease-in-out hover:scale-105">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Ubah United, we specialize in selling unique bead designs for
            clothing and accessories. Our mission is to blend tradition with
            modern aesthetics to create timeless pieces.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 group transform hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover animate-fade-in-right"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
