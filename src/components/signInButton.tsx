
'use server'
import { Button } from "@/src/components/ui/button"
import { signIn, providerMap } from "@/src/lib/auth"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"


export async function SignInButton() {
    return (
        <div className="flex-wrap gap-2 justify-center items-center content-center">
            {Object.values(providerMap).map((provider) => (
                <form
                    key={provider.id}
                    action={async () => {
                        "use server"
                        await signIn(provider.id)
                    }}
                >
                    <Card className="p-4 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                        <CardHeader>
                            <CardTitle>Sign in</CardTitle>
                            <CardDescription>Click the button below to sign in</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button variant="blue" rounded="md" type="submit" className="p-4 h-5 w-20">
                                {provider.name}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            ))}
        </div>
    )
}

