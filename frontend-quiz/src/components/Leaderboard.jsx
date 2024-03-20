import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from JSON server
    fetch('http://localhost:3001/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboardData(data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div>
      <h2 mb="4">Leaderboard</h2>
      {leaderboardData.map((entry, index) => (
        <div key={index} mb="2">
          <p>{entry.name} - Score: {entry.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
