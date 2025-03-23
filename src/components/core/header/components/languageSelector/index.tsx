import { useTranslation } from 'react-i18next'

import { Popover, PopoverContent, PopoverTrigger } from '../../../popOver'

import { LANGUAGES } from 'src/lib/constants'

import { ChevronDown } from 'lucide-react'
import i18next from 'i18next'

import { cn } from 'src/lib/utils'
import { getLanguageName } from './utils'

export const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage

  const changeLanguage = (locale: string) => {
    i18next.changeLanguage(locale)
  }

  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-foreground/80 md:gap-2 md:text-sm">
        {currentLanguage && getLanguageName(currentLanguage)}
        <ChevronDown size={15} className="sm:size-5" />
      </PopoverTrigger>

      <PopoverContent
        className="z-50 min-w-[120px] w-auto rounded-md bg-background p-1 shadow-md"
        align="end"
        side="bottom"
        sideOffset={5}
      >
        {LANGUAGES.map((lang) => (
          <div
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={cn(
              'cursor-pointer rounded px-3 py-1.5 text-xs hover:bg-accent md:text-sm',
              currentLanguage === lang && 'bg-accent/50 font-medium text-primary',
            )}
          >
            {getLanguageName(lang)}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
