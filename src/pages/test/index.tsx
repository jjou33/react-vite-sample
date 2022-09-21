import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <p>테스트.</p>
      <Link to="/home">
        <button>Go Home</button>
      </Link>
    </div>
  )
}

export default Home
