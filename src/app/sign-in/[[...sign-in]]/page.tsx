'use client';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import { Image } from "@nextui-org/image";
import { DiscordIcon, GithubIcon, TwitchIcon } from "@/src/components/Icons";

export default function SignInPage() {
  return (
    <div className="grid w-full flex-grow content-center items-center px-4 sm:justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="relative isolate w-full space-y-8 sm:w-96 sm:px-8 px-4 py-10 shadow-md ring-1 ring-inset ring-white/10 before:absolute before:inset-0 before:-z-10 rounded-2xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
          <div className="grid place-items-center">
            <Image src="/joker.jpg" alt="JoKeR" width={125} height={125} />
            <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-800 dark:text-white">Sign in</h1>
          </div>
          <Clerk.GlobalError className="block text-sm text-rose-400" />
          <Clerk.Field name="identifier" className="group/field relative">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-950 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-zinc-300 group-data-[invalid]/field:text-rose-400">
              Email address
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-zinc-500/20 focus:ring-[1.5px] focus:ring-zinc-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
          </Clerk.Field>
          <Clerk.Field name="password" className="group/field relative">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-950 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-zinc-300 group-data-[invalid]/field:text-rose-400">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-zinc-500/20 focus:ring-[1.5px] focus:ring-zinc-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
          </Clerk.Field>
          {/* clerk login provider (discord, github, twitch) */}
          <div className="grid grid-cols-3 gap-1">
          <Clerk.Loading scope="provider:discord">
            {(isLoading) => (
                <Clerk.Connection name="discord" disabled={isLoading}>
                        {isLoading ? " " : <div className="grid p-1 place-items-center rounded-lg border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"><DiscordIcon className='text-[#7289da]'/></div>}
                </Clerk.Connection>
                  )}
          </Clerk.Loading>
          <Clerk.Loading scope="provider:github">
            {(isLoading) => (
                <Clerk.Connection name="github" disabled={isLoading}>
                        {isLoading ? " " : <div className="grid p-1 place-items-center rounded-lg border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"><GithubIcon className='text-[#2b3137] dark:text-[#fafbfc]'/></div>}
                </Clerk.Connection>
                  )}
          </Clerk.Loading>
          <Clerk.Loading scope="provider:twitch">
            {(isLoading) => (
                <Clerk.Connection name="twitch" disabled={isLoading}>
                        {isLoading ? " " : <div className="grid p-1 place-items-center rounded-lg border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"><TwitchIcon className='text-[#6441a4]'/></div>}
                </Clerk.Connection>
                  )}
          </Clerk.Loading>
          </div>
          <div className="grid place-items-center">
            <SignIn.Action
              submit
              className="relative isolate w-[50%] p-2 rounded-lg border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              Sign In
            </SignIn.Action>
          </div>
          <p className="text-center text-sm text-zinc-800 dark:text-white">
            No account?{' '}
            <a
              href="/sign-up"
              className="text-zinc-800 dark:text-white decoration-white/30 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Create an account
            </a>
          </p>
        </SignIn.Step>
        <SignIn.Step
          name="verifications"
          className="relative isolate w-full space-y-8 rounded-2xl bg-zinc-950 px-4 py-10 shadow-md ring-1 ring-inset ring-white/10 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-black/50 sm:w-96 sm:px-8"
        >
          <header className="flex flex-wrap text-center">
            <Image src="/joker.jpg" alt="JoKeR" width={40} height={40} />
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">Verify phone code</h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-rose-400" />
          <SignIn.Strategy name="phone_code">
            <Clerk.Field name="code" className="group/field relative">
              <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-950 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-zinc-300 group-data-[invalid]/field:text-rose-400">
                Phone code
              </Clerk.Label>
              <Clerk.Input
                type="otp"
                required
                className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-zinc-500/20 focus:ring-[1.5px] focus:ring-zinc-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="relative isolate w-full rounded-lg bg-gradient-to-b from-zinc-400 to-zinc-500 px-3.5 py-2.5 text-center text-sm font-medium text-zinc-950 shadow-[0_1px_0_0_theme(colors.white/30%)_inset,0_-1px_1px_0_theme(colors.black/5%)_inset] outline-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:text-zinc-950/80 active:before:bg-black/10"
            >
              Continue
            </SignIn.Action>
          </SignIn.Strategy>
          <p className="text-center text-sm text-white/60">
            No account?{' '}
            <a
              href="#"
              className="text-white decoration-white/30 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Create an account
            </a>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}