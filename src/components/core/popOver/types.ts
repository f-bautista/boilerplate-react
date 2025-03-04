import * as PopoverPrimitive from '@radix-ui/react-popover'
import { ComponentPropsWithoutRef, ElementRef } from 'react'

export type PopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
export type PopoverContentRef = ElementRef<typeof PopoverPrimitive.Content> 