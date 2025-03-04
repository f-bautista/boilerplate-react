import { useThemeStore } from '../../../store/theme'
import Counter from '../../../components/counter'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const { isDark } = useThemeStore()

  return (
    <>
      <title>{t('global.title')}</title>

      <div className="flex flex-col gap-6 py-4 md:gap-8 md:py-8">
        <div className="mx-auto">
          <Counter />
        </div>

        <div className="mx-auto mt-2 rounded-md border border-border bg-card p-3 md:mt-4 md:p-4">
          <p className="text-sm text-foreground md:text-base">
            {t('global.theme.current')} <strong>{isDark ? 'dark' : 'light'}</strong>
          </p>
          <p className="mt-2 text-sm text-foreground md:text-base">{t('global.debug.themeChange')}</p>
          <div className="mt-3 flex flex-wrap gap-2 md:mt-4 md:gap-4">
            <div className="rounded bg-primary p-3 text-xs text-primary-foreground md:p-4 md:text-sm">
              {t('global.colors.primary')}
            </div>
            <div className="rounded bg-secondary p-3 text-xs text-secondary-foreground md:p-4 md:text-sm">
              {t('global.colors.secondary')}
            </div>
            <div className="rounded bg-accent p-3 text-xs text-accent-foreground md:p-4 md:text-sm">
              {t('global.colors.accent')}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
