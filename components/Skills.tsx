import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { classNames } from "@/utils/classNames";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss, SiLua, SiDiscord, SiD3Dotjs } from "react-icons/si";

interface TagProps {
    label: string;
    color: string;
    icon?: JSX.Element;
}

const Tags: TagProps[] = [
    { label: "NextUI", color: "primary", icon: <SiCss3 /> },
    { label: "NextJS", color: "secondary", icon: <SiTypescript /> },
    { label: "TailwindCSS", color: "success", icon: <SiTailwindcss /> },
    { label: "React.JS", color: "warning", icon: <SiReact /> },
    { label: "Discord.JS", color: "danger", icon: <SiD3Dotjs /> },
    { label: "NodeJS", color: "primary", icon: <SiNodedotjs /> },
    { label: "TypeScript", color: "secondary", icon: <SiTypescript /> },
    { label: "JavaScript", color: "success", icon: <SiJavascript /> },
    { label: "HTML", color: "warning", icon: <SiHtml5 /> },
    { label: "CSS", color: "danger", icon: <SiCss3 /> },
    { label: "LUA", color: "primary", icon: <SiLua /> },
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
                    color={tag.color as "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "foreground" | undefined}
                    className='z-11 border rounded-md border-zinc-800  backdrop-blur-2xl dark:border-zinc-800 lg:rounded-md lg:border'
                >
                        <Button
                            key={index}
                            className="m-1 flex-wrap-reverse justify-center items-center border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md md:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                            onClick={() => setShow(!show)}
                            
                        >
                            <p className="text-gray-800 dark:text-gray-100">
                            {tag.icon ? tag.icon : tag.label}
                            </p>
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