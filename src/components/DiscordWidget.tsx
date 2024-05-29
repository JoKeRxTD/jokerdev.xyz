// https://discord.com/api/guilds/325761816426971137/widget.json get data from this endpoint and display it
import {useState} from "react";
import {useEffect} from "react";
import Link from "next/link";
import {DiscordIcon} from "@/src/components/Icons";

const API_URL = "https://discord.com/api/guilds/325761816426971137/widget.json";

const DiscordWidget = () => {
  const [data, setData] = useState<any>(null);
  const guild = useState<any>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  

  if (!data) {
    return <div className="hidden lg:flex lg:flex-row w-[35vh] items-center text-center justify-center ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400 p-2 rounded-md gap-2">Loading Discord Members...</div>;
  }

  return (
    <div className="hidden lg:flex lg:flex-row max-w-[35vh] gap-2 rounded-md items-center text-center justify-center p-2 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
      <Link href={data.instant_invite} target="_blank" rel="noreferrer" className="lg:flex lg:flex-row max-w-[35vh] gap-2 items-center text-center justify-center">
        <p className="inline-flex relative">
          <DiscordIcon className="animate-ping absolute inline-flex h-full p-1 w-full rounded-full bg-blue-400 opacity-75 dark:bg-blue-300 text-zinc-600 dark:text-white"/>
          <DiscordIcon className="relative inline-flex rounded-full h-6 w-6 bg-blue-300 dark:bg-blue-700 text-zinc-400 dark:text-zinc-700"/>
        </p>
        <p className="text-green-600 dark:text-green-400 font-display text-lg ">{data.presence_count}</p> <span className="text-zinc-600 dark:text-white">Online Members</span>
      </Link>
    </div>
  );
  
};

export default DiscordWidget;

