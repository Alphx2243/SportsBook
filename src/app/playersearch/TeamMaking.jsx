'use client'
import React, { useState } from 'react';
import { generatePlayers } from '../../utils/PlayerData';

const TeamMaking = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [eligiblePlayers, setEligiblePlayers] = useState([]);

  const loadEligiblePlayers = () => {
    if (!selectedSport) {
      alert('Please select a sport.');
      return;
    }

    const players = generatePlayers(20).filter(
      player => player.sport.toLowerCase() === selectedSport.toLowerCase()
    );

    setEligiblePlayers(players);
    setShowInviteForm(true);
  };

  const sendInvites = () => {
    if (!venue || !date || !time) {
      alert('Please fill out all details.');
      return;
    }

    alert(`Invites sent for match at ${venue} on ${date} ${time}.`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#121212] p-6 rounded-lg shadow-lg mb-8">
        <select
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
        >
          <option value="">Select Sport</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="volleyball">Volleyball</option>
          <option value="cricket">Cricket</option>
          <option value="tabletennis">Table Tennis</option>
          <option value="lawntennis">Lawn Tennis</option>
          <option value="badminton">Badminton</option>
        </select>

        <button
          onClick={loadEligiblePlayers}
          className="w-full px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
        >
          Show Eligible Players
        </button>
      </div>

      {showInviteForm && (
        <>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <p className="text-teal-500 font-semibold mb-4">
              Eligible Players: {eligiblePlayers.length}
            </p>

            <div className="grid gap-4 mb-6">
              <input
                type="text"
                placeholder="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <button
              onClick={sendInvites}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-semibold"
            >
              Send Invites
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {eligiblePlayers.map((player) => (
              <div
                key={player.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gray-700"
                />
                <h3 className="text-sm font-semibold text-teal-500 mb-1">{player.name}</h3>
                <p className="text-xs text-gray-400">{player.skill}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMaking;
