const BASE_URL = 'http://localhost:3001';

export const fetchQuizQuestions = async (category, difficulty, numQuestions) => {
  try {
    const response = await fetch(`${BASE_URL}/quiz?category=${category}&difficulty=${difficulty}&numQuestions=${numQuestions}`);
    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
};


export const submitQuizResults = async (results) => {
  try {
    const response = await fetch(`${BASE_URL}/results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(results),
    });
    if (!response.ok) {
      throw new Error('Failed to submit quiz results');
    }
    return await response.json();
  } catch (error) {
    console.error('Error submitting quiz results:', error);
    throw error;
  }
};

// Function to fetch leaderboard data
export const fetchLeaderboardData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/leaderboard`);
    if (!response.ok) {
      throw new Error('Failed to fetch leaderboard data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};
