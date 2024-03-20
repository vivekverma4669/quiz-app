import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import QuizSetup from './components/QuizSetup';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<QuizSetup />} />
        <Route path="/quiz/:name/:category/:difficulty/:numQuestions" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
