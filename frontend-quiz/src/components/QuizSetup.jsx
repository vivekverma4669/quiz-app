// components/QuizSetup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function QuizSetup() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const history = useHistory();

  const handleStartQuiz = () => {
    // Redirect to quiz page with query parameters
    history.push(`/quiz?name=${name}&category=${category}&difficulty=${difficulty}&numQuestions=${numQuestions}`);
  };

  return (
    <div>
      <h1>Quiz Setup</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
      <input type="number" placeholder="Number of Questions" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default QuizSetup;
