/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";
import Image from "next/image";
import {useState} from "react"


const Spotify = () => {
  const { data: user } = useLanyard("116730818822537225");
  
  
  if (!user || !user.spotify) return null;
  
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className="hidden lg:flex lg:flex-row lg:fixed lg:bottom-15 lg:left-2 items-center justify-center p-2 gap-2 w-120 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
    >
      <div className="flex flex-row items-center justify-center">
          <img
            src={user.spotify.album_art_url ?? ""} 
            alt="Spotify Album Art"
            className="w-12 h-12 rounded-md"
            width={48}
            height={48}
          />
        <div className="flex flex-col ml-2">
          <p className="text-zinc-600 dark:text-white font-semibold text-sm">{user.spotify.song}</p>
          <p className="text-zinc-600 dark:text-white font-semibold text-sm">{user.spotify.artist}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center ml-4">
        <motion.div
          className="w-3 h-3 rounded-full mr-1"
          style={{ background: "rgba(100, 200, 100)" }}
        />
        <p className="text-zinc-600 dark:text-white font-semibold text-sm">Listening to Spotify</p>
      </div>
    </motion.div>
  );
};

export default Spotify;