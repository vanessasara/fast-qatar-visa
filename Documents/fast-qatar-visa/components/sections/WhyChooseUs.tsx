"use client";

import {
  Zap,
  Shield,
  Headphones,
  UserCheck,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Get your visa approved in as little as 24 hours with our express service. No more waiting weeks.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description:
      "Bank-level encryption protects all your personal and payment information. Your data is safe with us.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our expert team is available round the clock to assist you anytime, anywhere in the world.",
  },
  {
    icon: UserCheck,
    title: "Expert Assistance",
    description:
      "Dedicated visa specialists guide you through every step of the process for a smooth experience.",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description:
      "98% approval rate with thousands of satisfied customers worldwide. Your visa is in good hands.",
  },
  {
    icon: BadgeDollarSign,
    title: "Money-Back Guarantee",
    description:
      "Full refund if your visa application is rejected. Apply with confidence, risk-free service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Fast Qatar Visa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Your trusted partner for Qatar visa processing
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-qatar-gold hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-qatar-maroon/10 text-qatar-maroon transition-colors group-hover:bg-qatar-maroon group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
