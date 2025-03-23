import { useState } from 'react'
import { useLogin, useSignup } from '../../../hooks/useAuth'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/core/button'

const Login = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState(false)

  const loginMutation = useLogin()
  const signupMutation = useSignup()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate({ to: '/' })
        },
      },
    )
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    signupMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          setSignupSuccess(true)
          setIsSignUp(false)
          setEmail('')
          setPassword('')
        },
      },
    )
  }

  const isLoading = loginMutation.isPending || signupMutation.isPending
  const error = loginMutation.error || signupMutation.error

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          {isSignUp ? t('auth.signUp') : t('auth.signIn')}
        </h2>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
          <div className="flex">
            <div className="text-sm text-red-700 dark:text-red-400">{error.message}</div>
          </div>
        </div>
      )}

      {signupSuccess && (
        <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
          <div className="flex">
            <div className="text-sm text-green-700 dark:text-green-400">{t('auth.confirmationEmailSent')}</div>
          </div>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={isSignUp ? handleSignup : handleLogin}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              {t('auth.email')}
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 px-3 
                  bg-card text-foreground 
                  ring-1 ring-inset ring-border 
                  placeholder:text-muted-foreground 
                  focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary 
                  sm:text-sm sm:leading-6"
              placeholder={t('auth.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              {t('auth.password')}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 px-3 
                  bg-card text-foreground 
                  ring-1 ring-inset ring-border 
                  placeholder:text-muted-foreground 
                  focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary 
                  sm:text-sm sm:leading-6"
              placeholder={t('auth.password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? t('auth.processing') : isSignUp ? t('auth.signUp') : t('auth.signIn')}
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="button"
            variant="link"
            onClick={() => {
              setIsSignUp(!isSignUp)
              setSignupSuccess(false)
            }}
          >
            {isSignUp ? t('auth.alreadyHaveAccount') : t('auth.needAccount')}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
