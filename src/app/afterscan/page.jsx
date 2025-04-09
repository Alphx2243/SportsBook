'use client'
import React, { useState } from 'react';

export default function AfterScanPage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [playerCount, setPlayerCount] = useState(1);
  const [selectedSport, setSelectedSport] = useState('');
  const [equipmentCounts, setEquipmentCounts] = useState({});

  const sportEquipment = {
    badminton: ['Racket', 'Shuttlecock'],
    basketball: ['Basketball'],
    cricket: ['Bat', 'Ball', 'Stumps'],
    football: ['Football'],
    tabletennis: ['Paddle', 'Ball'], 
    volleyball: ['Volleyball'],      
  };

  const incrementValue = (id) => {
    if (id === 'playerCount') {
      if (playerCount < 10) {
        setPlayerCount(playerCount + 1);
      }
    } else {
      setEquipmentCounts(prev => ({
        ...prev,
        [id]: Math.min((prev[id] || 1) + 1, 5)
      }));
    }
  };

  const decrementValue = (id) => {
    if (id === 'playerCount') {
      if (playerCount > 1) {
        setPlayerCount(playerCount - 1);
      }
    } else {
      setEquipmentCounts(prev => ({
        ...prev,
        [id]: Math.max((prev[id] || 1) - 1, 0)
      }));
    }
  };

  const updateEquipment = (sport) => {
    setSelectedSport(sport);
    if (sport) {
      const newEquipmentCounts = {};
      sportEquipment[sport]?.forEach(item => {
        newEquipmentCounts[item] = 1;
      });
      setEquipmentCounts(newEquipmentCounts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!');
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white font-sans">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mt-12 flex flex-col gap-5">
          <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-5 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Player Details</h2>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Verified</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <label className="font-bold text-teal-500">Name:</label>
                <span id="playerName">John Doe</span>
              </div>
              <div className="flex gap-3">
                <label className="font-bold text-teal-500">Email:</label>
                <span id="playerEmail">jd@sportsbook.com</span>
              </div>
              <div className="flex gap-3">
                <label className="font-bold text-teal-500">Roll Number:</label>
                <span id="playerRoll">2021XXX</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-5 text-white mt-3">
            <div className="mb-4">
              <label htmlFor="playerCount" className="block mb-2 font-bold text-teal-500">Number of Players:</label>
              <div className="inline-flex items-center gap-1">
                <button 
                  type="button" 
                  onClick={() => decrementValue('playerCount')}
                  className="bg-teal-600 text-white w-8 h-10 rounded flex items-center justify-center"
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="playerCount" 
                  value={playerCount}
                  readOnly
                  className="w-16 h-10 text-center bg-[#1e1e1e] border border-gray-700 rounded text-white"
                />
                <button 
                  type="button" 
                  onClick={() => incrementValue('playerCount')}
                  className="bg-teal-600 text-white w-8 h-10 rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="sportSelect" className="block mb-2 font-bold text-teal-500">Select Sport:</label>
              <select 
                id="sportSelect" 
                name="sport"
                value={selectedSport}
                onChange={(e) => updateEquipment(e.target.value)}
                className="w-48 p-2 bg-[#1e1e1e] border border-gray-700 rounded text-white mb-4"
              >
                <option value="">Choose a sport</option>
                <option value="badminton">Badminton</option>
                <option value="basketball">Basketball</option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="tabletennis">Table Tennis</option>
                <option value="volleyball">Volleyball</option>
              </select>
            </div>

            {/* Equipment Section */}
            {selectedSport && (
              <div className="mt-4">
                <h3 className="text-teal-500 font-bold mb-2">Equipment Required</h3>
                <div className="flex flex-col gap-3">
                  {sportEquipment[selectedSport]?.map((item) => (
                    <div key={item} className="flex items-center justify-between bg-[#1e1e1e] border border-gray-700 rounded p-2">
                      <span className="font-bold text-gray-300">{item}</span>
                      <div className="flex items-center gap-1">
                        <button 
                          type="button" 
                          onClick={() => decrementValue(item)}
                          className="bg-teal-600 text-white w-8 h-10 rounded flex items-center justify-center"
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          id={item} 
                          value={equipmentCounts[item] || 1}
                          readOnly
                          className="w-16 h-10 text-center bg-[#1e1e1e] border border-gray-700 rounded text-white"
                        />
                        <button 
                          type="button" 
                          onClick={() => incrementValue(item)}
                          className="bg-teal-600 text-white w-8 h-10 rounded flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className="mt-6 px-5 py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
            >
              Confirm Booking
            </button>
          </form>
        </section>
      </main>

      
    </div>
  );
}