import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function QRSection() {
  const [time, setTime] = useState({ hours: 1, minutes: 0, seconds: 0 });
  const [showQR, setShowQR] = useState(false);

  const features = [
    {
      title: 'Real-Time Occupancy',
      link: '/occupancy',
    },
    {
      title: 'Advanced Player Search',
      link: '/playersearch',
    },
    {
      title: 'Smart Booking System',
      link: '/bookingsystem',
    },
    {
      title: 'Community and Feedback',
      link: '/feedback',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowQR(prev => !prev)}
            className="bg-[#1a1a1a] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#2d2d2d] transition mb-4"
          >
            {showQR ? 'Hide QR' : 'Show QR'}
          </button>

          {showQR && (
            <Link href="./afterscan">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
                alt="QR Code"
                className="w-48 h-48 bg-white p-2 rounded-lg"
              />
            </Link>
          )}

{showQR && (
  <span
            className="bg-[#1a1a1a]   text-white px-6 py-2 mt-2 rounded hover:bg-[#2d2d2d] transition mb-4"
          >
            Click on the QR
          </span>
)}


        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg min-w-[400px]">
          <div className="flex justify-between pb-4 w-auto gap-7">
            <div>
              <h3 className="text-[#3fadab] text-xl mb-2 font-bold">Time Remaining</h3>
              <div className="text-4xl font-mono text-white">
                {String(time.hours).padStart(2, '0')}:
                {String(time.minutes).padStart(2, '0')}:
                {String(time.seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="bg-[#3fadab] w-[0.1rem] h-auto "></div>
            <div>
              <h3 className="text-[#3fadab] text-xl font-bold">Booking Details</h3>
              <div className="text-gray-300 space-y-1">
                <p><span className="text-white">Venue:</span> Basketball Court</p>
                <p><span className="text-white">Date:</span> March 15, 2025</p>
                <p><span className="text-white">Time Slot:</span> 6:30 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QRSection;
