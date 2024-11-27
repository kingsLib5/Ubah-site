import React from 'react';
import Pearl from '../assets/besct1i.jpeg';
import Bracelet from '../assets/besct1ii.jpeg';
import CustomBeads from '../assets/besct1v.jpeg';
import product1 from '../assets/besct1iv.jpeg';
import product2 from '../assets/besct1vi.jpeg';
import product3 from '../assets/besct1iii.jpeg';

const Product = () => {
  const products = [
    { id: 1, name: 'Pearl 6mm',  image: Pearl },
    { id: 2, name: 'Pearl 6mm',  image: Bracelet },
    { id: 3, name: 'Pearl 14mm',  image: CustomBeads },
    { id: 4, name: 'Pearl 8mm',  image: product1 },
    { id: 5, name: 'Pearl 12mm',  image: product2 },
    { id: 6, name: 'Pearl 10mm',  image: product3 },
  ];

  return (
    <section id="products" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-black animate-fade-in">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group shadow-md rounded-lg text-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-white font-bold">{product.name}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg text-gray-700 mb-2 font-medium">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-md transition-transform duration-300 hover:bg-blue-600 hover:scale-110">
                Get Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
