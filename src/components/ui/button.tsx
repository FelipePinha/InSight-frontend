import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'flex items-center justify-center gap-2 rounded-md text-s font-medium outline-none duration-200 text-zinc-100',

    variants: {
        variant: {
            primary: 'bg-sky-500 hover:bg-sky-400',
            secondary: 'bg-zinc-100 text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-zinc-100',
            danger: 'bg-red-500 hover:bg-red-600',
            normal: 'bg-zinc-300 text-zinc-950 hover:bg-zinc-400'
        },
        size: {
            default: 'px-4 py-2.5'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
      return (
        <button
          {...props}
          ref={ref}
          className={button({ variant, size, className })}
        />
      )
    }
  )
  
  Button.displayName = 'Button'