import { useNavigate } from 'react-router-dom'

// NotFound 페이지
const NotFound = () => {
  // 기존 react-route v5 버전에서 useHistory 기능이 useNavigate 로 변경됨
  const navigate = useNavigate()
  const goHome = () => {
    // HOME 으로 이동하기 위함
    // replace 의 기본값은 false 이며 history 역할 가능
    // true 일 경우 무조건 / path 로 이동
    // navigate(url, {replace: true/false})
    navigate('/home')
  }
  return (
    <div>
      <button>go Home</button>
    </div>
  )
}

export default NotFound
