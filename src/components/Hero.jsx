import React from 'react';

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('products');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-screen bg-[url(./assets/heropic.jpg)] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold text-white mb-4">Elegant Beads for Every Style</h1>
      <p className="text-lg text-white mb-6">Unique designs best for your clothing materials.</p>
      <div>
        <button
          className="bg-white text-blue-500 px-6 py-2 rounded-md shadow-md mr-4 hover:bg-gray-100"
          onClick={scrollToGallery}
        >
          View Collections
        </button>
        <button
          className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800"
          onClick={scrollToContact}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
