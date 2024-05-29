import { Tooltip } from "@nextui-org/react";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { Code } from "@nextui-org/react";
import { classNames } from "@/src/utils/classNames";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss, SiLua, SiDiscord, SiD3Dotjs } from "react-icons/si";

interface TagProps {
  label: string;
  color: string;
  icon?: JSX.Element;
}

const Tags: TagProps[] = [
  { label: "NextUI", color: "default", icon: <SiCss3 /> },
  { label: "NextJS", color: "default", icon: <SiTypescript /> },
  { label: "TailwindCSS", color: "default", icon: <SiTailwindcss /> },
  { label: "React.JS", color: "default", icon: <SiReact /> },
  { label: "Discord.JS", color: "default", icon: <SiD3Dotjs /> },
  { label: "NodeJS", color: "default", icon: <SiNodedotjs /> },
  { label: "TypeScript", color: "default", icon: <SiTypescript /> },
  { label: "JavaScript", color: "default", icon: <SiJavascript /> },
  { label: "HTML", color: "default00", icon: <SiHtml5 /> },
  { label: "CSS", color: "default00", icon: <SiCss3 /> },
  { label: "LUA", color: "default00", icon: <SiLua /> },
];

export default function Skills() {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames("block flex-wrap text-center content-center justify-center items-center p-1 gap-4 text-[#161616] dark:text-[#fafafa] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]")}>
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-center">
        <span className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Skills</span>
        <span className="text-center pb-8">
          Here are some of my skills that I have learned.
        </span>
      </div>
      <div className="gap-12">
        {Tags.map((tag, index) => (
          <Tooltip
            key={index}
            content={tag.label}
            color={tag.color as any}
            className={classNames('z-11 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400')}
          >
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={classNames("m-1 flex-wrap-reverse justify-center items-center animate-slide")}
              onClick={() => setShow(!show)}
            >
              <p className="text-gray-800 dark:text-gray-100 text-lg lg:text-2xl">
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