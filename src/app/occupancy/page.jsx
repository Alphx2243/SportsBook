'use client'
import React, { useState } from 'react';
import { Users, Percent } from 'lucide-react';

const sportsData = {
  badminton: {
    title: 'Badminton',
    students: 4,
    capacity: 10,
    equipment: [
      { name: 'Racquets', count: 4 },
      { name: 'Shuttlecocks', count: 1 }
    ],
    courtType: 'badminton-court',
    players: [
      { top: '20%', left: '20%' },
      { top: '20%', left: '70%' },
      { top: '70%', left: '20%' },
      { top: '70%', left: '70%' }
    ]
  },
  gym: {
    title: 'Gym',
    students: 12,
    capacity: 25,
    equipment: [
      { name: 'Treadmills', count: 3 },
      { name: 'Dumbbells', count: 8 },
      { name: 'Benches', count: 4 },
      { name: 'Exercise Bikes', count: 2 }
    ],
    courtType: 'gym-area',
    players: Array.from({ length: 12 }, (_, i) => ({
      top: `${10 + Math.floor(i / 4) * 30}%`,
      left: `${10 + (i % 4) * 25}%`
    }))
  },
  cricket: {
    title: 'Cricket',
    students: 11,
    capacity: 11,
    equipment: [
      { name: 'Bats', count: 2 },
      { name: 'Balls', count: 5 },
      { name: 'Wickets', count: 1 }
    ],
    courtType: 'cricket-field',
    players: Array.from({ length: 11 }, (_, i) => ({
      top: `${20 + i * 5}%`,
      left: `${20 + i * 5}%`
    }))
  },
  football: {
    title: 'Football',
    students: 14,
    capacity: 18,
    equipment: [
      { name: 'Balls', count: 2 },
      { name: 'Cones', count: 8 },
      { name: 'Bibs', count: 7 }
    ],
    courtType: 'football-field',
    players: Array.from({ length: 14 }, (_, i) => ({
      top: `${10 + i * 3}%`,
      left: `${10 + i * 3}%`
    }))
  }
};

const SportSelector = ({ value, onChange }) => (
  <div className="mb-6 text-center">
    <label htmlFor="sportSelect" className="text-white mr-3">Select Sport:</label>
    <select
      id="sportSelect"
      value={value}
      onChange={onChange}
      className="bg-[#1e1e1e] text-white px-4 py-2 rounded outline-none"
    >
      <option value="badminton">Badminton</option>
      <option value="gym">Gym</option>
      <option value="cricket">Cricket</option>
      <option value="football">Football</option>
    </select>
  </div>
);

const OccupancyCard = ({ sportInfo }) => {
  const occupancyRate = Math.round((sportInfo.students / sportInfo.capacity) * 100);
  
  const getStatusColor = (rate) => {
    if (rate < 50) return 'bg-green-500';
    if (rate < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 w-full max-w-lg shadow-xl">
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-teal-500">{sportInfo.title}</h2>
        <span className={`${getStatusColor(occupancyRate)} px-3 py-1 rounded-full text-sm font-semibold`}>
          {occupancyRate < 50 ? 'Available' : occupancyRate < 80 ? 'Busy' : 'Full'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#333] rounded-lg p-4 flex items-center">
          <Users className="text-teal-500 h-6 w-6 mr-3" />
          <div>
            <p className="text-gray-400 text-sm">Students Present</p>
            <p className="text-2xl font-bold text-white">{sportInfo.students}</p>
          </div>
        </div>
        <div className="bg-[#333] rounded-lg p-4 flex items-center">
          <Percent className="text-teal-500 h-6 w-6 mr-3" />
          <div>
            <p className="text-gray-400 text-sm">Occupancy Rate</p>
            <p className="text-2xl font-bold text-white">{occupancyRate}%</p>
          </div>
        </div>
      </div>

      <h3 className="text-teal-500 font-semibold mb-3">Equipment in Use</h3>
      <div className="bg-[#333] rounded-lg p-4">
        {sportInfo.equipment.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-600 last:border-0">
            <span className="text-gray-400">{item.name}</span>
            <span className="text-white font-semibold">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourtVisualization = ({ sportInfo }) => (
  <div className="bg-[#1e1e1e] rounded-lg p-6 w-full max-w-lg shadow-xl text-center">
    <h3 className="text-2xl font-bold text-teal-500 mb-4">Court Visualization</h3>
    <div className="relative w-full h-[300px] bg-[#333] rounded-lg overflow-hidden">
      <div className={`absolute inset-0 ${sportInfo.courtType}`}>
        {sportInfo.players.map((player, index) => (
          <div
            key={index}
            className="absolute w-5 h-5 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: player.top, left: player.left }}
          />
        ))}
      </div>
    </div>
  </div>
);

const TimeTable = () => (
  <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-xl">
    <h2 className="text-2xl font-bold text-teal-500 mb-6 text-center">Weekly Schedule</h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-3 text-left text-gray-400">Time</th>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
              <th key={day} className="p-3 text-gray-400">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { time: '09:00 - 11:00', slots: ['Open', 'Team', 'Open', 'Team', 'Open'] },
            { time: '11:00 - 13:00', slots: ['Team', 'Open', 'Team', 'Open', 'Team'] },
            { time: '14:00 - 16:00', slots: ['Open', 'Team', 'Open', 'Team', 'Open'] },
            { time: '16:00 - 18:00', slots: ['Team', 'Open', 'Team', 'Open', 'Team'] },
          ].map((row, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="p-3 text-gray-400">{row.time}</td>
              {row.slots.map((slot, j) => (
                <td key={j} className="p-3 text-center">
                  <span className={`px-2 py-1 rounded ${
                    slot === 'Team' ? 'bg-teal-500/20 text-teal-500' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {slot}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DataAnalysis = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-teal-500 mb-4">Usage Statistics</h3>
      <div className="space-y-4">
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Total Users Today</p>
          <p className="text-2xl font-bold text-white">124</p>
        </div>
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Average Session Duration</p>
          <p className="text-2xl font-bold text-white">1.5 hours</p>
        </div>
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Peak Hours</p>
          <p className="text-2xl font-bold text-white">4:00 PM - 6:00 PM</p>
        </div>
      </div>
    </div>
    <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-teal-500 mb-4">Weekly Trends</h3>
      <div className="space-y-4">
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Most Popular Day</p>
          <p className="text-2xl font-bold text-white">Wednesday</p>
        </div>
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Average Weekly Users</p>
          <p className="text-2xl font-bold text-white">850</p>
        </div>
        <div className="bg-[#333] rounded-lg p-4">
          <p className="text-gray-400 text-sm">Equipment Usage Rate</p>
          <p className="text-2xl font-bold text-white">75%</p>
        </div>
      </div>
    </div>
  </div>
);

const Occupancy = () => {
  const [selectedSport, setSelectedSport] = useState('badminton');
  const [activeTab, setActiveTab] = useState('liveVacancy');
  const sportInfo = sportsData[selectedSport];

  return (
    <div className="min-h-screen bg-[#121212] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Real-time Occupancy</h1>
        
        <div className="flex justify-center gap-4 mb-8">
          {['liveVacancy', 'timeTable', 'dataAnalysis'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-md transition-colors ${
                activeTab === tab 
                  ? 'bg-teal-600 text-gray-900' 
                  : 'bg-[#1e1e1e] text-white hover:bg-[#2d9a9642]'
              }`}
            >
              {tab === 'liveVacancy' ? 'Live Vacancy' : 
               tab === 'timeTable' ? 'Time Table' : 'Data Analysis'}
            </button>
          ))}
        </div>

        {activeTab === 'liveVacancy' && (
          <>
            <SportSelector 
              value={selectedSport} 
              onChange={(e) => setSelectedSport(e.target.value)} 
            />
            <div className="flex flex-wrap gap-8 justify-center">
              <OccupancyCard sportInfo={sportInfo} />
              <CourtVisualization sportInfo={sportInfo} />
            </div>
          </>
        )}

        {activeTab === 'timeTable' && <TimeTable />}
        {activeTab === 'dataAnalysis' && <DataAnalysis />}
      </div>
    </div>
  );
};

export default Occupancy;
