import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Replace with your FormSG form URL
    window.open('https://form.gov.sg/your-form-id', '_blank');
    setShowCodeInput(true);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically verify the code with your backend
    // For now, we'll use a dummy verification
    if (verificationCode === 'LEAN2024') { // Replace with actual verification logic
      navigate('/letter');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        <h1>Enter the Game</h1>
        {!showCodeInput ? (
          <>
            <p>
              To begin your journey in Lean's Gambit, you must first register through our official platform.
              This ensures a fair and organized experience for all participants.
            </p>
            <p>
              After registration, you will receive a verification code to proceed to the challenges.
            </p>
            <button className="register-button" onClick={handleRegister}>
              Register Now
            </button>
          </>
        ) : (
          <form onSubmit={handleCodeSubmit} className="verification-form">
            <p>
              Please enter the verification code you received after registration.
            </p>
            <div className="code-input">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="verification-buttons">
              <button type="button" onClick={() => setShowCodeInput(false)}>
                Back
              </button>
              <button type="submit">
                Verify Code
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Registration;
