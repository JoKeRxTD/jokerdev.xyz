import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "ring-1 ring-inset bg-gray-900/25 text-gray-800 ring-gray-400/25 dark:bg-gray-900/25 dark:text-gray-400 dark:ring-gray-400/25 hover:bg-gray-900/50 hover:text-gray-400 hover:ring-gray-400/50 dark:hover:bg-gray-900/50 dark:hover:text-gray-400 dark:hover:ring-gray-400/50",
        destructive: "ring-1 ring-inset bg-red-900/25 text-red-800 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25 hover:bg-red-900/50 hover:text-red-400 hover:ring-red-400/50 dark:hover:bg-red-900/50 dark:hover:text-red-400 dark:hover:ring-red-400/50",
        secondary: "ring-1 ring-inset bg-secondary/25 text-secondary ring-secondary/25 dark:bg-secondary/25 dark:text-secondary dark:ring-secondary/25 hover:bg-secondary/50 hover:text-secondary hover:ring-secondary/50 dark:hover:bg-secondary/50 dark:hover:text-secondary dark:hover:ring-secondary/50",
        outline: "ring-1 ring-inset bg-transparent text-gray-800 ring-gray-800/25 dark:text-gray-400 dark:ring-gray-400/25 hover:text-gray-400 dark:hover:text-gray-400",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        PostBackButton: "ring-1 ring-inset bg-green-900/25 text-green-800 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25 hover:bg-green-900/50 hover:text-green-400 hover:ring-green-400/50 dark:hover:bg-green-900/50 dark:hover:text-green-400 dark:hover:ring-green-400/50",
        JokerBlueButton: "ring-1 ring-inset bg-blue-900/25 text-blue-800 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25 hover:bg-blue-900/50 hover:text-blue-400 hover:ring-blue-400/50 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 dark:hover:ring-blue-400/50",
        // discord button with the same style as PostBackButton but using the color "#5865F2"
        Discord: "ring-1 ring-inset bg-[#5865F2]/25 text-[#5865F2] ring-[#5865F2]/25 dark:bg-[#5865F2]/25 dark:text-[#5865F2] dark:ring-[#5865F2]/25 hover:bg-[#5865F2]/50 hover:text-[#5865F2] hover:ring-[#5865F2]/50 dark:hover:bg-[#5865F2]/50 dark:hover:text-[#5865F2] dark:hover:ring-[#5865F2]/50",
      },
      size: {
        default: "h-4 px-2 rounded-md text-base",
        sm: "h-6 rounded-md px-3 text-xs",
        md: "h-8 rounded-md px-4 text-md",
        lg: "h-10 rounded-md px-5 text-lg",
        xlg: "h-12 rounded-md px-6 text-2xl",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
