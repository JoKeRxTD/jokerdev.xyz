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
        title: "Zap-Hosting",
        description: "Zap-Hosting is a hosting company that offers a wide range of products.",
        image: "/zap-hosting.png",
        tags: ["Servers", "Domains", "VPS"],
        links: [
            {
                title: "Discor",
                link: "https://discord.gg/zaphosting",
            },
            {
                title: "Website",
                link: "https://zap-hosting.com/joker",
            },
        ]
    },
    {
        title: "WolfSheild [AC]",
        description: "Wolfshield is an Anti-Cheat made for FvieM Servers and is made by Xtelfou.",
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
]

export default function PartnerCard() {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 p-6">
            {PartnerCards.map((PartnerCard) => (
                <Card
                    key={PartnerCard.title}
                    shadow="md"
                    className=" w-full p-3 sm:w-1/2 lg:w-1/3 text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                >
                    <CardHeader>
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
                                href={link.link}>{link.title}
                            </Button>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
