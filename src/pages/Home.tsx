import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Lean Gambit</h1>
      <div className="game-description">
        <p>
          Welcome to the Lean Gambit, where your knowledge of Lean principles will be put to the test.
          Through a series of challenging scenarios, you'll demonstrate your understanding of Lean methodology
          and continuous improvement practices.
        </p>
        <p>
          Each challenge presents a unique situation where you must apply your Lean knowledge to solve
          real-world problems. Are you ready to prove your expertise?
        </p>
      </div>
      <button className="start-button" onClick={() => navigate('/letter')}>
        Begin Your Journey
      </button>
    </div>
  );
}

export default Home;
