import React from "react";

const sports = [
  "Football",
  "Basketball",
  "Volleyball",
  "Cricket",
  "Table Tennis",
  "Lawn Tennis",
  "Badminton"
];

const skills = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert"
];

export const generatePlayers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    sport: sports[i % sports.length],
    skill: skills[i % skills.length],
    image: "https://via.placeholder.com/150"
  }));
};

const PlayerList = () => {
  const players = generatePlayers(10); // Adjust the count as needed

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {players.map((player) => (
        <div key={player.id} className="p-4 border rounded shadow">
          <img src={player.image} alt={player.name} className="w-full mb-2" />
          <h2 className="text-lg font-semibold">{player.name}</h2>
          <p>Sport: {player.sport}</p>
          <p>Skill: {player.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
