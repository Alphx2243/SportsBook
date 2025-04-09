import React, { useState } from 'react';

const Assistance = () => {
  const [assistType, setAssistType] = useState('');
  const [mentorSport, setMentorSport] = useState('');
  const [mentorExperience, setMentorExperience] = useState('');
  const [assistSport, setAssistSport] = useState('');
  const [assistSkill, setAssistSkill] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [description, setDescription] = useState('');

  const handleDayToggle = (day) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleMentorSubmit = () => {
    if (!mentorSport || !mentorExperience) {
      alert('Please fill out all fields in the mentor application.');
      return;
    }
    alert('Mentor Application Submitted for ' + mentorSport);
  };

  const handleAssistanceSubmit = () => {
    if (!assistSport || !assistSkill || !timeFrom || !timeTo || selectedDays.length === 0 || !description) {
      alert('Please fill out all fields in the assistance request form.');
      return;
    }
    alert(
      'Assistance Request Submitted:\n' +
      'Sport: ' + assistSport + '\n' +
      'Skill: ' + assistSkill + '\n' +
      'Time Slot: ' + timeFrom + ' - ' + timeTo + '\n' +
      'Days: ' + selectedDays.join(', ') + '\n' +
      'Description: ' + description
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#121212] p-6 rounded-lg shadow-lg mb-8">
        <select
          value={assistType}
          onChange={(e) => setAssistType(e.target.value)}
          className="w-full px-4 py-2 mb-6 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
        >
          <option value="">Select Option</option>
          <option value="mentor">Apply as Mentor</option>
          <option value="assistance">Request Coaching Assistance</option>
        </select>

        {assistType === 'mentor' && (
          <div className="space-y-4">
            <select
              value={mentorSport}
              onChange={(e) => setMentorSport(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
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

            <textarea
              placeholder="Your coaching/playing experience"
              value={mentorExperience}
              onChange={(e) => setMentorExperience(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500 h-32"
            />

            <button
              onClick={handleMentorSubmit}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-semibold"
            >
              Submit Mentor Application
            </button>
          </div>
        )}

        {assistType === 'assistance' && (
          <div className="space-y-4">
            <select
              value={assistSport}
              onChange={(e) => setAssistSport(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
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

            <select
              value={assistSkill}
              onChange={(e) => setAssistSkill(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">From:</label>
                <input
                  type="time"
                  value={timeFrom}
                  onChange={(e) => setTimeFrom(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">To:</label>
                <input
                  type="time"
                  value={timeTo}
                  onChange={(e) => setTimeTo(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Available Days:</label>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedDays.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="form-checkbox h-4 w-4 text-teal-600 rounded border-gray-600 bg-[#1e1e1e]"
                    />
                    <span className="text-white">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Describe your needs in detail"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-600 focus:outline-none focus:border-teal-500 h-32"
            />

            <button
              onClick={handleAssistanceSubmit}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-semibold"
            >
              Submit Assistance Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assistance;
