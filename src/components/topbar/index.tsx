import styled from '@emotion/styled'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import { css } from '@emotion/react'

const NotiCountBadgeSpan = styled.span({
  position: 'absolute',
  top: '-5px',
  right: '5px',

  backgroundColor: 'red',
  borderRadius: '50%',
  height: '15px',
  width: '15px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '13px',
  color: 'white'
})

const TopBarIconContainer = styled.div({
  position: 'relative',
  marginRight: '15px',
  color: '#555'
})

const TopProfileImgStyle = css({
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  cursor: 'pointer'
})

const TopMenu = styled.div({
  display: 'flex',
  alignItems: 'center'
})
const Topbar = () => {
  return (
    <TopMenu>
      <TopBarIconContainer>
        {/* <img src="https://img.icons8.com/stickers/30/000000/appointment-reminders.png" /> */}
        <NotificationsNoneIcon />
        <NotiCountBadgeSpan>2</NotiCountBadgeSpan>
      </TopBarIconContainer>
      <TopBarIconContainer>
        <LanguageIcon />
      </TopBarIconContainer>
      <TopBarIconContainer>
        <SettingsIcon />
      </TopBarIconContainer>
      <TopBarIconContainer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuA1ZqTP9khpeXa31QADNMCKFrfwNi_7owA&usqp=CAU"
          alt="Peeking Hippo Svg Scrapbook Cut File Cute Clipart Files - Peeking Cutting For Scrapbooking Clipart@nicepng.com"
          css={TopProfileImgStyle}
        />
      </TopBarIconContainer>
    </TopMenu>
  )
}

export default Topbar
