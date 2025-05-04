import CallToAction from "../sections/CallToAction";
import Companies from "../sections/Companies";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Companies />
      <Testimonials />
      <CallToAction />
    </>
  )
}
