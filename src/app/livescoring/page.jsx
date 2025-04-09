'use client'
import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const liveGames = [
  {
    id: 1,
    sport: 'Cricket',
    team1: { name: 'Team A', score: '120/3' },
    team2: { name: 'Team B', score: '–' },
  },
  {
    id: 2,
    sport: 'Basketball',
    team1: { name: 'Team Alpha', score: '89' },
    team2: { name: 'Team Beta', score: '92' },
  },
  {
    id: 3,
    sport: 'Football',
    team1: { name: 'Team Red', score: '2' },
    team2: { name: 'Team Blue', score: '1' },
  },
  {
    id: 4,
    sport: 'Volleyball',
    team1: { name: 'Team Spike', score: '25' },
    team2: { name: 'Team Block', score: '23' },
  },
  {
    id: 5,
    sport: 'Table Tennis',
    team1: { name: 'Team Spin', score: '11' },
    team2: { name: 'Team Smash', score: '9' },
  },
];

const completedGames = [
  {
    id: 6,
    sport: 'Cricket',
    team1: { name: 'Team A', score: '120/3' },
    team2: { name: 'Team B', score: '115/10' },
  },
  {
    id: 7,
    sport: 'Basketball',
    team1: { name: 'Team Alpha', score: '95' },
    team2: { name: 'Team Beta', score: '92' },
  },
  {
    id: 8,
    sport: 'Football',
    team1: { name: 'Team Red', score: '3' },
    team2: { name: 'Team Blue', score: '2' },
  },
];

function ScoreCard({ game, status }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 relative w-full max-w-sm transform transition-transform hover:-translate-y-2 shadow-xl">
      <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${
        status === 'live' ? 'bg-red-500' : 'bg-green-500'
      } text-white`}>
        {status === 'live' ? 'LIVE' : 'COMPLETED'}
      </span>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-teal-500">{game.sport}</h3>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <h4 className="text-white font-medium mb-2">{game.team1.name}</h4>
          <p className="text-2xl font-bold text-teal-500">{game.team1.score}</p>
        </div>
        
        <div className="text-gray-400 font-medium">VS</div>
        
        <div className="text-center">
          <h4 className="text-white font-medium mb-2">{game.team2.name}</h4>
          <p className="text-2xl font-bold text-teal-500">{game.team2.score}</p>
        </div>
      </div>
      
      <button 
        onClick={() => alert(`Detailed Scorecard for ${game.sport} (${status})`)}
        className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors font-medium"
      >
        View Detailed Scorecard
      </button>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('live');

  return (
    <div className="min-h-screen bg-[#121212] text-white">


      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Live Scoring</h1>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveSection('live')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeSection === 'live' ? 'bg-teal-500 text-white' : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#3b3b3b]'
            }`}
          >
            Live Games
          </button>
          <button
            onClick={() => setActiveSection('completed')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeSection === 'completed' ? 'bg-teal-500 text-white' : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#3b3b3b]'
            }`}
          >
            Completed Games
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {activeSection === 'live' 
            ? liveGames.map(game => (
                <ScoreCard key={game.id} game={game} status="live" />
              ))
            : completedGames.map(game => (
                <ScoreCard key={game.id} game={game} status="completed" />
              ))
          }
        </div>
      </main>

    </div>
  );
}

export default App;