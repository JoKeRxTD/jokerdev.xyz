import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import { useEffect, useState } from 'react'

interface props {
    children: React.ReactNode,
    animKey: string
    type?: 'fade-in-from-left' | 'fade-in-from-right'
    trigger?: 'infinite'
    className?: string
}

export default function Animation({ type = 'fade-in-from-left', children, className, animKey }: props) {
    const [animation, setAnimation] = useState<anime.AnimeInstance>()

    const [animeProperties, setAnimeProperties] = useState<anime.AnimeAnimParams>(
        type === 'fade-in-from-left' ? {
            translateX: ['-100px', '0px'],
            opacity: ['0%', '100%'],
            duration: 4000,
            autoplay: false,
            delay: 1000,
            loop: false,
        } : {}
    )

    useEffect(() => {
        setAnimation(
            anime({
                targets: `.${animKey}`,
                ...animeProperties
            })
        )
    }, [animKey, animeProperties])

    const [ref, inView] = useInView({
        triggerOnce: false,
        onChange: (v) => {
            if (animation) {
                if (v) {
                    animation.play()
                } else {
                    animation.pause()
                    animation.restart()
                }
            }

        }
    })

    return <div ref={ref} className={`${className ? className : ''} ${animKey}`}>
        {children}
    </div>
}