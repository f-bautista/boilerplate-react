import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_API_BASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_API_KEY || ''

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
