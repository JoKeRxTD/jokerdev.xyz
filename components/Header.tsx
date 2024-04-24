'use client';
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { Image } from "@nextui-org/image"
import React, { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "@/public/wallpaper.jpg";
import AboutCard from "@/components/AboutCard";

import anime from "animejs";

export const gradientColors = ["from-cyan-500 to-indigo-600", "from-yellow-500 to-amber-600", "from-red-500 to-rose-600", "from-teal-500 to-emerald-600"]
export const textColors = ["text-amber-600 dark:text-amber-400", "text-sky-600", "text-red-600", "text-teal-600"]
export const hoverTextColors = ["hover:text-amber-600 hover:dark:text-amber-400", "hover:text-sky-600", "hover:text-red-600", "hover:text-teal-600"]
export const bgColors = ["bg-amber-800", "bg-sky-800", "bg-red-800", "bg-teal-800"]
export const borderColors = ["border-amber-600", "border-sky-600", "border-red-600", "border-teal-600"]

const foo = <div className={`${"from-cyan-500 to-indigo-600" ||
  "from-yellow-500 to-amber-600" ||
  "text-amber-600 dark:text-amber-400" ||
  "text-sky-600" || "bg-amber-600" ||
  "bg-sky-600" ||
  "from-red-500 to-rose-600 text-red-600 bg-red-600" ||
  "from-teal-500 to-emerald-600 text-teal-600 bg-teal-600" ||
  "hover:text-amber-600 hover:dark:text-amber-400" ||
  "hover:text-sky-600" ||
  "hover:text-red-600" ||
  "hover:text-teal-600" ||
  "border-amber-600" ||
  "border-sky-600" ||
  "border-red-600" ||
  "border-teal-600"
  }`} />


export default function Header() {
    // blend backgroundImage with background color
    const [index, setIndex] = useState<number>(0)
    const [gradients] = useState(gradientColors)
    const [firstLoad, setFirstLoad] = useState(true)
    const [reducedMotion, setReducedMotion] = useState(false)

    let particles = ""
    for (var i: number = 0; i < 100; i++) {
        particles += i
    }

    let pixels = ""
    for (var i: number = 0; i < 64; i++) {
        pixels += i
    }

    let padPixels = ""
    for (var i: number = 0; i < 64; i++) {
        padPixels += i
    }


    useEffect(() => {

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setReducedMotion(true)
        } else {
            setReducedMotion(false)
        }

        particles.split("").map((_, i) => anime({
            targets: `.particle${i}`,
            keyframes: [
                { opacity: () => anime.random(10, 50) + "%", tarnslateY: 0, left: () => anime.random(-100, 2000), scale: () => anime.random(90, 150) + "%", duration: 0 },
                { delay: () => anime.random(0, 3000 + (i * 100)), translateY: () => "-120vh", duration: () => anime.random(2000, 5000), opacity: 0 }
            ],
            easing: "easeInOutSine",
            loop: true
        }))

        !reducedMotion && pixels.split("").map((_, i) => anime({
            targets: `.pixel${i}`,
            opacity: () => anime.random(0, (((i % 8) * 30) - i)) + "%",
            easing: "easeInOutSine",
            duration: () => anime.random(800, 5000),
            loop: true
        }))

        !reducedMotion && padPixels.split("").map((_, i) => anime({
            targets: `.pad-pixelb${i}`,
            opacity: () => anime.random(0, (((i % 8) * 15) - (i * 8))) + "%",
            easing: "easeInOutSine",
            duration: () => anime.random(800, 5000),
            loop: true
        }))

        !reducedMotion && padPixels.split("").map((_, i) => anime({
            targets: `.pad-pixelt${i}`,
            opacity: () => anime.random(0, (((i % 8) * 15) - ((padPixels.length - i) * 8))) + "%",
            easing: "easeInOutSine",
            duration: () => anime.random(800, 5000),
            loop: true
        }))

        const animation = anime({
            targets: ".current-gradient",
            opacity: ["100%", "0%"],
            duration: 500,
            easing: "easeInQuad",
            delay: 0,
            loop: false,
            autoplay: false
        })

        const timer = setInterval(() => {
            setFirstLoad(false)
            setIndex((i) => {
                return i === gradients.length - 1 ? 0 : i + 1
            })
            animation.play()
        }, 5000)

        return () => clearInterval(timer)
    }, [gradients.length, padPixels, particles, pixels, reducedMotion])

    return (
        <section className={`relative flex flex-col items-center justify-center h-[450px] w-full overflow-hidden ${borderColors[index]}`}
            style={{ transition: "opacity 0.5s ease-in-out" }}>
                <div>
                    <div className="text-gray-800 dark:text-gray-100">
                        Hi, I&apos;m
                    </div>
                    <p className="text-6xl font-bold text-primary-200">Tom</p>
                </div>
                <Image
                    isBlurred
                    shadow="md"
                    src="/me.jpg"
                    alt={"my logo is supposed to be here"}
                    width={150}
                    className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                    />
                <div className="text-gray-800 dark:text-gray-100 p-4 gap-1">
                    <p>
                        I am a passionate <Code color="primary" className="text-center font-bold">Fullstack Developer</Code> and <Code color="primary" className="text-center font-bold">Discord Bot Developer</Code> from <Code color="primary" className="text-center font-bold">EU/UK</Code>.
                    </p>
                </div>
                <div className="mt-7 flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-center space-x-1">
                        <p className="p-1 text-gray-800 dark:text-gray-100">
                            I am avaliable for hire,&nbsp;
                            <Link href="/contact">
                                <Code color="primary">Contact Me</Code>
                            </Link>
                            &nbsp;for more info.
                        </p>
                    </div>

                    <AboutCard />
                </div>
            {!reducedMotion && particles.split("").map((_, i) => <div className={`absolute opacity-1 rounded-full w-4 h-4 text-zinc-900 dark:text-zinc-200  dark:bg-cyan-900 bg-zinc-200 particle${i} z-[15] -bottom-6`} key={`p${i}`} />)}
        </section>
    )
}