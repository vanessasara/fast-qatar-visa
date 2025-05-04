'use client'
import { Button } from '../app/components/Button'
import React, { useEffect, useRef, useState } from 'react'
import robotImage from '../assets/images/robot.jpg'
import Image from 'next/image'
import underlineImage from '../assets/images/underline.svg?url'
import LoadingIcon from '../assets/images/loader-animated.svg'
import { Orbit } from '../app/components/Orbit'
import Planet from '../app/components/Planet'
import SectionBorder from '../app/components/SectionBorder'
import SectionContent from '../app/components/SectionContent'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'

export const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1)
  const [innerHeight, setInnerHeight] = useState(1)
  const clientX = useMotionValue(0)
  const clientY = useMotionValue(0)
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1])
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1])


  useEffect(() => {
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)

    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      clientX.set(e.clientX)
      clientY.set(e.clientY)
    })
  })
  return { xProgress, yProgress }
}

const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [200, -200])
  const spring = useSpring(xProgress)
  const spring2 = useSpring(yProgress)
  const translateLargeX = useTransform(spring, [0, 1], ['-25%', '25%'])

  const translateLargeY = useTransform(spring2, [0, 1], ['-25%', '25%'])

  const translateMediumX = useTransform(spring, [0, 1], ['-50%', '50%'])
  const translateMediumY = useTransform(spring2, [0, 1], ['-50%', '50%'])

  const translateSmallX = useTransform(spring, [0, 1], ['-200%', '200%'])
  const translateSmallY = useTransform(spring2, [0, 1], ['-200%', '200%'])


  return (
    <section ref={ref} id="hero">
      <div className='container'>
        <SectionBorder>
          <SectionContent className='relative isolate [mask-image:linear-gradient(to_bottom,black_10%,black_90%,transparent)]'>

            <div className='absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]'></div>
            <div className='absolute -z-10 inset-0'>
              <div className='absolute-center'>
                <Orbit className='size-[350px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[350px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[600px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[850px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[1100px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[1350px]' />
              </div>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight'>Unlock the future of AI conversations with
              <span className='relative'> Sphereal
                <span className='absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]'
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                ></span>
              </span>
            </h1>
            <p className='text-center text-lg md:text-xl max-w-3xl mx-auto mt-8'>Create intelligent AI agents that can think, learn, and adapt to help automate your workflows and supercharge productivity.</p>
            <div className='flex justify-center'>
              {/* <SignedIn> */}
                <Link href="/dashboard">
                  <Button varient="secondary" className='mt-10'>
                    Start Chatting with AI

                  </Button>
                </Link>
              {/* </SignedIn> */}
              {/* <SignedOut> */}
                {/* <SignInButton
                  mode="modal"
                  fallbackRedirectUrl="/dashboard"
                  forceRedirectUrl="/dashboard"
                > */}
                  <Button varient="secondary" className='mt-10'>
                    Start Chatting with AI

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                {/* </SignInButton> */}
              {/* </SignedOut> */}
            </div>
            <div className='relative isolate max-w-5xl mx-auto'>
              <div className='absolute left-1/2 top-0'>
                <motion.div style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}>
                  <Planet size='lg' color='violet' className='-translate-x-[316px] -translate-y-[76px] rotate-135' />
                </motion.div>
                <motion.div style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}>
                  <Planet size='lg' color='violet' className='-translate-y-[150px] -translate-x-[-350px] rotate-135' />
                </motion.div>
                <motion.div style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}>
                  <Planet size='md' color='teal' className='translate-x-[488px] -translate-y-[342px] -rotate-135' />
                </motion.div>

                <motion.div style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}>
                  <Planet size='sm' color='fuchsia' className='-translate-x-[508px] -translate-y-[372px] rotate-135' />
                </motion.div>
              </div>

              <div className='absolute  left-0 z-10 top-[30%] -translate-x-10 hidden lg:block'>
                <motion.div className='bg-gray-800/70 backdrop-blur-md rounded-xl p-4 border border-gray-700 w-72' style={{
                  y: scale,

                }}>
                  <div >
                    Can you help me automate my workflow and improve productivity?
                  </div>
                  <div className='text-right text-gray-400 text-sm font-semibold'>1m ago</div>
                </motion.div>
              </div>
              <div className='absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block'>
                <motion.div className='bg-gray-800/70 backdrop-blur-md rounded-xl p-4 border border-gray-700 w-72' style={{
                  y: scale,

                }}>
                  <div>
                    <strong>Brainwave: </strong>
                    Let me help streamline your tasks by creating custom automation solutions tailored to your workflow.
                  </div>
                  <div className='text-right text-gray-400 text-sm font-semibold'>1m ago</div>
                </motion.div>
              </div>


              <div className='mt-20 rounded-2xl border-2 overflow-hidden border-transparent relative [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] '>
                <Image src={robotImage} alt="Robot Image" />
                <div className='absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-[15px]'>
                  <div className='bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full'>
                    <LoadingIcon className='text-violet-400' />
                    <div className='font-semibold text-xl text-gray-100'>
                      AI is generating <span className='animate-cursor-blink'>|</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SectionContent>
        </SectionBorder>
      </div>
    </section >
  )
}

export default Hero