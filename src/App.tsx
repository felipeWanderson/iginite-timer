import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaults'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
