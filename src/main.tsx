import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme.styled.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles/>
    </ThemeProvider>
)
