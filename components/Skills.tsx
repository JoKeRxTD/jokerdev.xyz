import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";

interface TagProps {
    label: string;
    color: string;
}

const Tags: TagProps[] = [
    { label: "NextUI", color: "primary" },
    { label: "NextJS", color: "secondary" },
    { label: "TailwindCSS", color: "success" },
    { label: "ReactJS", color: "warning" },
    { label: "DiscordJS", color: "danger" },
    { label: "NodeJS", color: "primary" },
    { label: "TypeScript", color: "secondary" },
    { label: "JavaScript", color: "success" },
    { label: "HTML", color: "warning" },
    { label: "CSS", color: "danger" },
    { label: "LUA", color: "primary" }
];

export default function Skills() {
    const [show, setShow] = useState(false);

    return (
        <div className="block flex-wrap justify-center items-center p-1 gap-2 text-[#161616] dark:text-[#fafafa]">
            <h2 className="text-center p-1">
                <Code color="primary" className="">Skills</Code>
            </h2>
            <p className="text-center pb-8">
                Here are some of my skills that I have learned.
            </p>
            <div className="gap-4">
                {Tags.map((tag, index) => (
                    <Tooltip
                        key={index}
                        content={tag.label}
                        className="z-10 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                    >
                        <Button
                            key={index}
                            className="m-1 flex-wrap-reverse justify-center items-center border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                            onClick={() => setShow(!show)}
                        >
                            {tag.label}
                        </Button>
                    </Tooltip>
                ))}
            </div>
            <p className="p-3 text-gray-800 dark:text-gray-100">
                I am currently learning <Code color="primary">Typescript</Code>, <Code color="primary">NextJS</Code>
            </p>
        </div>
    );
}