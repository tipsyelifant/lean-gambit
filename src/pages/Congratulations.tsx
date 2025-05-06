import { useNavigate } from 'react-router-dom';

function Congratulations() {
  const navigate = useNavigate();

  const externalLinks = [
    {
      title: "Learn More About Lean",
      description: "Explore comprehensive resources about Lean methodology",
      url: "https://www.lean.org/",
      buttonText: "Visit Lean Enterprise Institute"
    },
    {
      title: "Join Our Community",
      description: "Connect with other Lean practitioners and share experiences",
      url: "https://www.linkedin.com/groups/lean-six-sigma-community-123456/",
      buttonText: "Join LinkedIn Group"
    },
    {
      title: "Start Your Journey",
      description: "Begin your Lean certification journey",
      url: "https://www.asq.org/cert/six-sigma",
      buttonText: "View Certification Programs"
    }
  ];

  return (
    <div className="congratulations-container">
      <div className="congratulations-content">
        <h1>Congratulations! 🎉</h1>
        <p className="success-message">You've successfully completed all Lean Gambit challenges!</p>
        <p className="subtitle">Your understanding of Lean principles has been proven. Here are some resources to continue your Lean journey:</p>
        
        <div className="external-links">
          {externalLinks.map((link, index) => (
            <div key={index} className="link-card">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link-button"
              >
                {link.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button onClick={() => navigate('/')}>Return to Home</button>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
