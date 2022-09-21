import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const sidebarNavItems = (props: any) => {
  const { label, href, src } = props.opt
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
  return (
    <SidebarListItemLi>
      <img src={src} />
      <NavLink to={href}>{label}</NavLink>
    </SidebarListItemLi>
  )
}

export default sidebarNavItems
