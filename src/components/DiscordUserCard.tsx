// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { getAllUsers } from '@/src/actions/actions';
// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
// import { Button } from "@/src/components/ui/button";
// import Link from "next/link";
// import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
// import { motion } from "framer-motion";
// import { Image } from "@nextui-org/image";
// import { processFlags } from '@/src/utils/flags';
// // import {z} from "zod";

// // type User = {
// //     id: string;
// //     discordId: string;
// //     global_name: string;
// //     name: string;
// //     username: string;
// //     avatar: string;
// //     image: string;
// //     email: string;
// //     email_verified: string; // Update the type to string
// //     flags: number;
// //     premium_type: number;
// //     public_flags: number;
// //     banner: string;
// //     role: string | null;
// //     createdAt: Date;
// //     updatedAt: Date;
// // };

// interface User {
//     id: string;
//     discordId: string;
//     global_name: string;
//     name: string;
//     username: string;
//     avatar: string;
//     image: string;
//     email: string;
//     email_verified: string; // Update the type to string
//     flags: number;
//     premium_type: number;
//     public_flags: number;
//     banner: string;
//     role: string | null;
//     createdAt: Date;
//     updatedAt: Date;
// }


// export default async function DiscordUserCard() {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<Error | null>(null);

//     const userData = getAllUsers().then((users) => {
//         return users.map((user) => {
//             return {
//                 id: user.id,
//                 discordId: user.discordId,
//                 global_name: user.global_name,
//                 name: user.name,
//                 username: user.username,
//                 avatar: user.avatar,
//                 image: user.image,
//                 email: user.email,
//                 email_verified: user.email_verified,
//                 flags: user.flags,
//                 premium_type: user.premium_type,
//                 public_flags: user.public_flags,
//                 banner: user.banner,
//                 role: user.role,
//                 createdAt: user.createdAt,
//                 updatedAt: user.updatedAt,
//             };
//         });
//     });

//     useEffect(() => {
//         userData.then(() => setLoading(false)).catch((error) => setError(error));
//     }, [userData]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error.message}</p>;
//     }
    
//     const flagCodeToName = {
//         "07742a794bed8ec43505775550b2635e43828c57": "Partner",
//         "48f181723d3a3b452eeb7f7044d832e38d6ff411": "Nitro",
//         "d9e17819b1eacac4f4e56f94eaf483a26abb8e18": "Early Verified Bot Developer",
//         "151b4354319f7ab29b124b53b0e0cee44b7007a5": "Early Supporter",
//         "6901298edcaee0fc8f81c108702ff5fb01955abe": "Hypesquad Brilliance",
//         "abacb4abed31ed7a37f4578aadee07143cf0303f": "Hypesquad Balance",
//         "771107b5dec32c6d1cc20c0e8d5682e3c58df87f": "Hypesquad Bravery",
//         "dc22ceb9ea3234470468812bee08cff85e993127": "Hypesquad Events",
//         "ecec6059f20760c80c98d68b8a5895aa4f8e5120": "Staff",
//         "a190fcd2dcd3de6747d97711f56b578764492cd6": "Certified Moderator",
//         "666ed6955708d9d54083a067ce3d6d85fd7234fc": "Bug Hunter Level One",
//         "18ca50e1d7abebd32825eb9957ce04354caf0fce": "Bug Hunter",
//     };
//     const userFlags = processFlags(userData[0].flags, userData[0].premium_type);
//     const userPublicFlags = processFlags(userData[0].public_flags, userData[0].premium_type);
//     const flagNames = userPublicFlags.map((flag) => flagCodeToName[flag]);

//     const userBadgesName = flagNames;

    
//     function UserCard({ user }: { user: User }) {
//         return (
//             <Card>
//                 <CardHeader>
//                     <Avatar className="w-8 h-8">
//                         {user.image && (
//                             <AvatarImage
//                                 src={user.image}
//                                 alt={user.username}
//                             />
//                         )}
//                         <AvatarFallback>{user.username}</AvatarFallback>
//                     </Avatar>
//                     <div className="flex flex-row gap-2">
//                         {user.flags && userBadgesName.map((flag) => (
//                             <Image
//                                 key={flag}
//                                 src={`/badges_2/${flag}.svg`}
//                                 alt={flag}
//                                 width={24}
//                                 height={24}
//                                 className="rounded-full"
//                             />
//                         ))}
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <CardTitle>{user.global_name || user.name || user.username}</CardTitle>
//                     <CardDescription>{user.email}</CardDescription>
//                     <CardDescription>{user.role}</CardDescription>
//                 </CardContent>
//                 <CardFooter>
//                     <Link href={`/users/${user.id}`}>
//                         <Button variant="JokerBlueButton">
//                             Profile
//                         </Button>
//                     </Link>
//                 </CardFooter>
//             </Card>
//         );
//     }



//     return (
//         <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
//             className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4"
//         >
//             {userData.map((user) => (
//                 <UserCard key={user.id} user={user} />
//             ))}
//         </motion.div>
//     );
// }