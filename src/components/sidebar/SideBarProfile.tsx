import { css } from '@emotion/react'

const SideProfileDivStyle = css`
  border-bottom: solid;
  text-align: center;
  position: relative;
  height: 400px;
`
const SideProfileImgStyle = css`
  height: 100px;
  width: 100px;
  border-radius: 25%;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  background-color: black;
`

const SideProfileTitle = css`
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
    <div css={SideProfileDivStyle}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuA1ZqTP9khpeXa31QADNMCKFrfwNi_7owA&usqp=CAU"
        alt="Profile Image"
        css={SideProfileImgStyle}
      />

      <span css={SideProfileTitle}>
        <img className="icon" src="/assets/icons8.png" />
        HIPPO DEV
        <p className="subTitle">FRONT-DEVELOPER</p>
      </span>
    </div>
  )
}

export default SideBarProfile
