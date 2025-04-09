import React from 'react';

const testimonials = [
  {
    name: 'User Name',
    text: 'SportsBook transformed how we manage our sports facilities. Real-time occupancy is a game-changer!',
  },
  {
    name: 'User Name',
    text: 'Booking has never been easier. I can check court availability instantly!',
  },
  {
    name: 'User Name',
    text: 'The player search and analytics have helped me improve my game tremendously.',
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-[#121212] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">What Our Users Say</h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg shadow-black/40 transition hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://www.gravatar.com/avatar/?d=mp"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-teal-400 font-semibold text-lg">{testimonial.name}</h4>
              </div>
              <p className="text-gray-300 text-left">“{testimonial.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
