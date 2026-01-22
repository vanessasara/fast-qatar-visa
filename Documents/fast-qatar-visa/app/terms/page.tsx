import { Metadata } from "next";
import { FileText, Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Fast Qatar Visa Center. Read our terms and conditions before using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-maroon py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Scale className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-heading font-bold md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-lg text-white/90">
              Please read these terms carefully before using our services
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
            {/* Agreement */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-heading font-bold text-qatar-maroon">
                Agreement to Terms
              </h2>
              <p className="leading-relaxed text-gray-700">
                By accessing or using Fast Qatar Visa Center services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-qatar-gold" />
                <h2 className="text-2xl font-heading font-bold text-qatar-maroon">
                  Our Services
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>Fast Qatar Visa Center provides visa processing and consultation services including:</p>
                <ul className="ml-6 space-y-2">
                  <li className="list-disc">Tourist visa processing</li>
                  <li className="list-disc">Business visa applications</li>
                  <li className="list-disc">Work visa services</li>
                  <li className="list-disc">Family visa assistance</li>
                  <li className="list-disc">Transit visa processing</li>
                  <li className="list-disc">Document verification and attestation</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-heading font-bold text-qatar-maroon">
                User Responsibilities
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700">When using our services, you agree to:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-gold" />
                    <span>Provide accurate, complete, and truthful information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-gold" />
                    <span>Submit all required documents in a timely manner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-gold" />
                    <span>Make payments as agreed upon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-gold" />
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-gold" />
                    <span>Not misuse or attempt to manipulate our services</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-heading font-bold text-qatar-maroon">
                Payment Terms
              </h2>

              <div className="space-y-4 text-gray-700">
                <p><strong>Service Fees:</strong> All service fees are clearly stated before processing begins. Fees include government charges and our service fees unless otherwise specified.</p>
                <p><strong>Payment Schedule:</strong> Payment terms will be communicated at the time of application. Typically, 50% is required upfront with the balance due before visa issuance.</p>
                <p><strong>Accepted Methods:</strong> We accept credit cards, debit cards, bank transfers, and online payment gateways.</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-heading font-bold text-qatar-maroon">
                Refund Policy
              </h2>

              <div className="space-y-4 text-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-maroon" />
                    <span><strong>Service Fees:</strong> Refundable if your visa application is rejected by Qatar authorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-maroon" />
                    <span><strong>Government Fees:</strong> Non-refundable as they are paid directly to government agencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-maroon" />
                    <span><strong>Processing Time:</strong> Refunds are processed within 7-10 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-qatar-maroon" />
                    <span><strong>Cancellations:</strong> Full refund if cancelled before application submission</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl bg-qatar-gold/10 p-6 border-l-4 border-qatar-gold">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 flex-shrink-0 text-qatar-gold" />
                <div>
                  <h3 className="mb-2 font-semibold text-qatar-maroon">Important Disclaimer</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Fast Qatar Visa Center is an independent visa processing service. We are not affiliated with or endorsed by the government of Qatar. While we maintain a high success rate, we cannot guarantee visa approval as final decisions rest with Qatar immigration authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-xl bg-gradient-to-br from-qatar-maroon to-qatar-maroon-800 p-8 text-white shadow-xl">
              <h2 className="mb-6 text-2xl font-heading font-bold">
                Questions About Terms?
              </h2>

              <p className="mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:legal@fastqatarvisa.com" className="hover:text-qatar-gold transition-colors">
                    legal@fastqatarvisa.com
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
