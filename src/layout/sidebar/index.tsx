import styled from '@emotion/styled'
import SidebarNav from '@/components/sidebar/sidebarNav'
import Profile from '@/components/sidebar/profile'
import { navListType } from '@/system/types/navList'

const Sidebar = () => {
  const navList: any = [
    {
      title: 'Algorithm',
      items: [
        {
          label: 'Javscript',
          href: '/test',
          IconName: 'javascript'
        },
        {
          label: 'Java',
          href: '/home',
          IconName: 'code'
        },
        {
          label: 'Python',
          href: '/home3',
          IconName: 'code'
        }
      ]
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
