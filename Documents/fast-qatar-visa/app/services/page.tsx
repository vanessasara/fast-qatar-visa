import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesList from "@/components/sections/ServicesList";
import RequirementsChecklist from "@/components/sections/RequirementsChecklist";
import PricingTable from "@/components/sections/PricingTable";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Explore our comprehensive Qatar visa services including tourist, business, transit, family, and work visas. Fast processing and expert assistance.",
};

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesList />
      <RequirementsChecklist />
      <PricingTable />
      <CTASection />
    </Layout>
  );
}
