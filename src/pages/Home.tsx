import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Lean Gambit</h1>
      <div className="game-description">
        <p>Welcome to Lean Gambit, a game that challenges your understanding of Lean principles!</p>
        <p>Test your knowledge and improve your understanding of Lean methodology through interactive scenarios.</p>
      </div>
      <button 
        className="start-button"
        onClick={() => navigate('/letter')}
      >
        Start Game
      </button>
    </div>
  );
}

export default Home;
