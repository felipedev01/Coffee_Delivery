import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/Themes/default'
import { GlobalStyled } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Ola Mundo!</h1>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
