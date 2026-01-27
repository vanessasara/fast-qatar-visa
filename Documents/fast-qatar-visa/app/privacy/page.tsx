import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Fast Qatar Visa Center. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="bg-gradient-maroon py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-heading font-bold md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Your privacy and data security are our top priorities
            </p>
            <p className="mt-2 text-sm text-white/80">
              Last Updated: January 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Introduction */}
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-heading font-bold text-qatar-maroon">
                Introduction
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Fast Qatar Visa Center is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our visa processing services and website.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-qatar-gold" />
                <h2 className="text-2xl font-heading font-bold text-qatar-maroon">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-qatar-maroon">
                    Personal Information
                  </h3>
                  <ul className="ml-6 space-y-2 text-muted-foreground">
                    <li className="list-disc">Full name, date of birth, and nationality</li>
                    <li className="list-disc">Passport details (number, issue/expiry dates)</li>
                    <li className="list-disc">Contact information (email, phone number, address)</li>
                    <li className="list-disc">Employment and educational information</li>
                    <li className="list-disc">Travel itinerary and accommodation details</li>
                    <li className="list-disc">Payment information (processed securely)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-qatar-maroon">
                    Automatically Collected Information
                  </h3>
                  <ul className="ml-6 space-y-2 text-muted-foreground">
                    <li className="list-disc">IP address and browser information</li>
                    <li className="list-disc">Device type and operating system</li>
                    <li className="list-disc">Pages visited and time spent on our website</li>
                    <li className="list-disc">Referral source and exit pages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-xl bg-gradient-to-br from-qatar-maroon to-qatar-maroon-800 p-8 text-white shadow-xl">
              <h2 className="mb-6 text-2xl font-heading font-bold">
                Contact Us About Privacy
              </h2>

              <p className="mb-6 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:privacy@fastqatarvisa.com" className="hover:text-qatar-gold transition-colors">
                    privacy@fastqatarvisa.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+97412345678" className="hover:text-qatar-gold transition-colors">
                    +974 12345678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
