import styled from '@emotion/styled'
import FeaturedInfo from '@/components/featuredInfo/FeaturedInfo'
const HomeDiv = styled.div`
  flex: 4;

  margin-top: 10px;
`
const Home = () => {
  return (
    <HomeDiv>
      <FeaturedInfo />
    </HomeDiv>
  )
}

export default Home
