'use client'
// import DiscordUserCard from '@/src/components/DiscordUserCard'
import { Suspense } from "react";
import {Skeleton} from "@nextui-org/skeleton";
import { Divider } from "@nextui-org/react";

export default function DiscordUserCardsPage() {
  
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Profile Page</div>
      <Divider />
      <div className="flex flex-col gap-4">
        <Divider />
        <span className="text-4xl md:text-2xl font-bold mb-5">User Information</span>
        <Suspense fallback={ <Skeleton className='w-[100%] h-16' /> }>
          {/* <DiscordUserCard /> */}
          <h1>Discord User Card</h1>
        </Suspense>
        {/* <DiscordUserCard /> */}
        <Divider />
      </div>
    </div>
  );
}
