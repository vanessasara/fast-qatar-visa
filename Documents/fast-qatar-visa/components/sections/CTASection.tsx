"use client";

import Link from "next/link";
import { Shield, Headphones, BadgeCheck } from "lucide-react";

const trustIndicators = [
  {
    icon: Shield,
    text: "Secure Payment",
  },
  {
    icon: Headphones,
    text: "24/7 Support",
  },
  {
    icon: BadgeCheck,
    text: "Money-Back Guarantee",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-qatar-maroon via-qatar-maroon-800 to-qatar-maroon-900 py-16 md:py-24">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to Apply for Your Qatar Visa?
        </h2>

        {/* Supporting Text */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Join thousands of travelers who trust us for their Qatar visa needs.
          Start your application today and get approved in as little as 24
          hours!
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-semibold text-qatar-maroon shadow-lg transition-all hover:bg-qatar-gold hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-qatar-maroon"
          >
            Start Your Application
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.text}
              className="flex items-center gap-2 text-white/80"
            >
              <indicator.icon className="h-5 w-5 text-qatar-gold" />
              <span className="text-sm font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
