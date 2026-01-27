"use client";

import { FileCheck, Upload, CreditCard, Mail } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const steps = [
  {
    number: 1,
    icon: FileCheck,
    title: "Choose Visa Type",
    description:
      "Select the visa category that matches your travel purpose",
  },
  {
    number: 2,
    icon: Upload,
    title: "Submit Documents",
    description:
      "Upload required documents through our secure portal",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Make Payment",
    description:
      "Pay securely with multiple payment options",
  },
  {
    number: 4,
    icon: Mail,
    title: "Receive Visa",
    description:
      "Get your approved visa delivered to your email",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Simple 4-Step Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get your Qatar visa in just a few easy steps
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps - Desktop Timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-qatar-gold via-qatar-gold to-qatar-gold/50 rounded-full" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <ScrollAnimation
                  key={step.number}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step Circle */}
                    <div className="relative z-10">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background border-4 border-qatar-gold shadow-lg">
                        <step.icon className="h-10 w-10 text-qatar-maroon" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-qatar-gold text-lg font-bold text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile/Tablet Vertical */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-qatar-gold/30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollAnimation
                  key={step.number}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="relative flex gap-6">
                    {/* Step Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-qatar-gold text-white shadow-lg">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-qatar-gold">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
