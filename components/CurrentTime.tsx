import { useCallback, useEffect, useState } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState<string>("00:00:00 p.m."),
        [awake, setAwake] = useState<boolean>(true);

    const updateTime = useCallback(() => {
        const current = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });

        setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M`);
        setTimeout(updateTime, 60 * 1000);

        if (new Date().getHours() < 7) setAwake(false);
    }, []);

    useEffect(() => {
        updateTime();
    }, [updateTime]);

    return (
        <div className="flex items-center justify-center">
            
        <p className="text-black/80 dark:text-white/50 text-sm mb-6 mt-6 text-center">
            It&apos;s currently <span className="font-semibold text-black dark:text-white">{time}</span> for me, so I&apos;m
            probably{" "}
            <span className="font-semibold text-black dark:text-white">{awake ? "awake" : "sleeping"}</span>. I&apos;ll
            get back to you soon.
        </p>
        </div>
    );
};

export default TimeStatus;