import { useNavigate } from 'react-router-dom';

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <h1>Welcome to Your Lean Journey</h1>
      <div className="letter-content">
        <p>Dear Lean Enthusiast,</p>
        <p>
          Welcome to Lean Gambit, where you'll put your knowledge of Lean principles to the test!
          Through a series of challenging scenarios, you'll demonstrate your understanding of key
          Lean concepts and methodologies.
        </p>
        <p>
          Each puzzle presents a real-world situation where you must identify and apply the correct
          Lean principle. Think carefully about each scenario and choose wisely!
        </p>
        <p>Are you ready to begin your Lean adventure?</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/')}>Back</button>
        <button onClick={() => navigate('/puzzle/1')}>Start First Challenge</button>
      </div>
    </div>
  );
}

export default Letter;
