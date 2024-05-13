/* eslint-disable @next/next/no-img-element */
'use client'
import { useLanyard } from 'use-lanyard';
import { motion } from 'framer-motion';
import { parse } from 'date-fns'

const DiscordID = '116730818822537225';

const LanyardCard = () => {
    const { data: activity } = useLanyard(DiscordID);
    // if (!data || !data.discord_user) return null;

    // todo: if activity is null, return null
    if (!activity || !activity.discord_user) return  null;
    // todo: map all activity data

    const activityNameData = activity.activities.map((activity) => activity.name);
    const activityStateData = activity.activities.map((activity) => activity.state);
    const activityDetailsData = activity.activities.map((activity) => activity.details);
    

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="hidden lg:flex lg:flex-row lg:fixed lg:bottom-15 lg:right-7 items-center justify-center p-2 gap-2 w-120 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    className="animate-pulse w-3 h-3 rounded-full mr-1"
                    style={{ background: "rgba(100, 200, 100)" }}
                />
                <p className="text-zinc-600 dark:text-white font-semibold text-sm">My Discord Activity</p>
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={`https://cdn.discordapp.com/avatars/${activity?.discord_user?.id}/${activity?.discord_user?.avatar}.gif`}
                            alt="Discord Avatar"
                            className="rounded-lg w-12 h-12"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>
                            {activityNameData.map((activityName, index) => (
                                <p key={index} className="text-gray-800 dark:text-gray-100 text-sm">{activityName}</p>
                            ))}
                        </p>
                        <p>
                            {activityStateData.map((activityState, index) => (
                                <p key={index} className="text-gray-800 dark:text-gray-100 text-sm">{activityState}</p>
                            ))}
                        </p>
                        <p>
                            {activityDetailsData.map((activityDetails, index) => (
                                <p key={index} className="text-gray-800 dark:text-gray-100 text-sm">{activityDetails}</p>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default LanyardCard;


{/* <img
                src={`https://cdn.discordapp.com/avatars/${activity?.discord_user?.id}/${activity?.discord_user?.avatar}.png`}
                alt="Discord Avatar"
                className="rounded-full h-10 w-10"
            />
            <div className="flex flex-col">
                <p className="text-gray-800 dark:text-gray-100">{activity?.discord_user?.username}</p>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{activity?.activities[0]?.name}</p> */}
