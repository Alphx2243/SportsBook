'use client'
import React from 'react';

const features = [
  {
    title: 'Real-Time Occupancy',
    description: 'Check Real-Time Occupancies in your College',
    link: '/occupancy',
  },
  {
    title: 'Advanced Player Search',
    description: 'Find Players Based on Skills, Position, and Performance Metrics.',
    link: '/playersearch',
  },
  {
    title: 'Smart Booking System',
    description: 'Seamless Facility and Equipment Reservation System.',
    link: '/bookingsystem',
  },
  {
    title: 'Community and Feedback',
    description: 'Join Community Spaces and Give Feedback on Players and Equipment.',
    link: '/others',
  },
];

function FeaturesSection() {
  return (
    <section>
    <h2 className="text-4xl font-bold text-white text-center mb-16">Our Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-2">
      {features.map((feature, index) => (
        <a
          key={index}
          href={feature.link}
          className="bg-[#1a1a1a] rounded-lg p-8 text-center group hover:-translate-y-2 transition duration-300"
        >
          <div className="w-32 h-32 mx-auto mb-6">
            <img src="/sblogo_bg.png" />
          </div>
          <h3 className="text-[#3fadab] text-xl font-semibold mb-2">{feature.title}</h3>
        </a>
      ))}
    </div>
  </section>
  );
}

export default FeaturesSection;