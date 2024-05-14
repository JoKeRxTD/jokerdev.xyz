/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useLanyard } from 'use-lanyard';
import { motion } from 'framer-motion';
import React from 'react';
import { Badges } from '@/public/badges/BadgesEncoded';
import { Tooltip } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const DiscordID = '116730818822537225';

const UserStatus = ({ status }: { status: string }) => {
    const { data: activity } = useLanyard(DiscordID);
    // todo: if activity is null, return null
    if (!activity || !activity.discord_user) return null;

    const OnlineStatus = 'bg-green-900/25 text-green-400 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25'
    const IdleStatus = 'bg-orange-900/25 text-orange-400 ring-orange-400/25 dark:bg-orange-900/25 dark:text-orange-400 dark:ring-orange-400/25'
    const DNDStatus = 'bg-red-900/25 text-red-400 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25'
    const OfflineStatus = 'bg-gray-900/25 text-gray-400 ring-gray-400/25 dark:bg-gray-900/25 dark:text-gray-400 dark:ring-gray-400/25'

    if (activity.discord_status === 'online') {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${OnlineStatus}`}>
                Online
            </div>
        )
    } else if (activity.discord_status === 'idle') {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-1 py-1 text-xs ring-1 ring-inset ${IdleStatus}`}>
                Idle
            </div>
        )
    } else if (activity.discord_status === 'dnd') {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${DNDStatus}`}>
                Do Not Disturb
            </div>
        )
    } else {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${OfflineStatus}`}>
                Offline
            </div>
        )
    }
}

// show dicord bagdes based on public_flags int
export const DiscordBadges = (flag: number): string[] => {
    let flags: string[] = [];

    // In the order they appear on profiles
    if (flag & 1) flags.push("Discord_Employee"); // 1 << 0
    if (flag & 262144) flags.push("Discord_Certified_Moderator"); // 1 << 18
    if (flag & 2) flags.push("Partnered_Server_Owner"); // 1 << 1
    if (flag & 4) flags.push("HypeSquad_Events"); // 1 << 2
    if (flag & 64) flags.push("House_Bravery"); // 1 << 6
    if (flag & 128) flags.push("House_Brilliance"); // 1 << 7
    if (flag & 256) flags.push("House_Balance"); // 1 << 8
    if (flag & 8) flags.push("Bug_Hunter_Level_1"); // 1 << 3
    if (flag & 16384) flags.push("Bug_Hunter_Level_2"); // 1 << 14
    if (flag & 4194304) flags.push("Active_Developer"); // 1 << 22
    if (flag & 131072) flags.push("Early_Verified_Bot_Developer"); // 1 << 17
    if (flag & 512) flags.push("Early_Supporter"); // 1 << 9

    return flags;
};

const NoActivity = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-zinc-600 dark:text-white font-semibold text-sm">Not doing anything right now.</p>
        </div>
    )
}

const LanyardCard = () => {
    const { data: activity } = useLanyard(DiscordID);

    // todo: if there is no activity return Not doing anything right now. in a div
    if (!activity || !activity.discord_user) return null;


    // todo: if activity 0 is spotify then get activity path 1
    const notSpotify = activity.activities.filter(a => a.type !== 2);


    let flags: string[] = DiscordBadges(activity.discord_user.public_flags);
    if (activity.discord_user.avatar && activity.discord_user.avatar.includes("a_")) flags.push("Nitro");

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="hidden lg:flex lg:flex-row lg:fixed lg:bottom-15 lg:right-7 lg:w-[395px] lg:h-[200px] border border-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/30 dark:border-opacity-50 rounded-md bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
            <div className="flex flex-col flex-grow justify-center mx-2 p-1/2 text-2/xl">
                <div className="flex flex-row right-0 top-0 pt-2 pl-2">
                    <img
                        src={`https://cdn.discordapp.com/avatars/${activity?.discord_user?.id}/${activity?.discord_user?.avatar}.gif`}
                        alt="Discord Avatar"
                        className="ring-1 ring-inset rounded-lg w-12 h-12 border border-zinc-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:border-opacity-50"
                        width={30}
                        height={30}
                    />
                    <div className="flex flex-col ml-2">
                        <p className='text-zinc-600 dark:text-white font-semibold text-sm'>{activity?.discord_user?.global_name}</p>
                        <UserStatus status={activity?.discord_status} />
                    </div>
                    <div className="flex flex-col ml-2 mt-2 w-[198px]">
                        <div className='text-center items-center justify-center border border-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/30 dark:border-opacity-50 rounded-md'>
                            <p className='text-gray-800 dark:text-gray-100 text-md p-2'>
                                {flags.map(v => (
                                    <Tooltip
                                        key={v}
                                        content={v.split("_").join(" ")}
                                        color='default'
                                        className='z-11 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border'
                                    >
                                        <img
                                            src={`data:image/png;base64,${Badges[v]}`}
                                            className='w-5 h-5 inline-block mx-1'
                                        />
                                    </Tooltip>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow justify-center mx-2 p-1/2 text-2/xl">
                    <div className="flex flex-col p-2 mb-2 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border">
                        {notSpotify?.length > 0 ? (
                            <div className='flex flex-row mt-2 mb-2'>
                                <Tooltip
                                    key={notSpotify[0]?.name}
                                    content={notSpotify[0]?.name}
                                    color='default'
                                    className='z-11 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border'
                                >
                                    <img
                                        src={`https://media.discordapp.net/external/${notSpotify[0]?.assets?.large_image.replace("mp:external/", "")}`}
                                        alt="Discord Avatar"
                                        className="p-1 border w-12 h-12 rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                                    />
                                </Tooltip>
                                <div className="flex flex-col">
                                    <p className="text-zinc-600 dark:text-white font-semibold text-md">{notSpotify[0]?.name}</p>
                                    <p className="text-zinc-600 dark:text-white font-semibold text-sm">{notSpotify[0]?.details}</p>
                                    <p className="text-zinc-600 dark:text-white font-semibold text-sm">{notSpotify[0]?.state}</p>
                                </div>
                            </div>
                        ) : (
                            <NoActivity />
                        )}
                    </div>

                </div>
                <div className="mb-1 text-[10px]">
                    Powered by <a href="https://lanyard.cnrad.dev" target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400">Lanyard</a>
                </div>
            </div>
        </motion.div>
    )
}

export default LanyardCard;