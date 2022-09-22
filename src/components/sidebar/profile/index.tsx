import styled from '@emotion/styled'

const ProfileContainer = styled.div`
  border-bottom: solid;
  text-align: center;
  position: relative;
  height: 400px;
`

const ProfileTitle = styled.span`
  font-family: MaplestoryBold;
  font-size: 1.5rem;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 12%;
  transform: translate(-50%, -50%);
`

const ProfileImgWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #eee;
  // Props
  height: 120px;
  width: 120px;
  left: 50%;
  top: 38%;
`
const ProfileImgStyle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 25px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
  }
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 50px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
  & > img {
    position: absolute;
    margin: 30px 0px 0px 10px;
    top: 15px;
    width: 3rem;
    height: 3rem;
    color: #444;
  }
`

const SideBarProfile = () => {
  return (
    <div>
      <ProfileContainer>
        <ProfileTitle>HIPPO DEV DIARY</ProfileTitle>
        <ProfileImgWrapper>
          <ProfileImgStyle>
            <img src="/src/assets/image/profile_logo2.svg" alt="Profile Image" />
          </ProfileImgStyle>
        </ProfileImgWrapper>
      </ProfileContainer>
    </div>
  )
}

export default SideBarProfile
