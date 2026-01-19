"use client";

import { FileText, Upload, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Fill Application",
    description:
      "Complete our simple online application form with your personal and travel details.",
  },
  {
    number: 2,
    icon: Upload,
    title: "Upload Documents",
    description:
      "Upload your passport copy, photo, and any required supporting documents securely.",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Make Payment",
    description:
      "Pay securely using credit card, debit card, or bank transfer. Multiple options available.",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Receive Visa",
    description:
      "Get your approved visa delivered to your email. Print and you're ready to travel!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get your visa in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting Line (hidden on mobile, shown on lg) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-qatar-gold to-qatar-gold/30 lg:block" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-qatar-gold shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-qatar-maroon text-sm font-bold text-white shadow">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
