import { Global, css } from '@emotion/react'
import MaplestoryBold from '@/assets/font/MaplestoryBold.ttf'
import MaplestoryLight from '@/assets/font/MaplestoryLight.ttf'
import reset from '@/assets/reset'
const style = css`
  ${reset}

  @font-face {
    font-family: 'MaplestoryBold';
    src: local('MaplestoryBold'), local('MaplestoryBold');
    font-style: normal;
    src: url(${MaplestoryBold}) format('truetype');
  }
  @font-face {
    font-family: 'MaplestoryLight';
    src: local('MaplestoryLight'), local('MaplestoryLight');
    font-style: normal;
    src: url(${MaplestoryLight}) format('truetype');
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
