import styled from '@emotion/styled'
import FeaturedInfo from '@/components/featuredInfo/FeaturedInfo'

const MainSection = () => {
  const MainLayout = styled.div`
    flex: 4;
    margin-top: 10px;
  `
  return (
    <MainLayout>
      <FeaturedInfo />
    </MainLayout>
  )
}

export default MainSection
