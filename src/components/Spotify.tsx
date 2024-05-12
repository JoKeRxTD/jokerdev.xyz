'use client'
import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";
import Image from "next/image";
import {useState} from "react"


const Spotify = () => {
  const { data: user } = useLanyard("116730818822537225");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  
  const getAvatarUrl = () => {
    if (user && user.spotify) {
      setAvatarUrl(user.spotify.album_art_url);
    }
  };
  
  if (!user || !user.spotify) return null;
  
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className="fixed bottom-0 left-0 w-full h-16 bg-black/50 backdrop-blur-md flex flex-row items-center justify-center z-[1000] border-t border-slate-800/30"
    >
      <div className="flex flex-row items-center justify-center">
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt="Spotify Album Art"
            className="w-12 h-12 rounded-md"
            width={48}
            height={48}
          />
        )}
        <div className="flex flex-col ml-2">
          <p className="text-white font-semibold text-sm">{user.spotify.song}</p>
          <p className="text-gray-300 text-xs">{user.spotify.artist}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center ml-4">
        <motion.div
          className="w-3 h-3 rounded-full mr-1"
          style={{ background: "rgba(100, 200, 100)" }}
        />
        <p className="text-white font-semibold text-sm">Listening to Spotify</p>
      </div>
    </motion.div>
  );
};

export default Spotify;