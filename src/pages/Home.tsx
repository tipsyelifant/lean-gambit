import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Lean's Gambit</h1>
        <p>Welcome to the ultimate Lean Manufacturing challenge. Test your knowledge and skills in this exciting escape room experience.</p>
        <button className="start-button" onClick={() => navigate('/registration')}>
          Begin Your Journey
        </button>
      </div>
    </div>
  )
}

export default Home
