import styled from '@emotion/styled'
import TopBar from '@/components/topbar/index'
const Header = () => {
  const Container = styled.header({
    width: '100%',
    height: '50px',
    padding: '10px 0px 10px 0px',
    backgroundColor: 'white',
    position: 'sticky',
    top: '0',
    zIndex: '999'
  })
  const Wrapper = styled.div({
    height: '100%',
    padding: '0px 20px 10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  })

  // const Logo = styled.div`
  //   /* font-family: MaplestoryBold, sans-serif, Arial  */
  //   font-weight: bold,
  //   font-size: 30px,
  //   color: darkblue,
  //   cursor: pointer,
  // `

  const Logo = styled.div`
    font-family: MaplestoryBold, sans-serif, Arial;
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  `

  const ProgressBar = styled.div({
    backgroundColor: 'red'
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
