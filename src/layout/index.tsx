import Header from './header/index'
import Aside from './sidebar/index'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
const BaseLayout = () => {
  const Container = styled.div`
    display: flex;
  `
  const Contents = styled.div`
    flex: 4;
    margin-top: 10px;
  `
  return (
    <div>
      <Header />
      <Container>
        <Aside />
        <Contents>
          <Outlet />
        </Contents>
      </Container>
    </div>
  )
}

export default BaseLayout
