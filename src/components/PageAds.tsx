import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { Image } from "@nextui-org/image"

interface TagProps {
    label: string;
    color: string;
}

const Tags: TagProps[] = [
    { label: "Zap Hosting", color: "primary" },
    { label: "Wolf Shield", color: "primary" },
];

export default function PageAds() {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-wrap justify-center items-center p-1 gap-1 text-[#fafafa] dark:text-[#fafafa]">
            {/* <a href="https://zap-hosting.com/joker">joker</a> */}
            <Image
                isBlurred
                shadow="md"
                src="/zaphostingbanner2.jpg"
                alt={"Zap Hosting"}
                width={150}
                // useRef=("https://zap-hosting.com/joker")
                className="w-full h-full rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:rounded-xl lg:border lg:bg-gray-200"
            />

            <Image
                isBlurred
                shadow="md"
                src="/wolf_shield.png"
                alt={"Wolf Shield"}
                width={150}
               // useRef=("https://zap-hosting.com/joker")
               className="w-full h-full rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:rounded-xl lg:border lg:bg-gray-200"
            />

        </div>
    );
}