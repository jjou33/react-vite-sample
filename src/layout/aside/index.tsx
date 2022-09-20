import styled from '@emotion/styled'
import Menu from '@/components/sidebar/menu'
import Profile from '@/components/sidebar/profile'
const Aside = () => {
  const Container = styled.div`
    flex: 0.8;
    height: calc(100vh - 50px);
    background-color: white;

    position: static;
    top: 50px;
  `

  return (
    <Container>
      <Profile />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </Container>
  )
}

export default Aside
