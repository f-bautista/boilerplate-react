import { Slot } from '@radix-ui/react-slot'
import { cn } from 'src/lib/utils'
import { ButtonProps } from './types'
import { buttonVariants } from './utils'
import { forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
