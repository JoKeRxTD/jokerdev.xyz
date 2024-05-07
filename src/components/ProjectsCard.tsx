'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import passHref  from "react";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconRight?: ReactElement;
}

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        title: string;
        link: string;
    }[];
}

const Projects: Project[] = [
    {
        title: "My Website",
        description: "This is my website, it is made with NextUI, NextJS and TailwindCSS, This project is open source.",
        image: "/joker.jpg",
        tags: ["NextJS", "TailwindCSS", "NextUI"],
        links: [
            {
                title: "Github",
                link: "https://github.com/JoKeRxTD/jokerdev.xyz",
            },
            {
                title: "Website",
                link: "https://jokerdev.xyz",
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
    {
        title: "JK:Development",
        description: "JK:Development is a development service that privides services for FiveM, Discord and more.",
        image: "/jk_dev2.png",
        tags: ["lua", "fivem"],
        links: [
            {
                title: "Store",
                link: "https://store.jokerdev.xyz"
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
    {
        title: "Mythbot Radio [Discontinued]",
        description: "Join 1,585,911 Users, Use MythBot Radio, With over 30+ Radio Stations From All Over The World..",
        image: "/mythbot.png",
        tags: ["DiscordJS", "NodeJS"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
            {
                title: "Website",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
    {
        title: "JoKeR LinkTree",
        description: "This is my version of the popular website LinkTree, This project is open source.",
        image: "/joker3.png",
        tags: ["NextJS", "ShadCn", "Typescript"],
        links: [
            {
                title: "Github",
                link: "https://github.com/jokerxtd"
            },
            {
                title: "Preview",
                link: "https://discord.gg/UnTTbM7ySS"
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
        ]
    },
    {
        title: "EqualizerRP [Discontinued]",
        description: "Equalizer roleplay is a FiveM roleplay server with a focus on community building and roleplay.",
        image: "/eqrp_logo.png",
        tags: ["lua", "html", "css", "js"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
        ]
    },
]

// card hover gradient border effect when mouse

export default function ProjectsCard() {
    const [show, setShow] = useState(false);
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-4 justify-center">
            
            {Projects.map((project) => (
                <Card
                    key={project.title}
                    shadow="md"
                    className="max-w-sm w-full sm:w-1/2 lg:w-full justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                >
                    <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
                        <h2>{project.title}</h2>
                    </CardHeader>
                    <CardBody className="items-center text-center space-y-2 p-1 justify-between">
                        <Image
                            isBlurred
                            src={project.image}
                            alt={project.title}
                            width={150}
                            height={150}
                            className="border rounded-xl border-gray-300 backdrop-blur-2xl dark:border-neutral-800 lg:rounded-xl lg:border"
                        />
                        <p>{project.description}</p>
                        <p>
                            Tags:{" "}
                            {project.tags.map((tag, index) => (
                                <Code key={index} color="primary" className="mx-1">
                                    {tag.toString()}
                                </Code>
                            ))}
                        </p>
                    </CardBody>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                            {project.links.map((link) => (
                                <Button
                                    key={link.title}
                                    variant="bordered"
                                    className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                                    href={link.link}
                                >
                                    <Link href={link.link}>
                                        <p className="text-gray-800 dark:text-gray-300 lg:text-base text-sm text-center">
                                        {link.title}
                                        </p>
                                    </Link>
                                </Button>
                            ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
