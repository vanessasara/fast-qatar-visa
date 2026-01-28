import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import Values from "@/components/sections/Values";
import OfficeLocations from "@/components/sections/OfficeLocations";
import Team from "@/components/sections/Team";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Fast Qatar Visa Center - Your Trusted Visa Partner",
  description:
    "Learn about Fast Qatar Visa Center - your trusted partner for Qatar visa processing with 10+ years of experience, 50,000+ visas processed, and 98% success rate. Expert guidance for tourist, business, work, and family visas.",
  keywords: [
    "about Fast Qatar Visa",
    "Qatar visa company",
    "visa processing Qatar",
    "trusted visa service",
    "Qatar immigration services",
  ],
  openGraph: {
    title: "About Us | Fast Qatar Visa Center",
    description:
      "Your trusted partner for Qatar visa processing with 10+ years of experience and 98% success rate.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <Values />
      <CTASection />
      <OfficeLocations />
      <Team />
    </>
  );
}
