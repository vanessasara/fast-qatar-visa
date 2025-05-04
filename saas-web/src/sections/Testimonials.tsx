'use client'
import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Tag from "@/components/Tag";

export const testimonials = [
    {
        quote:
            "F&D Network has been a game-changer for my family! With 12,000 national and international channels, we never run out of things to watch. The Urdu dubbed movies and Hollywood cartoons are a hit with my kids, all in stunning 4K quality.",
        name: "Hassan Malik",
    },
    {
        quote:
            "I love how affordable F&D Network is at just 300/RS! The free mobile app makes it so easy to stream Netflix, HBO Max, and YouTube TV on the go. Plus, the daily new movie releases keep my entertainment fresh.",
        name: "Ayesha Khan",
    },
    {
        quote:
            "The live sports channels on F&D Network are incredible! I can watch all Pakistani news channels and Indian sports channels without any buffering. The HD+ print quality makes every match feel like I’m there in person.",
        name: "Rahul Sharma",
    },
    {
        quote:
            "F&D Network’s IPTV service is unbeatable for the price. With 12,000 channels, including Vudu and more, I get all my favorite content in one place. ",
        name: "Sana Iqbal",
    },
];

export const Testimonials = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    return (
        <section id="testimonials" className="py-12 bg-black">
            <div className="container relative">
                <LayoutGroup>
                    <motion.div
                        layout
                        className="flex flex-col gap-12 rounded-3xl px-6 py-16 md:mx-10 md:px-10 md:flex-row lg:px-16 lg:py-16 lg:mx-20 border-2 border-transparent relative bg-black"
                        style={{
                            background: `
                                linear-gradient(#000000, #000000) padding-box,
                                conic-gradient(from 45deg, lime, #a3e635, #bef264, #d9f99d, lime) border-box
                            `,
                        }}
                    >
                        {/* Tag positioned fully above the box */}
                        <div className="absolute top-[-4rem] left-1/2 -translate-x-1/2 z-10">
                            <Tag>Testimonials</Tag>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            {testimonials.map((testimonial, index) =>
                                testimonialIndex === index ? (
                                    <motion.blockquote
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 25 }}
                                        transition={{ duration: 0.5 }}
                                        layout
                                        key={testimonial.name}
                                        className="flex flex-col lg:flex-row gap-12"
                                    >
                                        <p className="text-xl font-medium md:text-2xl text-white">
                                            {testimonial.quote}
                                        </p>
                                        <cite className="not-italic lg:text-right">
                                            <div>
                                                <div className="font-bold mt-4 text-white">
                                                    {testimonial.name}
                                                </div>
                                            </div>
                                        </cite>
                                    </motion.blockquote>
                                ) : null
                            )}
                        </AnimatePresence>
                        <motion.div className="flex gap-2 md:flex-col" layout="position">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.name}
                                    className="w-6 h-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                                    onClick={() => setTestimonialIndex(index)}
                                >
                                    {testimonialIndex === index && (
                                        <motion.div
                                            className="absolute w-full h-full rounded-full -z-10 border-2 border-transparent"
                                            style={{
                                                background: `
                                                    conic-gradient(from 45deg, lime, #a3e635, #bef264, #d9f99d, lime) border-box
                                                `,
                                            }}
                                            layoutId="testimonial-dot"
                                        />
                                    )}
                                    <div className="w-3 h-3 bg-gray-200 rounded-full" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </LayoutGroup>
            </div>
        </section>
    );
};

export default Testimonials;