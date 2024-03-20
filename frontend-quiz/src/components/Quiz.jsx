import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1);
  const [loading, setLoading] = useState(true); // New state to track loading status
  const navigate = useNavigate();
  const { name, category, difficulty, numQuestions } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuizData();
    }, 1000); // Delay fetching data for 1 second
    return () => clearTimeout(timer);
  }, [name, category, difficulty, numQuestions]);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const timer = setTimeout(() => {
        goToNextQuestion();
      }, getTimeForCurrentQuestion());
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex, questions]);

  const fetchQuizData = async () => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`);
      const data = await response.json();
      console.log('Quiz data:', data);
      setQuestions(data.results);
      setTimeLeft(getTimeForCurrentQuestion());
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('quiz data:', error);
    }
  };

  const getTimeForCurrentQuestion = () => {
    const difficultyFactor = {
      easy: 30,
      medium: 20,
      hard: 10
    };
    return difficultyFactor[difficulty] * 1000;
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setTimeLeft(getTimeForCurrentQuestion());
  };

  const handleAnswer = (selectedOption) => {
    setUserAnswers(prevAnswers => [...prevAnswers, selectedOption]);
    goToNextQuestion();
  };

  const handleSubmitQuiz = () => {
    navigate('/leaderboard');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box maxW="sm" m="auto" mt="10">
    {/* <Text>  {timeLeft}</Text> */}
      {loading ? ( // Render loading message while data is being fetched
        <Text>Loading...</Text>
      ) : questions.length > 0 ? (
        <>
          <Text mb="4">Question {currentQuestionIndex + 1} of {numQuestions}</Text>
          <Text mb="4">{currentQuestion?.question}</Text>
          {currentQuestion?.incorrect_answers.map((option, index) => (
            <Button key={index} variant="outline" mr="2" mb="2" onClick={() => handleAnswer(option)}>
              {option}
            </Button>
          ))}
          <Button mt="9" colorScheme="green" onClick={handleSubmitQuiz}>Submit</Button>
        </>
      ) : (
        <Text>No questions found.</Text>
      )}
    </Box>
  );
}

export default Quiz;
