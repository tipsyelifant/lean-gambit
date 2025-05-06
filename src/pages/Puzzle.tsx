import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Puzzle() {
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement answer validation
    setFeedback('Your answer has been submitted!');
  };

  return (
    <div className="puzzle-container">
      <h1>Challenge {puzzleId}</h1>
      <div className="puzzle-content">
        <h2>Scenario</h2>
        <p>
          A manufacturing team has implemented a 5S system to organize their workspace.
          They've sorted, set in order, and cleaned their area, but they're still experiencing
          efficiency issues. What's the next step they should take?
        </p>
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
        {feedback && <p className="feedback">{feedback}</p>}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/letter')}>Back</button>
        <button onClick={() => navigate(`/puzzle/${Number(puzzleId) + 1}`)}>
          Next Challenge
        </button>
      </div>
    </div>
  );
}

export default Puzzle;
