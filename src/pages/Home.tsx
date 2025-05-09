import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Lean's Gambit</h1>
      <div className="game-description">
        <p>
          In the world of continuous improvement, every move counts. Welcome to Lean's Gambit,
          where your strategic thinking and knowledge of Lean principles will be put to the ultimate test.
        </p>
        <p>
          Through a series of challenging scenarios, you'll navigate the complex landscape of
          process improvement, making critical decisions that could transform your organization.
          Each challenge is a move in the grand game of operational excellence.
        </p>
        <p>
          Are you ready to make your first move?
        </p>
      </div>
      <button className="start-button" onClick={() => navigate('/letter')}>
        Begin the Game
      </button>
    </div>
  );
}

export default Home;
