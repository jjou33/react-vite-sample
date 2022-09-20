import { css } from '@emotion/react'
import styled from '@emotion/styled'
const ProfileContainer = styled.div`
  border-bottom: solid;
  text-align: center;
  position: relative;
  height: 400px;
  display: flex;
`

const ProfileTitleWrapper = styled.div``
const ProfileImgStyle = css`
  height: 80px;
  width: 80px;
  border-radius: 25%;
  cursor: pointer;
  position: absolute;
  left: 20%;
  top: 25%;
  transform: translate(-50%, -50%);
  background-color: black;
`

const ProfileTitle = styled.span`
  border-radius: 50%;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & img {
    margin-right: 10px;
    width: 20px;
  }

  & .subTitle {
    margin-top: 0;
    font-size: 10px;
    color: #8af08a;
  }
`

const SideBarProfile = () => {
  return (
    <ProfileContainer>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuA1ZqTP9khpeXa31QADNMCKFrfwNi_7owA&usqp=CAU"
        alt="Profile Image"
        css={ProfileImgStyle}
      />

      <ProfileTitle>
        <img className="icon" src="/assets/icons8.png" />
        HIPPO DEV
        <p className="subTitle">FRONT-DEVELOPER</p>
      </ProfileTitle>
    </ProfileContainer>
  )
}

export default SideBarProfile
