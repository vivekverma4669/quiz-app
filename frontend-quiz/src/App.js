import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import QuizSetup from './components/QuizSetup';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    
    <Router>
      <div>
          <Route path="/" exact component={QuizSetup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/leaderboard" component={Leaderboard} />
       
      </div>
    </Router>
  );
}

export default App;
