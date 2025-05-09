import { useNavigate } from 'react-router-dom';

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="letter-content">
        <h1>Welcome to Your Lean Journey</h1>
        <p>Dear Lean Enthusiast,</p>
        <p>
          You have been chosen to participate in a series of challenges that will test your understanding
          of Lean principles and continuous improvement methodologies. Your mission is to solve each
          challenge by applying the appropriate Lean tools and concepts.
        </p>
        <p>
          Each challenge represents a real-world scenario where Lean principles can be applied to
          improve processes and eliminate waste. Your knowledge and expertise will be crucial in
          finding the right solutions.
        </p>
        <p>
          Are you ready to begin your journey? The first challenge awaits...
        </p>
        <div className="navigation-buttons">
          <button onClick={() => navigate('/')}>Return</button>
          <button onClick={() => navigate('/puzzle/1')}>Begin First Challenge</button>
        </div>
      </div>
    </div>
  );
}

export default Letter;
