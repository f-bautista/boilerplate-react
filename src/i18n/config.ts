import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

export const defaultNS = 'global'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string) => {
      if (language === 'dev') return
      return import(`./locales/${language}.json`)
    }),
  )
  .init({
    debug: false,
    fallbackLng: {
      default: ['en'],
    },
    defaultNS,
    ns: ['global', 'notFound'],
    load: 'currentOnly',
  })
