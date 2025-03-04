import { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { buttonVariants } from './utils'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }
