import '@emotion/react'

type themeId = 'teal' | 'lightGray' | 'gray' | 'darkGray' | 'transparent' | 'red'

declare module '@emotion/react' {
  export interface Theme {
    [key in themeId]: {
      background: string
      color: string
      hoverBackground: string
    }
  }
}
