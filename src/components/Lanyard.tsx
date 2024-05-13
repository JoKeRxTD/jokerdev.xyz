/* eslint-disable @next/next/no-img-element */
'use client'
import { useLanyard } from 'use-lanyard';
import { motion } from 'framer-motion';
import { parse } from 'date-fns'

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
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${OnlineStatus}`}>
                Online
            </div>
        )
    } else if (activity.discord_status === 'idle') {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${IdleStatus}`}>
                Idle
            </div>
        )
    } else if (activity.discord_status === 'dnd') {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${DNDStatus}`}>
                Do Not Disturb
            </div>
        )
    } else {
        return (
            <div className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${OfflineStatus}`}>
                Offline
            </div>
        )
    }
}

const LanyardCard = () => {
    const { data: activity } = useLanyard(DiscordID);

    // todo: if activity is null, return null
    if (!activity || !activity.discord_user) return null;
    
    // todo: map all activity data// if offline don't show card
    if (activity.discord_status === 'offline') return null;

    const activityNameData = activity.activities.map((activity) => activity.name);
    const activityStateData = activity.activities.map((activity) => activity.state);
    const activityDetailsData = activity.activities.map((activity) => activity.details);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="hidden lg:flex lg:flex-row lg:fixed lg:bottom-15 lg:right-7 lg:w-[400px] lg:h-[170px] border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
            <div className="flex flex-col">
                {/* <p className="text-zinc-600 dark:text-white font-semibold text-sm">My Discord Activity</p> */}
                <div className="flex flex-row right-0 top-0 pt-4 pl-4">
                    <img
                        src={`https://cdn.discordapp.com/avatars/${activity?.discord_user?.id}/${activity?.discord_user?.avatar}.gif`}
                        alt="Discord Avatar"
                        className="rounded-lg w-12 h-12 border border-zinc-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:border-opacity-50"
                        width={30}
                        height={30}
                    />
                    <div className="flex flex-col ml-2">
                        <p className='text-zinc-600 dark:text-white font-semibold text-sm'>{activity?.discord_user?.global_name}</p>
                        <UserStatus status={activity?.discord_status} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-2 bottom-0 right-0 pl-8 pt-2 text-2/xl">
                    <p>
                        {activityNameData.map((activityName, index) => (
                            <p key={index} className="text-gray-800 dark:text-gray-100 text-lg">{activityName}</p>
                        ))}
                    </p>
                    <p>
                        {activityStateData.map((activityState, index) => (
                            <p key={index} className="text-gray-800 dark:text-gray-100 text-md">{activityState}</p>
                        ))}
                    </p>
                    <p>
                        {activityDetailsData.map((activityDetails, index) => (
                            <p key={index} className="text-gray-800 dark:text-gray-100 text-md">{activityDetails}</p>
                        ))}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default LanyardCard;