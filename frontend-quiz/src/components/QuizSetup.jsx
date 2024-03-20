import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

function QuizSetup() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('21');
  const [difficulty, setDifficulty] = useState('easy');
  const [numQuestions, setNumQuestions] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (name && category && difficulty && numQuestions) {
      navigate(`/quiz/${name}/${category}/${difficulty}/${numQuestions}`);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Box maxW="sm" m="auto" mt="10">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input   type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Category</FormLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
        </Select>
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Difficulty</FormLabel>
        <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Number of Questions</FormLabel>
        <Input type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
      </FormControl>
      <Button mt="6" colorScheme="teal" onClick={handleStartQuiz}>Start Quiz</Button>
    </Box>
  );
}

export default QuizSetup;
