import { useEffect } from 'react'
import { useThemeStore } from 'src/store/theme'
import { ThemeProviderProps } from './types'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isDark } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')

    document.documentElement.classList.add(isDark ? 'dark' : 'light')
  }, [isDark])

  return <>{children}</>
}
