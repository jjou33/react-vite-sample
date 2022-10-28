import styled from '@emotion/styled'
import Icon from '@/utils/icon/icon'
import { ReactComponent as JS } from '@/assets/image/javscript.svg'
import IconComp from '@/utils/icon/IconComp'
import { NavLink } from 'react-router-dom'

const sidebarNavItems = (props: any) => {
  // const { label, href, src } = props.opt
  // console.log('props : ', props.itemList)
  const { itemList } = props
  const SidebarListItemLi = styled.li`
    padding: 10px 0px 5px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &.active,
    :hover {
      background-color: rgb(212, 209, 235);
    }

    & > svg {
      width: 15px;
      height: 15px;
      padding-right: 10px;
    }
  `

  return (
    <>
      {itemList &&
        itemList.map((item: any, idx: any) => (
          <SidebarListItemLi key={idx}>
            <Icon size={20} color="#3221BF" icon={item.IconName} key={idx} /> 
            {/* <img src={JS} alt="" /> */}
            {/* <JS style={{ fill: 'blue', width: '15px', height: '15px' }} /> */}
            {/* <IconComp list={item.IconName} /> */}
            {/* <IconComp list={}/> */}
            <NavLink to={item.href}>{item.label}</NavLink>
          </SidebarListItemLi>
        ))}
    </>
  )
}

export default sidebarNavItems
