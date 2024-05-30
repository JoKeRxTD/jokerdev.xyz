// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { getAllUsers } from '@/src/actions/actions';
// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
// import { Button } from "@/src/components/ui/button";
// import Link from "next/link";
// import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
// import { motion } from "framer-motion";
// import { Image } from "@nextui-org/image";
// import {processFlags, Badges} from "@/src/utils/flags";
// import {z} from "zod";

// type User = {
//     id: string;
//     discordId: any;
//     global_name: string;
//     name: string;
//     username: string;
//     avatar: string;
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
// };

// interface UserProps {
//     id: string;
//     discordId: any;
//     global_name: string;
//     name: string;
//     username: string;
//     avatar: string;
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
// }


// export default async function DiscordUserCard({ params }: { params: { id: string } }) {
//     const [userData, setUserData] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<Error | null>(null);
    

//     function checkUserExists(discordId: string) {
//         const user = userData.find((user) => user.discordId === discordId);
//         if (user) {
//             return true;
//         } else {
//             return false;
//         }
//     }


//     return (
//         <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
//             className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4"
//         >
//             {userData.map((user) => (
//                 <Card key={user.id} className="w-[20vh] h-[30vh] flex flex-col items-center justify-center gap-2 p-2 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
//                     <CardHeader className="flex flex-col items-center justify-center">
//                         <Image src={user.banner} alt={user.username} className='object-cover rounded-md w-full h-full' />
//                     </CardHeader>
//                     <CardContent className="flex flex-col items-center justify-center">
//                         <Avatar className="w-8 h-8">
//                             {user.image && (
//                                 <AvatarImage
//                                     src={user.image}
//                                     alt={user.username}
//                                 />
//                             )}
//                             <AvatarFallback>{user.username}</AvatarFallback>
//                         </Avatar>
//                         <span>{user.global_name}</span>
//                         <span>
//                             Username:{" "}
//                             {user.username}
//                         </span>
//                     </CardContent>
//                     <CardFooter className="flex flex-row justify-center gap-2 ">
//                         <Link href={`/user/${user.discordId}`}>
//                             <Button variant="JokerBlueButton" className="text-center p-2 h-5 w-8">
//                                 Profile
//                             </Button>
//                         </Link>
//                     </CardFooter>
//                 </Card>
//             ))}
//         </motion.div>
//     );
// }