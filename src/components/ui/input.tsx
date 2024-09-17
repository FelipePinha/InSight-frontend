import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-4 h-12 bg-zinc-50 border-2 border-zinc-300 rounded-lg placeholder-zinc-400 outline-none text-sm focus-visible:border-sky-400 focus-visible:ring-4 ring-sky-400/15',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'