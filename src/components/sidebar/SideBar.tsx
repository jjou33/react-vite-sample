import styled from '@emotion/styled'

const SidebarDiv = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: white;

  position: static;
  top: 50px;
`

const SidebarWrapperDiv = styled.div`
  padding: 20px;
  color: #555;
`
const SidebarMenuDiv = styled.div`
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

  & .active,
  :hover {
    background-color: black;
  }
`

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarWrapperDiv>
        <SidebarMenuDiv>
          <SidebarTitleH3>DashBoard</SidebarTitleH3>
          <SidebarListUl>
            <SidebarListItemLi>
              <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" />
              Home
            </SidebarListItemLi>
            <SidebarListItemLi>
              <img src="https://img.icons8.com/external-others-bomsymbols-/24/000000/external-analytical-big-data-bluetone-others-bomsymbols-.png" />
              Analystics
            </SidebarListItemLi>
            <SidebarListItemLi>
              <img src="https://img.icons8.com/material-outlined/24/000000/total-sales-1.png" />
              Sales
            </SidebarListItemLi>
          </SidebarListUl>
        </SidebarMenuDiv>
      </SidebarWrapperDiv>
    </SidebarDiv>
  )
}

export default Sidebar
