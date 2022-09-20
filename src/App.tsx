import styled from '@emotion/styled'
import GlobalStyle from './styles/global'
// import Header from '@/layout/header/index'
// import Aside from '@/layout/aside/index'
// import MainSection from '@/layout/main/index'
import BaseLayout from '@/layout/index'
function App() {
  const AppContainer = styled.div``

  return (
    <AppContainer className="App">
      <GlobalStyle />
      <BaseLayout />
    </AppContainer>
  )
}

export default App
