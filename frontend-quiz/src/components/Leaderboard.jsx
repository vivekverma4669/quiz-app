// components/Leaderboard.js
import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from JSON server
    fetch('https://your-json-server-url/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboardData(data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
