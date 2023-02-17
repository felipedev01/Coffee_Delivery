import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { DefaultTheme } from './styles/Themes/default'
import { GlobalStyled } from './styles/global'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router></Router>
        <GlobalStyled />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
