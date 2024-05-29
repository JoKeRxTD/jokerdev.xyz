/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '@/src/actions/actions';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import {processFlags, Badges} from "@/src/utils/flags";

type User = {
    id: string;
    discordId: any;
    global_name: string;
    name: string;
    username: string;
    avatar: string;
    image: string;
    role: string;
    email: string;
    email_verified: boolean;
    flags: number;
    premium_type: number;
    public_flags: number;
    banner: string;
    createdAt: string;
    updatedAt: string;
};

const MockData = [
    {
        id: "1",
        discordId: "1",
        global_name: "Global Name",
        name: "<JoKeR/>",
        username: "jokerxtd",
        avatar: "Avatar id",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "admin",
        email: "email@testing.com",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "2",
        discordId: "2",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "3",
        discordId: "3",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "4",
        discordId: "4",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "5",
        discordId: "5",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "6",
        discordId: "6",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "7",
        discordId: "7",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    },
    {
        id: "8",
        discordId: "8",
        global_name: "Global Name",
        name: "Name",
        username: "Username",
        avatar: "Avatar",
        image: "https://cdn.jokerdev.xyz/img/dev_26qj4nz3.jpg",
        role: "Role",
        email: "Email",
        email_verified: true,
        flags: 4325952,
        premium_type: 1,
        public_flags: 4325952,
        banner: "https://cdn.jokerdev.xyz/img/dev_njhvc0d3.png",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01"
    }
];

const DiscordUserCard: React.FC = () => {
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        // Fetch user data from the database
        const fetchData = async () => {
            try {
                const userData = await getAllUsers();
                const formattedUserData = userData.map(user => ({
                    ...user,
                    createdAt: user.createdAt.toString(),
                    updatedAt: user.updatedAt.toString()
                }));
                setUserData(formattedUserData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4"
        >
            {MockData.map((user) => (
                <Card key={user.id} className="w-[20vh] h-[30vh] flex flex-col items-center justify-center gap-2 p-2 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                    <CardHeader className="flex flex-col items-center justify-center">
                        <Image src={user.banner} alt={user.username} className='object-cover rounded-md w-full h-full' />
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <Avatar className="w-8 h-8">
                            {user.image && (
                                <AvatarImage
                                    src={user.image}
                                    alt={user.username}
                                />
                            )}
                            <AvatarFallback>{user.username}</AvatarFallback>
                        </Avatar>
                        <span>{user.global_name}</span>
                        <span>
                            Username:{" "}
                            {user.username}
                        </span>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                        <Link href={`/user/${user.discordId}`}>
                            <Button variant="JokerBlueButton" className="text-center p-2 h-5 w-8">
                                Profile
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </motion.div>
    );
}

export default DiscordUserCard;