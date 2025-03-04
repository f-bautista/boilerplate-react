import { useTranslation } from 'react-i18next'
import { Button } from 'src/components/core/button'
import { useThemeStore } from 'src/store/theme'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { t } = useTranslation()
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={t('global.theme.toggle')} className="h-9 w-9">
      {isDark ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
    </Button>
  )
}
