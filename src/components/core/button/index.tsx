import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { PropsWithChildren } from 'react'
import { cn } from 'src/lib/utils'
import { ButtonProps } from './types'
import { buttonVariants } from './utils'

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
