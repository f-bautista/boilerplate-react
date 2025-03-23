import { useTranslation } from 'react-i18next'
import { useCounterStore } from '../../store/counter'

import { Button } from '../core/button'
import { PlusCircle, MinusCircle } from 'lucide-react'

const Counter = () => {
  const { t } = useTranslation()
  const { count, increment, decrement } = useCounterStore()

  return (
    <div className="mx-auto max-w-md border border-border bg-card p-4 rounded-lg shadow-sm transition-colors duration-200 md:p-6">
      <h1 className="mb-6 text-center text-xl font-bold text-foreground md:text-2xl">{t('global.counter')}</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          <Button variant="outline" size="icon" onClick={decrement} className="h-10 w-10 md:h-12 md:w-12">
            <MinusCircle className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="min-w-14 text-center text-3xl font-bold md:min-w-16 md:text-4xl">{count}</div>

          <Button variant="outline" size="icon" onClick={increment} className="h-10 w-10 md:h-12 md:w-12">
            <PlusCircle className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground md:text-sm">{t('global.theme.toggleHint')}</p>
      </div>
    </div>
  )
}

export default Counter
