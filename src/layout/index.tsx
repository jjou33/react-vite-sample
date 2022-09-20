import Header from './header/index'
import Aside from './aside/index'
import Main from './main/index'
import styled from '@emotion/styled'

const BaseLayout = () => {
  const Container = styled.div`
    display: flex;
  `

  return (
    <div>
      <Header />
      <Container>
        <Aside />
        <Main />
      </Container>
    </div>
  )
}

export default BaseLayout
