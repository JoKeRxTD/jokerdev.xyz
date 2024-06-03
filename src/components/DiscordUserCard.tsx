// /* eslint-disable @next/next/no-img-element */
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
// import { Button } from "@/src/components/ui/button";
// import Link from "next/link";
// import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
// import { motion } from "framer-motion";
// import { Image } from "@nextui-org/image";
// import { savedcdnUser } from "@/src/actions/user"
// import { processFlags } from '@/src/utils/flags';
// import { Tooltip } from "@nextui-org/react";
// import chalk from "chalk";
// import { Badges } from '../../public/badges/BadgesEncoded';
// import { z } from "zod";



// // const API_URL = `https://dcdn.dstn.to/profile/${id}`;

// export const DiscordBadges = (flag: number): string[] => {
//     let flags: string[] = [];

//     // In the order they appear on profiles
//     if (flag & 1) flags.push("Discord_Employee"); // 1 << 0
//     if (flag & 262144) flags.push("Discord_Certified_Moderator"); // 1 << 18
//     if (flag & 2) flags.push("Partnered_Server_Owner"); // 1 << 1
//     if (flag & 4) flags.push("HypeSquad_Events"); // 1 << 2
//     if (flag & 64) flags.push("House_Bravery"); // 1 << 6
//     if (flag & 128) flags.push("House_Brilliance"); // 1 << 7
//     if (flag & 256) flags.push("House_Balance"); // 1 << 8
//     if (flag & 8) flags.push("Bug_Hunter_Level_1"); // 1 << 3
//     if (flag & 16384) flags.push("Bug_Hunter_Level_2"); // 1 << 14
//     if (flag & 4194304) flags.push("Active_Developer"); // 1 << 22
//     if (flag & 131072) flags.push("Early_Verified_Bot_Developer"); // 1 << 17
//     if (flag & 512) flags.push("Early_Supporter"); // 1 << 9

//     return flags;
// };

// interface dcdnUser {
//     id: string;
//     username: string;
//     global_name: string;
//     name: string;
//     image: string;
//     role: string;
//     email: string;
//     email_verified: boolean;
//     flags: number;
//     premium_type: number;
//     public_flags: number;
//     banner: string;
//     createdAt: string;
//     updatedAt: string;
//     bio: string;
//     accent_color: number;
//     pronouns: string;
//     profile_effect: string;
//     theme_colors: number[];
//     popout_animation_particle_type: string;
//     emoji: string;
//     legacy_username: string;
//     connected_accounts: {
//         type: string;
//         id: string;
//         name: string;
//         verified: boolean;
//         metadata: {
//             created_at: string;
//             game_count: string;
//             item_count_dota2: string;
//             item_count_tf2: string;
//         };
//     }[];
//     user: {
//         id: string;
//         username: string;
//         global_name: string;
//         avatar: string;
//         avatar_decoration_data: {
//             asset: string;
//             sku_id: string;
//         };
//         discriminator: string;
//         public_flags: number;
//         clan: string;
//         flags: number;
//         banner: string;
//         banner_color: string;
//         accent_color: number;
//         bio: string;
//     };
//     user_profile: {
//         bio: string;
//         accent_color: number;
//         pronouns: string;
//         profile_effect: string;
//         banner: string;
//         theme_colors: number[];
//         popout_animation_particle_type: string;
//         emoji: string;
//     };
// }



// export default function DiscordUserCard({ id }: { id: string }) {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<Error | null>(null);
//     const [dcdnData, setDcdnData] = useState<dcdnUser | null>(null);

//     const API_URL = `https://dcdn.dstn.to/profile/${id}`;

//     useEffect(() => {
//         fetch(`${API_URL}/${id}`)
//             .then((res) => res.json())
//             .then((data) => setDcdnData(data))
//             .catch((err) => setError(err))
//             .finally(() => setLoading(false));
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     if (!dcdnData) {
//         return <div>No data</div>;
//     }

//     let dcdnDataFlags = DiscordBadges(dcdnData.public_flags);

//     return (
//         <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
//             className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4"
//         >
//             <Card>
//                 <CardHeader>
//                     <Avatar className="w-8 h-8">
//                         {dcdnData.image && (
//                             <AvatarImage
//                                 src={dcdnData.image}
//                                 alt={dcdnData.username}
//                             />
//                         )}
//                         <AvatarFallback>{dcdnData.username}</AvatarFallback>
//                     </Avatar>
//                     <div className="flex flex-row gap-2">
//                         {dcdnDataFlags.map(v => (
//                             <Tooltip
//                                 key={v}
//                                 content={v.split("_").join(" ")}
//                                 color='default'
//                                 className='z-11 rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'
//                             >
//                                 <Image src={Badges[v]} alt={v} width={24} height={24} />
//                             </Tooltip>
//                         ))}
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <CardTitle>{dcdnData.global_name || dcdnData.name || dcdnData.username}</CardTitle>
//                     <CardDescription>{dcdnData.email}</CardDescription>
//                     <CardDescription>{dcdnData.role}</CardDescription>
//                 </CardContent>
//                 <CardFooter>
//                     <Link href={`/user/${dcdnData.id}`}>
//                         <Button variant="blue" size="default" rounded="md">
//                             Profile
//                         </Button>
//                     </Link>
//                 </CardFooter>
//             </Card>
//         </motion.div>
//     );
// }