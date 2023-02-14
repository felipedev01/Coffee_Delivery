
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './Styles/Themes/Default'


function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
       <h1>Ola Mundo!</h1>
    </ThemeProvider>
   
  )
}

export default App
