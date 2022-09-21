import styled from '@emotion/styled'
import SidebarNavItem from './sidebarNavItem/index'
import { navListType } from '@/system/types/navList'
const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  color: rgb(197, 197, 197);
  padding: 0px 0px 15px 0px;
`
const SidebarNavWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  padding: 0px 0px 0px 30px;
`

const SidebarNavItems = styled.ul`
  list-style: node;
`

const SidebarMenu = (props: any) => {
  const { navList } = props
  return (
    <SidebarNavWrapper>
      <SidebarTitle>DashBoard</SidebarTitle>
      <SidebarNavItems>
        {props.navList &&
          navList.map((opt: any, idx: any) => <SidebarNavItem key={idx} opt={opt} />)}
      </SidebarNavItems>
    </SidebarNavWrapper>
  )
}

export default SidebarMenu
