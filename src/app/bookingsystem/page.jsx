'use client'
import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showAvailability, setShowAvailability] = useState(false);

  const sports = [
    'Tennis', 'Basketball', 'Volleyball', 'Cricket',
    'Table Tennis', 'Lawn Tennis', 'Badminton'
  ];

  const searchAvailability = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sport = formData.get('sport');
    const date = formData.get('date');
    const timeFrom = formData.get('timeFrom');
    const timeTo = formData.get('timeTo');

    if (!sport || !date || !timeFrom || !timeTo) {
      alert('Please fill out all fields to check availability.');
      return;
    }

    const sampleSlots = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      courtName: `${sport} Court #${i + 1}`,
      slotTime: `${timeFrom} to ${timeTo}`,
      imageUrl: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }));

    setAvailableSlots(sampleSlots);
    setShowAvailability(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    

  

      <main className="container mx-auto px-4 py-8 bg-[#121212]">
        <section className="text-center mb-12 mt-[6rem]">
          <h1 className="text-4xl font-bold mb-4">Smart Booking System</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Easily reserve courts or fields for sports like Tennis, Basketball, Volleyball,
            Cricket, Table Tennis, Lawn Tennis, and Badminton. Select your preferred date and time slot to see available options and book instantly.
          </p>
        </section>

        <section className="max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">Book Your Court/Field</h2>
          <form onSubmit={searchAvailability} className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Choose Sport:</label>
                <select name="sport" className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white">
                  <option value="">Select Sport</option>
                  {sports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Date:</label>
                <input type="date" name="date" className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Time Slot:</label>
                <div className="flex items-center space-x-2">
                  <input type="time" name="timeFrom" className="flex-1 bg-[#1a1a1a] rounded-lg p-3 text-white" />
                  <span>to</span>
                  <input type="time" name="timeTo" className="flex-1 bg-[#1a1a1a] rounded-lg p-3 text-white" />
                </div>
              </div>

              <button type="submit" className="w-full bg-teal-500 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Check Availability
              </button>
            </div>
          </form>
        </section>

        {showAvailability && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">Available Slots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableSlots.map((slot) => (
                <div key={slot.id} className="bg-[#1e1e1e] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <img src={slot.imageUrl} alt={slot.courtName} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-teal-500 mb-2">{slot.courtName}</h3>
                    <p className="text-gray-400 mb-4">Available: {slot.slotTime}</p>
                    <button className="w-full bg-teal-500 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>


    </div>
  );
}

export default App;