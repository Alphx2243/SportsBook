import React from 'react';
import { X } from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`!text-white fixed inset-y-0 left-0 w-64 bg-[#1e1e1e] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#3fadab] text-xl font-bold">MENU</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav>
          <ul className="space-y-6">
            <li>
              <span className="text-[#3fadab] font-semibold block mb-2">Platform</span>
              <ul className="ml-4 space-y-2">
                {/* <li><a href="./scan" className="text-gray-300 hover:text-white">Scan</a></li> */}
                {/* <li><a href="./sports" className="text-gray-300 hover:text-white">Sports</a></li> */}
                {/* <li><a href="./leaderboard" className="text-gray-300 hover:text-white">Leaderboard</a></li> */}
                <li><a href="./livescoring" className="text-gray-300 hover:text-white">Live Scoring</a></li>
              </ul>
            </li>
            <li>
              <span className="text-[#3fadab] font-semibold block mb-2">Features</span>
              <ul className="ml-4 space-y-2">
                <li><a href="./occupancy" className="text-gray-300 hover:text-white">Occupancy</a></li>
                <li><a href="./playersearch" className="text-gray-300 hover:text-white">Player Search</a></li>
                <li><a href="./bookingsystem" className="text-gray-300 hover:text-white">Booking</a></li>
                <li><a href="./cointoss" className="text-gray-300 hover:text-white">Coin Toss</a></li>
                <li><a href="./others" className="text-gray-300 hover:text-white">Others</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
