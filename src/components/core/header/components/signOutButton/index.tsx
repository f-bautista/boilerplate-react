import { LogOut } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLogout, useSession } from '../../../../../hooks/useAuth'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '../../../button'

export const SignOutButton = () => {
  const { t } = useTranslation()
  const { data: session } = useSession()
  const logoutMutation = useLogout()
  const navigate = useNavigate()

  if (!session?.user) return null

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        navigate({ to: '/login' as any })
      },
    })
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="flex items-center gap-1"
      aria-label={t('auth.signOut')}
      title={t('auth.signOut')}
    >
      <LogOut size={16} />
      <span className="hidden md:inline">{t('auth.signOut')}</span>
    </Button>
  )
}
