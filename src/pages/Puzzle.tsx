import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Define the challenges and their answers
const challenges = {
  '1': {
    title: '5S Implementation',
    scenario: 'A manufacturing team has implemented a 5S system to organize their workspace. They\'ve sorted, set in order, and cleaned their area, but they\'re still experiencing efficiency issues. What\'s the next step they should take?',
    answer: 'standardize',
    hint: 'Think about making the process consistent and repeatable',
    image: '/images/5s-implementation.jpg',
    imageAlt: 'A manufacturing workspace showing 5S implementation',
    workApplication: {
      title: 'Applying 5S in Public Service',
      description: 'In a public service context, standardization can be applied to:',
      points: [
        'Document Management: Create consistent filing systems across departments',
        'Workspace Organization: Implement standard desk and office layouts',
        'Process Documentation: Develop standard operating procedures for common tasks',
        'Digital Organization: Standardize folder structures and naming conventions'
      ],
      impact: 'By standardizing these elements, you can reduce time spent searching for information, minimize errors, and make it easier for colleagues to collaborate effectively.'
    }
  },
  '2': {
    title: 'Value Stream Mapping',
    scenario: 'A team is trying to identify waste in their process. They\'ve mapped out all their current steps, but they\'re not sure how to proceed. What tool should they use to analyze the flow of materials and information?',
    answer: 'value stream mapping',
    hint: 'It\'s a visual tool that shows the flow of materials and information',
    image: '/images/value-stream-mapping.jpg',
    imageAlt: 'A value stream map showing process flow',
    workApplication: {
      title: 'Value Stream Mapping in Government Services',
      description: 'Value Stream Mapping can transform public service processes by:',
      points: [
        'Permit Processing: Map the flow of applications from submission to approval',
        'Service Delivery: Visualize citizen service request journey',
        'Internal Processes: Track administrative workflows across departments',
        'Information Flow: Analyze how data moves between agencies'
      ],
      impact: 'By mapping these processes, you can identify bottlenecks, reduce processing times, and improve citizen satisfaction with government services.'
    }
  },
  '3': {
    title: 'Kanban System',
    scenario: 'A production line is experiencing inventory issues - sometimes they have too much stock, sometimes they run out. What system should they implement to control inventory levels?',
    answer: 'kanban',
    hint: 'It\'s a visual signaling system that originated in Japan',
    image: '/images/kanban-board.jpg',
    imageAlt: 'A Kanban board showing work items and their status',
    workApplication: {
      title: 'Kanban in Public Administration',
      description: 'Kanban principles can enhance public service workflow management through:',
      points: [
        'Project Tracking: Visualize project stages and progress',
        'Task Management: Control work-in-progress limits for teams',
        'Resource Allocation: Balance workload across staff members',
        'Service Requests: Manage and prioritize citizen inquiries'
      ],
      impact: 'Implementing Kanban can help teams visualize work, prevent overload, and ensure timely delivery of public services.'
    }
  },
  '4': {
    title: 'Kaizen Event',
    scenario: 'A team has identified several improvement opportunities but is struggling to implement changes effectively. What type of focused improvement activity should they conduct?',
    answer: 'kaizen',
    hint: 'It\'s a Japanese term meaning "change for better"',
    image: '/images/kaizen-event.jpg',
    imageAlt: 'A team conducting a Kaizen event',
    workApplication: {
      title: 'Kaizen in Government Operations',
      description: 'Kaizen events can revolutionize public service delivery through:',
      points: [
        'Process Improvement: Conduct focused workshops to streamline procedures',
        'Service Enhancement: Gather team input for service quality improvements',
        'Workplace Efficiency: Identify and eliminate administrative waste',
        'Cultural Change: Foster a continuous improvement mindset'
      ],
      impact: 'Regular Kaizen events can lead to incremental improvements that significantly enhance public service efficiency and effectiveness.'
    }
  }
};

function Puzzle() {
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWorkApplication, setShowWorkApplication] = useState(false);

  // Reset states when puzzleId changes
  useEffect(() => {
    setAnswer('');
    setFeedback('');
    setShowHint(false);
    setIsCorrect(false);
    setShowWorkApplication(false);
  }, [puzzleId]);

  const currentChallenge = challenges[puzzleId as keyof typeof challenges];

  if (!currentChallenge) {
    return (
      <div className="puzzle-container">
        <h1>Congratulations!</h1>
        <p>You've completed all challenges!</p>
        <button onClick={() => navigate('/congratulations')}>View Your Achievement</button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswer = answer.toLowerCase().trim();
    
    if (userAnswer === currentChallenge.answer) {
      setFeedback('Correct! You can now proceed to the next challenge.');
      setIsCorrect(true);
      setShowWorkApplication(true);
    } else {
      setFeedback('Incorrect. Try again!');
      setShowHint(true);
      setIsCorrect(false);
      setShowWorkApplication(false);
    }
  };

  const handleNextChallenge = () => {
    if (isCorrect) {
      if (Number(puzzleId) < 4) {
        navigate(`/puzzle/${Number(puzzleId) + 1}`);
      } else {
        navigate('/congratulations');
      }
    } else {
      setFeedback('You must answer this challenge correctly before proceeding!');
    }
  };

  const handleBack = () => {
    if (Number(puzzleId) > 1) {
      navigate(`/puzzle/${Number(puzzleId) - 1}`);
    } else {
      navigate('/letter');
    }
  };

  return (
    <div className="puzzle-container">
      <h1>Challenge {puzzleId}: {currentChallenge.title}</h1>
      <div className="puzzle-content">
        <h2>Scenario</h2>
        <p>{currentChallenge.scenario}</p>
        
        <div className="challenge-image">
          <img 
            src={currentChallenge.image} 
            alt={currentChallenge.imageAlt}
            className="scenario-image"
          />
        </div>

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
        {feedback && <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>}
        {showHint && <p className="hint">Hint: {currentChallenge.hint}</p>}
        
        {showWorkApplication && (
          <div className="work-application">
            <h2>How can I apply this to my work?</h2>
            <h3>{currentChallenge.workApplication.title}</h3>
            <p>{currentChallenge.workApplication.description}</p>
            <ul>
              {currentChallenge.workApplication.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className="impact">{currentChallenge.workApplication.impact}</p>
          </div>
        )}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack}>Back</button>
        {Number(puzzleId) < 4 ? (
          <button 
            onClick={handleNextChallenge}
            className={isCorrect ? 'next-button' : 'next-button disabled'}
          >
            Next Challenge
          </button>
        ) : (
          <button 
            onClick={handleNextChallenge}
            className={isCorrect ? 'next-button complete' : 'next-button disabled'}
          >
            Complete Challenge
          </button>
        )}
      </div>
    </div>
  );
}

export default Puzzle;
