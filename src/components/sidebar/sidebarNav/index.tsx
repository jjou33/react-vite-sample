import styled from '@emotion/styled'
import SidebarNavItem from './sidebarNavItem/index'
import Icon from '@/utils/icon/icon'
const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  color: rgb(27, 22, 22);
  padding: 0px 0px 5px 10px;
  display: flex;
  align-items: center;

  & > svg {
    padding-right: 10px;
  }
`
const SidebarNavWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
`

const SidebarNavItems = styled.ul`
  list-style: node;
  padding: 0px 0px 0px 30px;
`

const SidebarMenu = (props: any) => {
  const { navList } = props
  return (
    <>
      {navList &&
        navList.map((list: any, idx: any) => (
          <SidebarNavWrapper key={idx}>
            <SidebarTitle key={list.title}>
              <Icon size={25} color="#3221BF" icon="code" />
              {list.title}
            </SidebarTitle>
            <SidebarNavItem key={idx} itemList={list.items} />
          </SidebarNavWrapper>
        ))}
    </>
  )
}
// return (
//   <SidebarNavWrapper>
//     <SidebarTitle>
//       <Icon size={25} color="#3221BF" icon="code" />
//     </SidebarTitle>
//     <SidebarNavItems>
//       {props.navList &&
//         navList.map((opt: any, idx: any) => <SidebarNavItem key={idx} opt={opt} />)}
//     </SidebarNavItems>
//   </SidebarNavWrapper>
// )
export default SidebarMenu
