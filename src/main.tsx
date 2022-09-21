import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '@/styles/global'
import Theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
