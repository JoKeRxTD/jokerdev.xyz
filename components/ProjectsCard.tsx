import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";

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
        description: "This is my website, it is made with NextJS and TailwindCSS, This project is open source.",
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
        title: "Mythbot [Discontinued]",
        description: "This is a Discord Bot made with DiscordJS and NodeJS.",
        image: "/mythbot.png",
        tags: ["DiscordJS", "NodeJS"],
        links: [
            {
                title: "Invite",
                link: "https://discord.gg/UnTTbM7ySS"
            },
            {
                title: "Website",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
]

export default function ProjectsCard() {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 p-6">
            {Projects.map((project) => (
                <Card
                    key={project.title}
                    shadow="md"
                    className="max-w-sm w-full sm:w-1/2 lg:w-1/3 justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
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
                            className="p-1 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
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
                            <Link
                                isExternal
                                color="foreground"
                                className="text-center p-1"
                                href={link.link}
                            >
                                {link.title}
                            </Link>
                            </Button>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
