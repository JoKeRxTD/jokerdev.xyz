'use server'
import { Button } from "@/src/components/ui/button"
import { signOut } from "@/src/lib/auth"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"

export async function SignOutButton() {
    return (
        <div className="flex-wrap gap-2 justify-center items-center content-center">
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <Card className="p-4 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                    <CardHeader>
                        <CardTitle>Sign out</CardTitle>
                        <CardDescription>Click the button below to sign out</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="destructive" rounded="md" size="sm" type="submit" className="p-4 h-5 w-20">
                            Sign out
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}