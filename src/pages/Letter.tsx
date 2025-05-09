import { useNavigate } from 'react-router-dom';

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="letter-content">
        <h1>The Challenge Begins</h1>
        <p>Dear Strategist,</p>
        <p>
          You have been selected to participate in a series of challenges that will test your mastery
          of Lean principles and continuous improvement methodologies. Like a grandmaster in chess,
          you must think several moves ahead, anticipating the impact of each decision.
        </p>
        <p>
          Each challenge represents a critical position in the game of operational excellence.
          Your knowledge of Lean tools and concepts will be your pieces on the board, and your
          strategic thinking will determine your success.
        </p>
        <p>
          The first challenge awaits. Will you make the right move?
        </p>
        <div className="navigation-buttons">
          <button onClick={() => navigate('/')}>Return to Board</button>
          <button onClick={() => navigate('/puzzle/1')}>Make Your Move</button>
        </div>
      </div>
    </div>
  );
}

export default Letter;
