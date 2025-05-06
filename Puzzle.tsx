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
        <p>
          Read the scenario below and identify which Lean principle is being demonstrated
          or should be applied.
        </p>
        <div className="scenario">
          <h2>Scenario</h2>
          <p>
            A manufacturing team notices that they're spending significant time searching
            for tools and materials. They decide to implement a 5S system to organize
            their workspace.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="answer-section">
            <label htmlFor="answer">Your Answer:</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter the Lean principle..."
            />
          </div>
          <button type="submit">Submit Answer</button>
        </form>
        {feedback && <div className="feedback">{feedback}</div>}
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
