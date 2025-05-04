'use client'

import { Button, ButtonProps } from '../app/components/Button'
import Logo from '../app/components/Logo';
import { Orbit } from '../app/components/Orbit';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';


export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps['varient']
}[];


export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container mx-auto px-4">
          <div className="h-18 lg:h-20 flex justify-between items-center ">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="font-extrabold text-2xl">Sphereal.ai</div>
            </div>
            <div className='h-full hidden lg:block'>
              <nav className='h-full'>
                {navItems.map((item) => (
                  <a href={item.href} key={item.href} className='h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-[""] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:content-[""] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0'
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >{item.name}</a>
                ))}
              </nav>
            </div>
            <div className='hidden lg:flex gap-4'>
              {loginItems.map((item) => (
                <a href={item.href} key={item.name}>
                  <Button varient={item.buttonVariant}>{item.name}</Button>
                </a>
              ))}
            </div>
            <div className='flex items-center lg:hidden '>
              <button className='size-10 rounded-lg border-gradient' onClick={() => setIsMobileNavOpen((current) => !current)}>

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className={twMerge('w-4 h-0.5 bg-gray-100 translate-y-1 transition-all duration-300', isMobileNavOpen && 'translate-y-0 rotate-45')}></div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className={twMerge('w-4 h-0.5 bg-gray-100 -translate-y-1 transition-all duration-300', isMobileNavOpen && 'translate-y-0 -rotate-45')}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* mobile nav */}
      {isMobileNavOpen && (
        <div className='fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden'>
          <div className='absolute-center'>
            <Orbit className="" />
          </div>
          <div className='absolute-center'>
            <Orbit className="size-[350px]" />
          </div>
          <div className='absolute-center'>
            <Orbit className="size-[500px]" />
          </div>
          <div className='absolute-center'>
            <Orbit className="size-[650px]" />
          </div>
          <div className='absolute-center'>
            <Orbit className="size-[800px]" />
          </div>
          <div className='container h-full '>
            <nav className='flex flex-col items-center gap-4 py-8 justify-center'>
              {navItems.map((item) => (
                <a href={item.href} key={item.href} className='text-gray-400 uppercase tracking-widest font-bold text-xs h-10'>{item.name}</a>
              ))}
              {loginItems.map((item) => (
                <a href={item.href} key={item.name} className='w-full max-w-xs'>
                  <Button block varient={item.buttonVariant}>{item.name}</Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

