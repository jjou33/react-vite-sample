import styled from '@emotion/styled'
import SidebarNavItems from './sidebarNavItem/index'
import { navListType } from '@/system/types/navList'
const SidebarMenuWrapper = styled.div`
  margin-top: 2rem;
  padding: 0px 0px 0px 15px;
`
const SidebarTitleH3 = styled.h3`
  font-size: 0.9rem;
  color: rgb(197, 197, 197);
`
const SidebarListUl = styled.ul`
  list-style: node;
`

const SidebarMenu = (props: any) => {
  const { navList } = props
  return (
    <SidebarMenuWrapper>
      <SidebarTitleH3>DashBoard</SidebarTitleH3>
      <SidebarListUl>
        {props.navList &&
          navList.map((opt: any, idx: any) => <SidebarNavItems key={idx} opt={opt} />)}
      </SidebarListUl>
    </SidebarMenuWrapper>
  )
}

export default SidebarMenu
