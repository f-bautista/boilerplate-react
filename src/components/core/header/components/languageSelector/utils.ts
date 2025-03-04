import { LanguageMapping } from './types'

export const LANGUAGE_NAMES: LanguageMapping = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
}

export const getLanguageName = (code: string): string => {
  return LANGUAGE_NAMES[code] || code.toUpperCase()
}
