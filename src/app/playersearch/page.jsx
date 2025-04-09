'use client'
import React, { useState } from 'react';
import { Search, Users, Brain } from 'lucide-react';
import Matchmaking from './Matchmaking';
import TeamMaking from './TeamMaking';
import Assistance from './Assisstance';

const PlayerSearch = () => {
  const [activeTab, setActiveTab] = useState('matchmaking');

  return (
    <div className="min-h-screen bg-[#121212] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Player Search & Team Making</h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('matchmaking')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-colors ${
              activeTab === 'matchmaking' 
                ? 'bg-teal-600 text-gray-900' 
                : 'bg-[#1e1e1e] text-white hover:bg-[#353535]'
            }`}
          >
            <Search className="h-5 w-5" />
            Matchmaking
          </button>
          <button
            onClick={() => setActiveTab('teammaking')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-colors ${
              activeTab === 'teammaking' 
                ? 'bg-teal-600 text-gray-900' 
                : 'bg-[#1e1e1e] text-white hover:bg-[#353535]'
            }`}
          >
            <Users className="h-5 w-5" />
            Team Making
          </button>
          <button
            onClick={() => setActiveTab('assistance')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-colors ${
              activeTab === 'assistance' 
                ? 'bg-teal-600 text-gray-900' 
                : 'bg-[#1e1e1e] text-white hover:bg-[#353535]'
            }`}
          >
            <Brain className="h-5 w-5" />
            Assistance
          </button>
        </div>

        {activeTab === 'matchmaking' && <Matchmaking />}
        {activeTab === 'teammaking' && <TeamMaking />}
        {activeTab === 'assistance' && <Assistance />}
      </div>
    </div>
  );
};

export default PlayerSearch;