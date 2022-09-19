import styled from '@emotion/styled'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import HippoImgUrl from '@/assets/hippo.png'
import { css } from '@emotion/react'
const TopContainer = styled.div({
  width: '100%',
  height: '50px',
  backgroundColor: 'white',

  position: 'sticky',
  top: '0',
  zIndex: '999'
})

const TopWrapper = styled.div({
  height: '100%',
  padding: '0px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

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
const TopLogo = styled.div({
  fontWeight: 'bold',
  fontSize: '30px',
  color: 'darkblue',
  cursor: 'pointer'
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
const TopBar = () => {
  return (
    <TopContainer>
      <TopWrapper>
        <TopLogo>HIPPO DEV</TopLogo>
        <TopMenu>
          {/**
           * Notification Icon
           */}
          <TopBarIconContainer>
            {/* <img src="https://img.icons8.com/stickers/30/000000/appointment-reminders.png" /> */}
            <NotificationsNoneIcon />
            <NotiCountBadgeSpan>2</NotiCountBadgeSpan>
          </TopBarIconContainer>
          {/**
           * Notification Icon
           */}
          <TopBarIconContainer>
            <LanguageIcon />
          </TopBarIconContainer>
          {/**
           * Notification Icon
           */}
          <TopBarIconContainer>
            <SettingsIcon />
          </TopBarIconContainer>
          {/**
           * Notification Icon
           */}
          <TopBarIconContainer>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuA1ZqTP9khpeXa31QADNMCKFrfwNi_7owA&usqp=CAU"
              alt="Peeking Hippo Svg Scrapbook Cut File Cute Clipart Files - Peeking Cutting For Scrapbooking Clipart@nicepng.com"
              css={TopProfileImgStyle}
            />
          </TopBarIconContainer>
        </TopMenu>
      </TopWrapper>
    </TopContainer>
  )
}

export default TopBar
