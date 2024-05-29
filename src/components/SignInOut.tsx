import { signIn, signOut } from "next-auth/react"
import { Button } from "@/src/components/ui/button"

export function SignIn({
    provider,
    ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <Button
            onClick={() => signIn(provider)}
            variant="JokerBlueButton"
            className="p-4 h-5 w-20"
            {...props}
        >
            Sign In
        </Button>
    )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
        <Button
            onClick={() => signOut()}
            variant="destructive"
            className="p-4 h-5 w-20"
            {...props}
        >
            Sign Out
        </Button>
    )
}