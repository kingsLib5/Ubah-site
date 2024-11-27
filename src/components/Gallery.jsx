import React from 'react';
import Gallery1 from '../assets/besct2i.jpeg';
import Gallery2 from '../assets/besct2ii.jpeg';
import Gallery3 from '../assets/besct2iii.jpeg';
import Gallery4 from '../assets/besct2iv.jpeg';
import Gallery5 from '../assets/besct2v.jpeg';
import Gallery6 from '../assets/besct2vi.jpeg';

const Gallery = () => {
  const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

  return (
    <section id="gallery" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-black mb-10 text-center animate-fade-in">
      More Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">Tracking-stone {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
