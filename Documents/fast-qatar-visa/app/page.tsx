import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import WorkVisaCategories from "@/components/sections/WorkVisaCategories";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <WorkVisaCategories />
      <Statistics />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}
