import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from 'src/lib/constants'
import { getSession, login, signup, logout } from 'src/queries/auth'

export const useSession = () => {
  return useQuery({
    queryKey: queryKeys.session,
    queryFn: getSession,
    refetchOnMount: true,
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.session })
    },
  })
}

export const useSignup = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.session })
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.session })
    },
  })
}
