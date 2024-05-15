/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";
import { useState, useEffect } from "react"
// import LanyardAPI from "../utils/Lanyard";
import {Progress} from "@nextui-org/progress";

const DiscordID = '116730818822537225';

function msToMinSeconds(millis: number) {
  var minutes = Math.floor(millis / 60000);
  var seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const SpotifyStatus = () => {
  const { data: user } = useLanyard(DiscordID);
  // todo: if activity is null, return null
  if (!user || !user.discord_user) return null;

  const Listening = 'bg-green-900/25 text-green-400 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25';
  const NotListening = 'bg-gray-900/25 text-gray-400 ring-gray-400/25 dark:bg-gray-900/25 dark:text-gray-400 dark:ring-gray-400/25';

  if (user.spotify) {
    return (
        <div className={`mb-1 inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${Listening}`}>
          Listening to Spotify
        </div>
    );
  } else {
    return (
        <div className={`mb-1 inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${NotListening}`}>
          Not Listening to Spotify
        </div>
    );
  }
}

const Spotify = () => {
  const { data: user } = useLanyard(DiscordID);

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!user ||!user.spotify) return null;

  const ListeningValue = user.listening_to_spotify; //! True or false

  const songLength = user.spotify.timestamps.end - user.spotify.timestamps.start;
  const timeElapsed = currentTime - user.spotify.timestamps.start;
  const progress = (timeElapsed / songLength) * 100;

  // todo: implement a way to slice song is more than 35 characters and place "..."
  if (user.spotify.song.length > 45) {
    user.spotify.song = user.spotify.song.slice(0, 35) + "...";
  }

  if (user.spotify.artist.length > 35) {
    user.spotify.artist = user.spotify.artist.slice(0, 25) + "...";
  }

  if (user.spotify.album.length > 35) {
    user.spotify.album = user.spotify.album.slice(0, 30) + "...";
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className="hidden lg:flex lg:flex-col lg:fixed lg:w-[390px] lg:h-[200px] lg:bottom-[100px] lg:left-2 items-center justify-center p-2 gap-2 w-120 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30"
    >
      <div className="flex flex-col items-center justify-center gap-1">
            <SpotifyStatus />
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center px-4 justify-center gap-4 w-[350px] h-[100px] border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border bg-zinc-200  dark:bg-zinc-800/30 lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <img
                src={user.spotify.album_art_url ?? ""}
                alt="Spotify Album Art"
                className="w-16 h-16 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-zinc-600 dark:text-white font-semibold text-sm">{user.spotify.artist}</p>
                <p className="text-zinc-600 dark:text-white font-semibold text-sm">{user.spotify.album}</p>
                <p className="text-zinc-600 dark:text-white font-semibold text-sm">{user.spotify.song}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
            <p className="text-zinc-600 dark:text-white font-semibold text-sm">
              {msToMinSeconds(timeElapsed)} - {msToMinSeconds(songLength - timeElapsed)}
            </p>
            <Progress
              color="success"
              value={progress}
              className="w-[90%] h-2 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border"
            />
          </div>
        </div>
        <div className="mb-1 text-[10px]">
          Powered by{" "}
          <a href="https://lanyard.cnrad.dev" target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400">
            Lanyard
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Spotify;
