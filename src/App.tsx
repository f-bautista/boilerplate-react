import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n/config'
import { ThemeProvider } from './components/layout/themeProvider'
import { Router } from './layout/routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
