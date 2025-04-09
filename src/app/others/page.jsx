'use client'
import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('community');
  const [feedbackType, setFeedbackType] = useState('');
  
  const communityLinks = [
    {
      name: 'WhatsApp Community',
      url: 'https://chat.whatsapp.com/yourwhatsapplink',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    },
    {
      name: 'Reddit Community',
      url: 'https://www.reddit.com/r/yourcommunity',
      icon: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png'
    },
    {
      name: 'Facebook Group',
      url: 'https://www.facebook.com/groups/yourcommunity',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    }
  ];

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!feedbackType) {
      alert('Please select a feedback type.');
      return;
    }
    alert('Feedback submitted.');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
     
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Community & Feedback</h1>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveSection('community')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeSection === 'community' ? 'bg-teal-500 text-white' : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#383838]'
            }`}
          >
            Join a Community
          </button>
          <button
            onClick={() => setActiveSection('feedback')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeSection === 'feedback' ? 'bg-teal-500 text-white' : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#383838]'
            }`}
          >
            Give Feedback
          </button>
        </div>

        {activeSection === 'community' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-8">Join Our Communities</h2>
            <div className="space-y-4">
              {communityLinks.map((community, index) => (
                <a
                  key={index}
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#1e1e1e] rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <img src={community.icon} alt={community.name} className="w-10 h-10" />
                  <span className="text-lg font-medium">{community.name}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'feedback' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-8">Give Your Feedback</h2>
            <form onSubmit={handleSubmitFeedback} className="bg-[#1e1e1e] p-6 rounded-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">What is your feedback regarding?</label>
                  <select
                    value={feedbackType}
                    onChange={(e) => setFeedbackType(e.target.value)}
                    className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white"
                  >
                    <option value="">Select</option>
                    <option value="player">Player</option>
                    <option value="equipment">Sports Equipment</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {feedbackType === 'player' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Player Name:</label>
                      <input
                        type="text"
                        placeholder="Enter the player's name"
                        className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Feedback about the Player:</label>
                      <textarea
                        placeholder="Enter your feedback about the player"
                        className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white h-32 resize-none"
                      />
                    </div>
                  </div>
                )}

                {feedbackType === 'equipment' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Sport Name:</label>
                      <input
                        type="text"
                        placeholder="Enter the sport name"
                        className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Describe Your Problem:</label>
                      <textarea
                        placeholder="Describe the issues with the equipment"
                        className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white h-32 resize-none"
                      />
                    </div>
                  </div>
                )}

                {feedbackType === 'others' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe Your Feedback:</label>
                    <textarea
                      placeholder="Enter your feedback"
                      className="w-full bg-[#1e1e1e] rounded-lg p-3 text-white h-32 resize-none"
                    />
                  </div>
                )}

                {feedbackType && (
                  <button
                    type="submit"
                    className="w-full bg-teal-500 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                  >
                    Submit Feedback
                  </button>
                )}
              </div>
            </form>
          </section>
        )}
      </main>

    </div>
  );
}

export default App;