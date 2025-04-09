'use client'
import React, { useState } from 'react';
import { generatePlayers } from '../../utils/PlayerData';

const Matchmaking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sportFilter, setSportFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 20;

  const allPlayers = generatePlayers(50);

  const filteredPlayers = allPlayers.filter(player => {
    const matchesName = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = sportFilter ? player.sport.toLowerCase() === sportFilter.toLowerCase() : true;
    const matchesSkill = skillFilter ? player.skill.toLowerCase() === skillFilter.toLowerCase() : true;
    return matchesName && matchesSport && matchesSkill;
  });

  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
  const currentPlayers = filteredPlayers.slice(
    (currentPage - 1) * playersPerPage,
    currentPage * playersPerPage
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search players by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-64 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:border-teal-500"
        />
        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          className="w-full md:w-48 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:border-teal-500"
        >
          <option value="">All Sports</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="volleyball">Volleyball</option>
          <option value="cricket">Cricket</option>
          <option value="tabletennis">Table Tennis</option>
          <option value="lawntennis">Lawn Tennis</option>
          <option value="badminton">Badminton</option>
        </select>
        <select
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
          className="w-full md:w-48 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:border-teal-500"
        >
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mb-8">
        {currentPlayers.map((player) => (
          <div
            key={player.id}
            className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-gray-700"
            />
            <h3 className="text-lg font-semibold text-teal-500 mb-1">{player.name}</h3>
            <p className="text-sm text-gray-400">{player.sport}</p>
            <p className="text-sm text-gray-400">{player.skill}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#1e1e1e] text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#353434]"
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#1e1e1e] text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#353434]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Matchmaking;
