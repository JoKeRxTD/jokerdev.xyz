import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card"
import {Image} from "@nextui-org/react"
import { auth } from "@/src/lib/auth"

import { signIn, signOut, providerMap } from "@/src/lib/auth"
import { Button } from "@/src/components/ui/button"


export default async function SignInPage() {
  const session = await auth()
  // console.log(session)
  if (!session) {
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
            <Card className="flex flex-col items-center content-center p-4 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
              <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Click the button below to sign in</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-row items-center content-center gap-2">
                <Button variant="JokerBlueButton" type="submit" className="p-4 h-5 w-20">
                  {provider.name}
                </Button>
                <Button variant="destructive" className="p-4 h-5 w-20">
                  Back
                </Button>
              </CardFooter>
            </Card>
          </form>
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex-wrap gap-2 justify-center items-center content-center">
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Card className="flex flex-col items-center content-center p-4 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
            <CardHeader>
              <CardTitle>Sign out</CardTitle>
              <CardDescription>Click the button below to sign out</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-row items-center content-center gap-2">
              <Button variant="destructive" type="submit" className="p-4 h-5 w-20">
                Sign out
              </Button>
              <Button variant="destructive" className="p-4 h-5 w-20">
                Back
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    )
  }
}
    