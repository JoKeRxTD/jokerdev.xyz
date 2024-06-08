// https://discord.com/api/guilds/325761816426971137/widget.json get data from this endpoint and display it
import {useState} from "react";
import {useEffect} from "react";
import Link from "next/link";
import {DiscordIcon} from "@/src/components/Icons";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
const queryClient = new QueryClient()
import { siteConfig } from "@/config/site";
export default function DiscordWidgetApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <DiscordWidget />
    </QueryClientProvider>
  )
}

const DiscordWidget = () => {
  // const [data, setData] = useState<any>(null);
  const guild = useState<any>(null);


  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['guildData'],
    queryFn: () =>
      axios
        .get(`https://discord.com/api/guilds/${siteConfig.guildId}/widget.json`)
        .then((res) => res.data),
  })
  if (isPending) return (
      <div className="hidden lg:flex lg:flex-row w-[35vh] items-center text-center text-xs justify-center ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400 p-2 rounded-md gap-2">
        Loading Discord Members...
      </div>
  )

  if (error) return (
      <div className="hidden lg:flex lg:flex-row w-[35vh] items-center text-center text-xs justify-center ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400 p-2 rounded-md gap-2">
        An error has occurred: {error.message}
      </div>
  )


  if (!data) {
    return <div className="hidden lg:flex lg:flex-row w-[35vh] items-center text-center justify-center ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400 p-2 rounded-md gap-2">Loading Discord Members...</div>;
  }

  return (
    <div className="hidden lg:flex p-4 h-5 text-xs lg:flex-row max-w-[28vh] gap-1 rounded-md items-center text-center justify-center ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400
      whitespace-nowrap  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
    ">
      <Link href={data.instant_invite} target="_blank" rel="noreferrer" className="lg:flex lg:flex-row max-w-[35vh] gap-2 items-center text-center justify-center">
        <span className="inline-flex relative">
          <DiscordIcon className="animate-ping opacity-75 absolute inline-flex h-full p-2 w-full rounded-full bg-blue-400/25 dark:bg-blue-300/25 text-zinc-600 dark:text-white"/>
          <DiscordIcon className="relevent p-0.5 inline-flex rounded-full bg-blue-400/25 dark:bg-blue-300/25 text-zinc-600 dark:text-white w-5 h-5"/>
        </span>
        <span className="text-green-600 dark:text-green-400 font-display text-xs ">{isFetching ? 'Updating...' : ''}{data.presence_count}</span><span className="text-zinc-600 dark:text-white">Online Members</span>
      </Link>
    </div>
  );
};

