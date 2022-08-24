import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        Hello World!
      </div>
    </ThemeProvider>
  )
}

export default App
