import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fast Qatar Visa Center. Our team is available 24/7 to help with your Qatar visa questions. Email, phone, or WhatsApp support.",
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />

      {/* Contact Form and Info Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            id="contact-form"
            className="grid grid-cols-1 gap-8 lg:grid-cols-5"
          >
            {/* Contact Form - 60% */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info - 40% */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </Layout>
  );
}
