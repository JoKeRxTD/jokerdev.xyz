// https://discord.com/api/guilds/325761816426971137/widget.json get data from this endpoint and display it
import {useState} from "react";
import {useEffect} from "react";
import Link from "next/link";
import {DiscordIcon} from "../../src/components/Icons";

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
    return <div className="hidden lg:flex lg:flex-row w-[35vh] items-center text-center justify-center border border-gray-200 dark:border-gray-800 p-2 rounded-md gap-2">Loading Discord Members...</div>;
  }

  return (
    <div className="hidden lg:flex lg:flex-row max-w-[35vh] gap-2 items-center text-center justify-center p-2 border border-zinc-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-zinc-200 lg:dark:bg-zinc-800/30">
      <Link href={data.instant_invite} target="_blank" rel="noreferrer" className="lg:flex lg:flex-row max-w-[35vh] gap-2 items-center text-center justify-center">
        <p className="inline-flex relative">
          <DiscordIcon className="animate-ping absolute inline-flex h-full p-1 w-full rounded-full bg-green-400 opacity-75 dark:bg-green-300 text-zinc-600 dark:text-white"/>
          <DiscordIcon className="relative inline-flex rounded-full h-6 w-6 bg-green-300 dark:bg-green-400 text-zinc-600 dark:text-white"/>
        </p>
        <p className="text-green-600 dark:text-green-400 font-display text-lg ">{data.presence_count}</p> <span className="text-zinc-600 dark:text-white">Online Members</span>
      </Link>
    </div>
  );
  
};

export default DiscordWidget;

