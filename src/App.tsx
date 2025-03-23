import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './routes/layout/themeProvider'
import { Router } from './routes'
import './i18n/config'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

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
