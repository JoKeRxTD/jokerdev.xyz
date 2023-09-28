'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="flex flex-col text-center gap-4 items-center justify-center rounded-xl border py-12 md:space-y-8 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div >
        <h1 className="text-2xl text-center text-gray-800 dark:text-gray-100">
        Oops, Looks like you have entered a void, Lets get you back to the light.
        </h1>
        <h2 className="text-center text-gray-800 dark:text-gray-100">
        Click the button below to go back to the light.
        </h2>
      </div>

      <div className="flex gap-3">
        <button
          onClick={reset}
          className="flex flex-col items-center justify-center text-center border rounded-xl p-2 space-y-2 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Return to the light</span>
        </button>

      </div>
    </section>
  )
}