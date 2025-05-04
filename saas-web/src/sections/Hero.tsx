'use client'
import designExample1Image from '@/assets/images/design-example-1.jpg'
import designExample2Image from '@/assets/images/design-example-2.jpg'
import Image from "next/image";
import { Pointer } from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from '@/assets/images/cursor-you.svg'

export default function Hero() {
    const [leftDesignscope, leftDesignanimate] = useAnimate()
    const [leftPointerscope, leftPointeranimate] = useAnimate()
    const [rightDesignscope, rightDesignanimate] = useAnimate()
    const [rightPointerscope, rightPointeranimate] = useAnimate()

    useEffect(() => {
        // Left side animations (unchanged)
        leftDesignanimate([
            [leftDesignscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ])
        leftPointeranimate([
            [leftPointerscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerscope.current, { x: 0, y: [0, 16] }, { duration: 0.5, ease: 'easeInOut' }]
        ])

        // Right side animations (modified: image pulled first, then pointer moves away)
        rightDesignanimate([
            [rightDesignscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }], // Image fades in
            [rightDesignscope.current, { x: 50, y: 0 }, { duration: 0.5, ease: 'easeOut' }], // Image pulled slightly
            [rightDesignscope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }] // Final position with bounce
        ])
        rightPointeranimate([
            [rightPointerscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }], // Pointer fades in
            [rightPointerscope.current, { x: 225, y: 0 }, { duration: 0.5, ease: 'easeOut' }], // Pointer pulls image
            [rightPointerscope.current, { x: 175, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }] // Pointer moves away
        ])
    }, [leftDesignanimate, leftPointeranimate, rightDesignanimate, rightPointeranimate])

    return (
        <section id="hero"
            className="py-24 overflow-clip"
            style={{
                cursor: `url(${cursorYouImage.src}),auto`
            }}
        >
            <div className="container relative">
                <motion.div 
                    ref={leftDesignscope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className='absolute -left-32 top-32 hidden lg:block'
                >
                    <Image 
                        src={designExample1Image} 
                        width={380} 
                        height={400}
                        draggable='false'
                        alt="design example 1 image" 
                    />
                </motion.div>
                <motion.div 
                    ref={leftPointerscope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-64 hidden lg:block"
                >
                    <Pointer name='Andrea' />
                </motion.div>
                <motion.div
                    ref={rightDesignscope}
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    drag
                    className="absolute -right-40 -top-18 hidden lg:block"
                >
                    <Image 
                        src={designExample2Image} 
                        alt="design example 2 image"
                        draggable='false'
                        width={350} 
                        height={400} 
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerscope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 top-16 hidden lg:block"
                >
                    <Pointer name="Bryan" color='red' />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ Premium TV Subscriptions
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
                    All Your Favorite Streaming Services in One Plan
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Enjoy unlimited access to Hulu, HBO Max, Netflix, Vimeo, YouTube TV, and Vudu.
                    Stream your favorite movies, TV shows, and exclusive content effortlessly.
                </p>
            </div>
        </section>
    );
}