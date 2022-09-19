import './App.css'
import TopBar from '@/components/topbar/Topbar'
import SidebarMenu from '@/components/sidebar/SideBarMenu'
import Home from '@/pages/home/Home'
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sideContainer">
          <SidebarMenu />
        </div>
        <div className="mainContainer">
          <TopBar />
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
