import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Define the challenges and their answers
const challenges = {
  '1': {
    title: '5S Implementation',
    scenario: 'A manufacturing team has implemented a 5S system to organize their workspace. They\'ve sorted, set in order, and cleaned their area, but they\'re still experiencing efficiency issues. What\'s the next step they should take?',
    answer: 'standardize',
    hint: 'Think about making the process consistent and repeatable'
  },
  '2': {
    title: 'Value Stream Mapping',
    scenario: 'A team is trying to identify waste in their process. They\'ve mapped out all their current steps, but they\'re not sure how to proceed. What tool should they use to analyze the flow of materials and information?',
    answer: 'value stream mapping',
    hint: 'It\'s a visual tool that shows the flow of materials and information'
  },
  '3': {
    title: 'Kanban System',
    scenario: 'A production line is experiencing inventory issues - sometimes they have too much stock, sometimes they run out. What system should they implement to control inventory levels?',
    answer: 'kanban',
    hint: 'It\'s a visual signaling system that originated in Japan'
  },
  '4': {
    title: 'Kaizen Event',
    scenario: 'A team has identified several improvement opportunities but is struggling to implement changes effectively. What type of focused improvement activity should they conduct?',
    answer: 'kaizen',
    hint: 'It\'s a Japanese term meaning "change for better"'
  }
};

function Puzzle() {
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset states when puzzleId changes
  useEffect(() => {
    setAnswer('');
    setFeedback('');
    setShowHint(false);
    setIsCorrect(false);
  }, [puzzleId]);

  const currentChallenge = challenges[puzzleId as keyof typeof challenges];

  if (!currentChallenge) {
    return (
      <div className="puzzle-container">
        <h1>Congratulations!</h1>
        <p>You've completed all challenges!</p>
        <button onClick={() => navigate('/congratulations')}>View Your Achievement</button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswer = answer.toLowerCase().trim();
    
    if (userAnswer === currentChallenge.answer) {
      setFeedback('Correct! You can now proceed to the next challenge.');
      setIsCorrect(true);
    } else {
      setFeedback('Incorrect. Try again!');
      setShowHint(true);
      setIsCorrect(false);
    }
  };

  const handleNextChallenge = () => {
    if (isCorrect) {
      if (Number(puzzleId) < 4) {
        navigate(`/puzzle/${Number(puzzleId) + 1}`);
      } else {
        navigate('/congratulations');
      }
    } else {
      setFeedback('You must answer this challenge correctly before proceeding!');
    }
  };

  const handleBack = () => {
    if (Number(puzzleId) > 1) {
      navigate(`/puzzle/${Number(puzzleId) - 1}`);
    } else {
      navigate('/letter');
    }
  };

  return (
    <div className="puzzle-container">
      <h1>Challenge {puzzleId}: {currentChallenge.title}</h1>
      <div className="puzzle-content">
        <h2>Scenario</h2>
        <p>{currentChallenge.scenario}</p>
        <form onSubmit={handleSubmit}>
          <div className="answer-input">
            <label htmlFor="answer">Your Answer:</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer..."
            />
          </div>
          <button type="submit">Submit Answer</button>
        </form>
        {feedback && <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>}
        {showHint && <p className="hint">Hint: {currentChallenge.hint}</p>}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack}>Back</button>
        {Number(puzzleId) < 4 ? (
          <button 
            onClick={handleNextChallenge}
            className={isCorrect ? 'next-button' : 'next-button disabled'}
          >
            Next Challenge
          </button>
        ) : (
          <button 
            onClick={handleNextChallenge}
            className={isCorrect ? 'next-button complete' : 'next-button disabled'}
          >
            Complete Challenge
          </button>
        )}
      </div>
    </div>
  );
}

export default Puzzle;
