import Header from './header/index'
import Aside from './sidebar/index'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
const BaseLayout = () => {
  const Container = styled.div`
    display: flex;
  `
  const Sider = styled.div`
    flex: 0.8;
  `
  const ContentWrapper = styled.div`
    flex: 4;
  `
  const Contents = styled.div`
    /* flex: 4; */
    margin-top: 10px;
  `
  return (
    <Container>
      <Sider>
        <Aside />
      </Sider>
      <ContentWrapper>
        <Header />
        <Contents>
          <Outlet />
        </Contents>
      </ContentWrapper>
    </Container>
  )
}

export default BaseLayout
