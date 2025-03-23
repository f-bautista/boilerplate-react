import { Session } from '@supabase/supabase-js'

export type SessionResponse = {
  session: Session | null
}

export type AuthCredentials = {
  email: string
  password: string
}
