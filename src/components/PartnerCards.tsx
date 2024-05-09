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

interface PartnerCard {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        title: string;
        link: string;
    }[];
}

const PartnerCards: PartnerCard[] = [
    {
        id: "zaphosting",
        title: "Zap-Hosting",
        description: "Zap-Hosting is a hosting company that offers a wide range of products.",
        image: "/zap-hosting.png",
        tags: ["Servers", "Domains", "VPS"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/zaphosting",
            },
            {
                title: "Website",
                link: "https://zap-hosting.com/joker",
            },
        ]
    },
    {
        id: "wolfshield",
        title: "WolfSheild [AC]",
        description: "Wolfshield is an Anti-Cheat made for FiveM Servers and is made by Xtelfou.",
        image: "/wolf_shield.png",
        tags: ["lua", "fivem", "QBCore", "ESX"],
        links: [
            {
                title: "Website",
                link: "https://wolf-shieldv2.tebex.io"
            },
            {
                title: "Discord",
                link: "https://discord.gg/Zqr4nHkQZf"
            }
        ]
    },
    {
        id: "jokerdev",
        title: "Partnership/Sponsor",
        description: "If you want to partner with me or sponsor me, feel free to contact me.",
        image: "/joker.jpg",
        tags: ["Hosting", "Discord"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
]

export default function PartnerCard() {
    const [show, setShow] = useState(false);
    const [border, setBorder] = useState(false);

    // set border based on id
    const borderStyle = (id: string) => {
        if (id === "zaphosting") {
            return "border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30";
        } else if (id === "wolfshield") {
            return "border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30";
        } else if (id === "jokerdev") {
            return "border rounded-xl border-blue-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-blue-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30";
        } else {
            return "border-gray-300";
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-4 justify-center">
            {PartnerCards.map((PartnerCard) => (
                <Card
                    key={PartnerCard.title}
                    shadow="md"
                    className={borderStyle(PartnerCard.id)}
                >
                   <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
                        <h2 className="items-center text-center">{PartnerCard.title}</h2>
                    </CardHeader>
                    <CardBody className="items-center text-center space-y-2 p-1 justify-between">
                        <Image
                            isBlurred
                            src={PartnerCard.image}
                            alt={PartnerCard.title}
                            width={150}
                            height={150}
                            className="p-1 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                        />
                        <p>{PartnerCard.description}</p>
                        <p>
                            Tags:{" "}
                            {PartnerCard.tags.map((tag, index) => (
                                <Code key={index} color="primary" className="mx-1">
                                    {tag.toString()}
                                </Code>
                            ))}
                        </p>
                    </CardBody>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                        {PartnerCard.links.map((link) => (
                            <Button
                                key={link.title}
                                color="default"
                                className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                                onClick={() => setShow(!show)}
                                href={link.link}>
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
