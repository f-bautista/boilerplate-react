import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/languageSelector'
import { ThemeToggle } from './components/themeToggle'
import { SignOutButton } from './components/signOutButton'
import { Link } from '@tanstack/react-router'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="sticky left-0 top-0 z-10 w-full border-b border-border bg-background p-3 shadow-sm md:p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-base font-medium md:text-lg">
          {t('global.title')}
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <SignOutButton />
          <ThemeToggle />
          <div className="relative">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}
