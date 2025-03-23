import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useSession } from '../../../hooks/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session } = useSession()
  const user = session?.user
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate({ to: '/login' as any })
    }
  }, [user, navigate])

  if (!user) {
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute
