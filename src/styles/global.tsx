import { Global, css } from '@emotion/react'
import reset from '@/assets/reset'
const style = css`
  ${reset}
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
