'use client'
import logoImage from '@/assets/images/logo.png'
import Button from '@/components/Button';
import Image from "next/image";
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion'


const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Integrations", href: "#integrations" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    return (
        <>
            <section className='py-4 lg:py-8 w-full fixed top-0 z-50'>
                <div className="container max-w-5xl">
                    <div className='border border-white/15 rounded-[27px] bg-neutral-950/70 md:rounded-full blackdrop-blur '>

                        <div className="grid grid-cols-2 p-2 px-4 md:pr-2 lg:grid-cols-3 items-center ">

                            <div className="flex items-center gap-2">
                                <Image src={logoImage} alt="layers Logo" className="h-9 w-auto md:w-auto" />
                                <span className="text-gray-300 text-lg md:text-xl font-bold">IPTV SERVICE </span>
                            </div>

                            <div className='lg:flex justify-center items-center hidden'>
                                <nav className='flex gap-6 font-medium'>
                                    {navLinks.map(link => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="text-gray-300 hover:text-white transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.querySelector(link.href);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className='flex justify-end gap-4'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setisOpen(!isOpen)}
                                >
                                    <g className="transition-all duration-300">
                                        <line
                                            x1="4"
                                            y1="6"
                                            x2="20"
                                            y2="6"
                                            className={twMerge(
                                                "transition-all duration-300 origin-center",
                                                isOpen && "rotate-45 translate-y-[6px]"
                                            )}
                                        />
                                        <line
                                            x1="4"
                                            y1="12"
                                            x2="20"
                                            y2="12"
                                            className={twMerge(
                                                "transition-all duration-300 origin-center",
                                                isOpen && "opacity-0"
                                            )}
                                        />
                                        <line
                                            x1="4"
                                            y1="18"
                                            x2="20"
                                            y2="18"
                                            className={twMerge(
                                                "transition-all duration-300 origin-center",
                                                isOpen && "-rotate-45 -translate-y-[6px]"
                                            )}
                                        />
                                    </g>
                                </svg>


                                <Button variant='secondary' className='hidden md:inline-flex items-center'>Log In</Button>
                                <Button variant='primary' className='hidden md:inline-flex items-center'>Sign Up</Button>
                            </div>
                        </div>
                        <AnimatePresence>

                            {isOpen && (


                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className=' overflow-hidden'>
                                    <div className='flex flex-col items-center gap-4 py-4'>

                                        {navLinks.map(link => (
                                            <a href={link.href} key={link.label} className='py-2'>{link.label}</a>
                                        ))}
                                        <Button variant={'secondary'}>Log in</Button>
                                        <Button variant={'primary'}>Sign Up</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className='pb-[86px] md:pb-[98px] lg:pb-[136px]'>

            </div>
        </>
    );
}
