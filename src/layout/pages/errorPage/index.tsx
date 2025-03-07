import { useTranslation } from 'react-i18next'
import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from '../../../components/core/button'

const ErrorPage = () => {
  const { t } = useTranslation()
  const routerState = useRouterState()

  const error = routerState

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center md:gap-6 md:text-left">
      <h1 className="text-2xl font-bold md:text-3xl">{t('notFound.title')}</h1>
      <p className="text-base text-muted-foreground md:text-lg">{t('notFound.message')}</p>
      <p className="max-w-md text-xs font-mono md:text-sm">
        <p>{error instanceof Error ? error.message : 'Page not found'}</p>
      </p>
      <Button asChild className="mt-2">
        <Link to="/">{t('notFound.backToHome')}</Link>
      </Button>
    </div>
  )
}

export default ErrorPage
