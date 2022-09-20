import styled from '@emotion/styled'
import TopBar from '@/components/topbar/index'
const Header = () => {
  const Container = styled.header({
    width: '100%',
    height: '50px',
    backgroundColor: 'white',

    position: 'sticky',
    top: '0',
    zIndex: '999'
  })
  const Wrapper = styled.div({
    height: '100%',
    padding: '0px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  })

  const Logo = styled.div({
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'darkblue',
    cursor: 'pointer'
  })

  return (
    <Container>
      <Wrapper>
        <Logo>DEV Diary</Logo>
        <TopBar />
      </Wrapper>
    </Container>
  )
}

export default Header
