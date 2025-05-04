'use client'
import SectionBorder from "../app/components/SectionBorder";
import SectionContent from "../app/components/SectionContent";
import { Button } from "../app/components/Button";
import underlineImage from "../assets/images/underline.svg?url";
import { Orbit } from "../app/components/Orbit";    
import Planet from "../app/components/Planet";
import { useMousePosition } from "./Hero";
import { useSpring, useTransform,motion } from "framer-motion";

const CallToAction = () => {
  const {xProgress, yProgress} = useMousePosition();
  
  const spring = useSpring(xProgress)
  const spring2 = useSpring(yProgress)
  const translateLargeX = useTransform(spring, [0, 1], ['-25%', '25%'])

  const translateLargeY = useTransform(spring2, [0, 1], ['-25%', '25%'])

const translateMediumX = useTransform(spring, [0, 1], ['-50%', '50%'])
const translateMediumY = useTransform(spring2, [0, 1], ['-50%', '50%'])

const translateSmallX = useTransform(spring, [0, 1], ['-200%', '200%'])
const translateSmallY = useTransform(spring2, [0, 1], ['-200%', '200%'])

  return (
    <section >
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute -z-10  inset-0 bg-[radial-gradient(circle_farthest-side,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />

            <div className="absolute -z-10 inset-0">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
              
              <div className="absolute-center -z-10">
                <motion.div style={{translateX: translateLargeX, translateY: translateLargeY}}>
                <Planet size="lg" color="violet" className="-translate-y-[150px] -translate-x-[-150px] -rotate-45"/>
                </motion.div>
                <motion.div style={{translateX: translateLargeX, translateY: translateLargeY}}>
                <Planet size="lg" color="fuchsia" className="translate-y-[200px] -translate-x-[200px] rotate-45"/>
                </motion.div>
                <motion.div style={{translateX: translateMediumX, translateY: translateMediumY}}>
                <Planet size="md" color="teal" className="-translate-y-[50px] translate-x-[500px] -rotate-135"/>
                </motion.div>
                <motion.div style={{translateX: translateSmallX, translateY: translateSmallY}}>
                <Planet size="sm" color="fuchsia" className="translate-y-[-250px] translate-x-[-300px] rotate-30"/>
                <Planet size="md" color="teal" className="-translate-y-[150px] -translate-x-[480px] -rotate-60"/>
                </motion.div>
                <motion.div style={{translateX: translateSmallX, translateY: translateSmallY}}>
                <Planet size="md" color="fuchsia" className="translate-y-[100px] translate-x-[300px] rotate-45"/>
                </motion.div>
              </div>

            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
              Join the AI Revolution with{" "}
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
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the power of AI with Sphereal. Our platform is designed to help you achieve your goals faster and smarter.
            </p>
            <div className="flex justify-center mt-10">
              <Button varient="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
}

export default CallToAction
