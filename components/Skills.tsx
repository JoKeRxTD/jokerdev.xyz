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
        <div className="flex flex-wrap justify-center items-center p-1 gap-1 text-[#fafafa] dark:text-[#fafafa]">
            {Tags.map((tag, index) => (
                <Tooltip
                    key={index}
                    content={tag.label}
                    className="z-10 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                >
                    <Button
                        key={index}
                        className="w-10 h-10 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                        onClick={() => setShow(!show)}
                    >
                        {tag.label}
                    </Button>
                </Tooltip>
            ))}
            <p className="p-3 text-gray-800 dark:text-gray-100">
                I am currently learning <Code color="primary">Typescript</Code>, <Code color="primary">NextJS</Code>
            </p>
        </div>
    );
}