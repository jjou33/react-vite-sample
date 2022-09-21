import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <p>홈.</p>
      <Link to="/test">
        <button>Go Test</button>
      </Link>
    </div>
  )
}

export default Home
