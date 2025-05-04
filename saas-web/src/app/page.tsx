import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
    return (
        <main>
            <Hero />
            <Integrations/>
            <Testimonials/>
            <Faqs/>
            <CallToAction/>
        </main>

    )
}
