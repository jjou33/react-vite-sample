import styled from '@emotion/styled'

const SidebarDiv = styled.div({
  flex: 1,
  height: 'calc(100vh - 50px)',
  backgroundColor: 'white'
})

const SidebarWrapperDiv = styled.div({
  padding: '20px',
  color: '#555'
})
const SidebarMenuDiv = styled.div({})
const SidebarTitleH3 = styled.h3({})
const SidebarListUl = styled.ul({})
const SidebarListItemLi = styled.li({})

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarWrapperDiv>
        <SidebarMenuDiv>
          <SidebarTitleH3>DashBoard</SidebarTitleH3>
          <SidebarListUl>
            <SidebarListItemLi>Home</SidebarListItemLi>
            <SidebarListItemLi>Analystics</SidebarListItemLi>
            <SidebarListItemLi>Sales</SidebarListItemLi>
          </SidebarListUl>
        </SidebarMenuDiv>
      </SidebarWrapperDiv>
      Sidebar
    </SidebarDiv>
  )
}

export default Sidebar
