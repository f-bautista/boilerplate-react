import { Session } from '@supabase/supabase-js'
import { supabaseClient } from '../lib/supabase'
import { AuthCredentials } from '../lib/types'

export const getSession = async (): Promise<Session | null> => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession()
  return session
}

export const login = async ({ email, password }: AuthCredentials) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

export const signup = async ({ email, password }: AuthCredentials) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  })
  if (error) throw error
  return data
}

export const logout = async () => {
  const { error } = await supabaseClient.auth.signOut()
  if (error) throw error
}
