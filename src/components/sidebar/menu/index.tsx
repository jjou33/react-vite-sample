import styled from '@emotion/styled'

const SidebarMenuWrapper = styled.div`
  margin-top: 2rem;
`
const SidebarTitleH3 = styled.h3`
  font-size: 0.9rem;
  color: rgb(197, 197, 197);
`
const SidebarListUl = styled.ul`
  list-style: node;
  padding: 0.5rem;
`
const SidebarListItemLi = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &.active,
  :hover {
    background-color: rgb(212, 209, 235);
  }
`

const SideBarIcon = styled.img`
  font-size: 20px !important;
  margin-right: 10px;
`

const SidebarMenu = () => {
  return (
    <SidebarMenuWrapper>
      <SidebarTitleH3>DashBoard</SidebarTitleH3>
      <SidebarListUl>
        <SidebarListItemLi>
          <SideBarIcon src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" />
          Home
        </SidebarListItemLi>
        <SidebarListItemLi>
          <SideBarIcon src="https://img.icons8.com/external-others-bomsymbols-/24/000000/external-analytical-big-data-bluetone-others-bomsymbols-.png" />
          Analystics
        </SidebarListItemLi>
        <SidebarListItemLi>
          <SideBarIcon src="https://img.icons8.com/material-outlined/24/000000/total-sales-1.png" />
          Sales
        </SidebarListItemLi>
      </SidebarListUl>
    </SidebarMenuWrapper>
  )
}

export default SidebarMenu
