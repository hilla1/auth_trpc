import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function widthWrapper({className, children}:{className?:string, children:ReactNode} ) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl', className)}>{children}</div>
  )
}