import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Puzzle from './pages/Puzzle';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/puzzle/:puzzleId" element={<Puzzle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
