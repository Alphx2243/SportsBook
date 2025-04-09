'use client'
import React, { useState, useRef } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [result, setResult] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const coinRef = useRef(null);

  const handleCoinToss = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setResult('');
    
    coinRef.current.style.animation = 'none';
    coinRef.current.offsetHeight; 
    coinRef.current.style.animation = null;
    
    const newResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    coinRef.current.style.animation = 'flip 3s ease-out forwards';
    
    setTimeout(() => {
      coinRef.current.style.transform = newResult === 'Heads' 
        ? 'rotateY(1800deg)' 
        : 'rotateY(1980deg)';
      setResult(newResult);
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center pt-12">
          <h1 className="text-4xl font-bold mb-4">Coin Toss Simulator</h1>
          <p className="text-gray-400 mb-8">Click the button below to flip the coin!</p>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 my-8 preserve-3d">
              <div 
                ref={coinRef}
                className="absolute w-full h-full preserve-3d transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 border-4 border-teal-500"
                     style={{ backfaceVisibility: 'hidden' }}>
                  <div className="text-2xl font-bold text-teal-500">H</div>
                </div>
                <div className="absolute w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 border-4 border-teal-500"
                     style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="text-2xl font-bold text-teal-500">T</div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCoinToss}
              disabled={isAnimating}
              className="px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Toss Coin
            </button>

            {result && (
              <div className="mt-6 text-2xl font-bold text-teal-500">
                {result}
              </div>
            )}
          </div>
        </div>
      </main>


      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0); }
          100% { transform: rotateY(1800deg); }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

export default App;