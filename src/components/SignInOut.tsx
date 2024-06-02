import { signIn, signOut } from "next-auth/react"
import { Button } from "@/src/components/ui/button"

export function SignIn({
    provider,
    ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <Button
            onClick={() => signIn(provider)}
            variant="green"
            rounded="md"
            size="default"
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
            rounded="md"
            size="default"
            {...props}
        >
            Sign Out
        </Button>
    )
}