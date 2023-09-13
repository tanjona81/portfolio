import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../lib/Utils'

export const h1Variants = cva(
    'text-2xl lg:text-4xl h-12 text-slate-100 border-b-4 border-amber-500',
  )

interface H1TitleProps extends React.HTMLAttributes<HTMLHeadingElement>,VariantProps<typeof h1Variants>{
   
}

const H1Title = React.forwardRef<HTMLHeadingElement, H1TitleProps>(
    ({children, ...props},ref) => {
       return (
          <h1
            className={cn(h1Variants())}
            ref={ref}
          //   disabled={isLoading}
            {...props}>
            {children}
          </h1>
        )
 })

export {H1Title}