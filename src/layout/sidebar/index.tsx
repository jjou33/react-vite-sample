import styled from '@emotion/styled'
import SidebarNav from '@/components/sidebar/sidebarNav'
import Profile from '@/components/sidebar/profile'
import { navListType } from '@/system/types/navList'

const Sidebar = () => {
  const navList: navListType = [
    {
      label: 'DashBoard',
      href: '/home',
      src: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png'
    },
    {
      label: 'DashBoard1',
      href: '/home2',
      src: 'https://img.icons8.com/external-others-bomsymbols-/24/000000/external-analytical-big-data-bluetone-others-bomsymbols-.png'
    },
    {
      label: 'DashBoard2',
      href: '/home3',
      src: 'https://img.icons8.com/material-outlined/24/000000/total-sales-1.png'
    }
  ]
  const Container = styled.div`
    flex: 0.8;
    height: calc(100vh - 50px);
    background-color: white;

    position: static;
    top: 50px;
    font-family: MaplestoryLight;
  `

  return (
    <Container>
      <Profile />
      <SidebarNav navList={navList} />
    </Container>
  )
}

export default Sidebar
