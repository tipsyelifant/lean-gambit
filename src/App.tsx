import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Puzzle from './pages/Puzzle';
import Congratulations from './pages/Congratulations';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/puzzle/:puzzleId" element={<Puzzle />} />
          <Route path="/congratulations" element={<Congratulations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
