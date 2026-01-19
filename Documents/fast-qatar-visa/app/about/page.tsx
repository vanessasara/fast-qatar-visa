import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import Values from "@/components/sections/Values";
import Team from "@/components/sections/Team";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fast Qatar Visa Center - your trusted partner for Qatar visa processing. Over 5 years of experience and 10,000+ visas processed.",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <CompanyStory />
      <Values />
      <Team />
      <CTASection />
    </Layout>
  );
}
