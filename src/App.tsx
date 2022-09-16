import DiaryEditor from '@/components/diary-editor'
import './App.css'
import TopBar from '@/components/topbar/Topbar'
import Sidebar from '@/components/sidebar/SideBar'
function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">other Pages</div>
      </div>
    </div>
  )
}

export default App
