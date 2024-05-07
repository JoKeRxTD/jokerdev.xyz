'use client';

// If you are getting type errors, please set 'moduleResolution' to 'bundler' in your tsconfig
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import {Image} from "@nextui-org/image";

export default function SignUpPage() {
  return (
    <div className="grid w-full flex-grow content-center items-center bg-black px-4 sm:justify-center">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="relative isolate w-full space-y-8 rounded-2xl bg-zinc-950 px-4 py-10 shadow-md ring-1 ring-inset ring-white/10 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-black/50 sm:w-96 sm:px-8"
        >
          <div className="grid place-items-center">
            <Image src="/joker.jpg" alt="JoKeR" width={125} height={125} />
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">Create an account</h1>
          </div>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <Clerk.Field name="emailAddress" className="group/field relative">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-950 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-zinc-300 group-data-[invalid]/field:text-rose-400">
              Email address
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-zinc-500/20 focus:ring-[1.5px] focus:ring-zinc-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
              <Clerk.FieldError className="block text-sm text-red-400" />
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
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <div className="grid place-items-center">
          <SignUp.Action
            submit
            className="relative isolate w-[50%] p-2 rounded-lg border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            Sign Up
          </SignUp.Action>
          </div>
          <p className="text-center text-sm text-zinc-400">
            Have an account?{' '}
            <a
              href="#"
              className="text-white decoration-white/30 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Sign in
            </a>
          </p>
        </SignUp.Step>
        <SignUp.Step
          name="verifications"
          className="w-full space-y-6 rounded-2xl bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 ring-1 ring-inset ring-white/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">Verify email code</h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-white">Email code</Clerk.Label>
              <Clerk.Input
                required
                className="w-full rounded-md bg-neutral-900 px-3.5 py-2 text-sm text-white outline-none ring-1 ring-inset ring-zinc-700 hover:ring-zinc-600 focus:bg-transparent focus:ring-[1.5px] focus:ring-blue-400 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <SignUp.Action
              submit
              className="relative isolate w-full rounded-md bg-blue-500 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/10%)_inset,0_0_0_1px_theme(colors.white/5%)] outline-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-white/5 before:opacity-0 hover:before:opacity-100 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:text-white/70 active:before:bg-black/10"
            >
              Finish registration
            </SignUp.Action>
          </SignUp.Strategy>
          <p className="text-center text-sm text-zinc-400">
            Have an account?{' '}
            <a
              href="#"
              className="font-medium text-white decoration-white/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Sign in
            </a>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}