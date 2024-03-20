// components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function Quiz() {
  const location = useLocation();
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { name, category, difficulty, numQuestions } = new URLSearchParams(location.search);

  useEffect(() => {
    // Fetch questions based on query parameters
    fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then(data => setQuestions(data.results))
      .catch(error => console.error('Error fetching questions:', error));
  }, [category, difficulty, numQuestions]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Redirect to leaderboard or quiz summary page
      history.push('/leaderboard');
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions.length > 0 && (
        <div>
          <p>Question {currentQuestionIndex + 1} of {numQuestions}</p>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].incorrect_answers.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
            <li>{questions[currentQuestionIndex].correct_answer}</li>
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
