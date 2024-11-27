import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: 'Absolutely love the quality!', name: 'Jane Doe' },
    { id: 2, text: 'Great customer service and timely delivery!', name: 'John Smith' },
    { id: 3, text: 'The designs are simply stunning. Highly recommended!', name: 'Alice Johnson' },
    { id: 4, text: 'Exceeded my expectations. Will order again!', name: 'Michael Brown' },
    { id: 5, text: 'Beautiful beads and amazing craftsmanship!', name: 'Sophia Williams' },
    { id: 6, text: 'Highly professional and very accommodating. Love it!', name: 'Daniel White' },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              <p className="text-black italic mb-4">"{testimonial.text}"</p>
              <h4 className="text-black font-semibold text-lg">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
