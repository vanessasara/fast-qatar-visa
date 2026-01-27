import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Contact Us | Fast Qatar Visa Center - 24/7 Expert Support",
  description:
    "Get in touch with Fast Qatar Visa Center. Our expert team is available 24/7 via phone (+974 12345678), email, or WhatsApp. Office: Al Matar Street, Doha, Qatar.",
  keywords: [
    "contact Fast Qatar Visa",
    "Qatar visa support",
    "visa help Qatar",
    "Qatar visa phone number",
    "visa consultation Qatar",
  ],
  openGraph: {
    title: "Contact Us | Fast Qatar Visa Center",
    description:
      "Expert visa support available 24/7. Call +974 12345678 or visit our office in Doha.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Contact Form and Info Section */}
      <section className="bg-muted py-16 md:py-24">
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
    </>
  );
}
