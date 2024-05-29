import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold transition-colors focus:outline-none ring-1 ring-inset",
  {
    variants: {
      variant: {
        // Default
        default: "bg-zinc-500/25 text-zinc-800 ring-zinc-500/25 dark:bg-zinc-500/25 dark:text-zinc-400 dark:ring-zinc-500/25",
        secondary: "bg-secondary/25 text-secondary ring-secondary/25 dark:bg-secondary/25 dark:text-secondary dark:ring-secondary/25",
        destructive: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        outline: "bg-transparent text-gray-500 ring-gray-500/25 dark:text-gray-500 dark:ring-gray-500/25",

        // Repo
        RepoArchived: "bg-orange-500/25 text-orange-500 ring-orange-500/25 dark:bg-orange-500/25 dark:text-orange-500 dark:ring-orange-500/25",
        
        // Languages
        Typescript: "bg-blue-900/25 text-blue-400 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25",
        Python: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        Lua: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25",
        Javascript: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25",
        HTML: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        CSS: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        md: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Vue:"bg-green-500/25 text-green-500 ring-green-500/25 dark:bg-green-500/25 dark:text-green-500 dark:ring-green-500/25",
        Ejs: "bg-green-500/25 text-green-500 ring-green-500/25 dark:bg-green-500/25 dark:text-green-500 dark:ring-green-500/25",
        Readme: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Rd: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Svelte: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        MDX: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        PHP: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        SCSS:"bg-pink-500/25 text-pink-500 ring-pink-500/25 dark:bg-pink-500/25 dark:text-pink-500 dark:ring-pink-500/25",
        Handlebars: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25",
        Markdown: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Rust: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Null: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",

        // Status
        online: "bg-green-500/25 text-green-500 ring-green-500/25 dark:bg-green-500/25 dark:text-green-500 dark:ring-green-500/25",
        offline: "bg-gray-500/25 text-gray-500 ring-gray-500/25 dark:bg-gray-500/25 dark:text-gray-500 dark:ring-gray-500/25",
        dnd: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        idle: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25",

        // joker buttons colors - blue, green, red, yellow, black, pink
        Discord: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        Github: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Twitter: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        Youtube: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        Twitch: "bg-purple-500/25 text-purple-500 ring-purple-500/25 dark:bg-purple-500/25 dark:text-purple-500 dark:ring-purple-500/25",
        Instagram: "bg-pink-500/25 text-pink-500 ring-pink-500/25 dark:bg-pink-500/25 dark:text-pink-500 dark:ring-pink-500/25",
        Facebook: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        Linkedin: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25",
        Reddit: "bg-orange-500/25 text-orange-500 ring-orange-500/25 dark:bg-orange-500/25 dark:text-orange-500 dark:ring-orange-500/25",
        Tiktok: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",
        Snapchat: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25",
        Pinterest: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25",
        GithubGist: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25",




      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
