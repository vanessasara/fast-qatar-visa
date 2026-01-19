"use client";

import Link from "next/link";
import { Check, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    id: "standard",
    name: "Standard",
    processingTime: "2-3 Business Days",
    price: 75,
    description: "Perfect for travelers who can plan ahead",
    features: [
      "Tourist visa processing",
      "Document verification",
      "Email support",
      "Visa tracking",
      "PDF visa delivery",
    ],
    popular: false,
  },
  {
    id: "express",
    name: "Express",
    processingTime: "24 Hours",
    price: 125,
    description: "For travelers who need their visa quickly",
    features: [
      "All Standard features",
      "Priority processing",
      "24/7 phone support",
      "SMS notifications",
      "Dedicated agent",
      "Free document review",
    ],
    popular: true,
  },
  {
    id: "super-express",
    name: "Super Express",
    processingTime: "Same Day",
    price: 199,
    description: "Urgent visa processing when time is critical",
    features: [
      "All Express features",
      "Same-day processing",
      "VIP support line",
      "WhatsApp support",
      "Application fast-track",
      "Free consultation",
      "Money-back guarantee",
    ],
    popular: false,
  },
];

export default function PricingTable() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pricing & Processing Time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose the processing speed that suits your travel timeline
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-2xl border-2 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl",
                tier.popular
                  ? "border-qatar-gold ring-2 ring-qatar-gold"
                  : "border-gray-200 hover:border-qatar-gold/50"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-qatar-gold px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    <Star className="h-4 w-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Processing Time Badge */}
              <div className="mb-4 flex items-center gap-2">
                <Clock
                  className={cn(
                    "h-5 w-5",
                    tier.popular ? "text-qatar-gold" : "text-green-500"
                  )}
                />
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-sm font-medium",
                    tier.popular
                      ? "bg-qatar-gold/10 text-qatar-gold-700"
                      : "bg-green-50 text-green-700"
                  )}
                >
                  {tier.processingTime}
                </span>
              </div>

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${tier.price}
                </span>
                <span className="text-gray-500"> / application</span>
              </div>

              {/* Features */}
              <ul className="mt-8 flex-1 space-y-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 flex-shrink-0",
                        tier.popular ? "text-qatar-gold" : "text-green-500"
                      )}
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={cn(
                    "block w-full rounded-lg py-3 text-center font-semibold transition-all",
                    tier.popular
                      ? "bg-qatar-gold text-white hover:bg-qatar-gold-500 shadow-lg hover:shadow-xl"
                      : "bg-qatar-maroon text-white hover:bg-qatar-maroon-800"
                  )}
                >
                  Select {tier.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All prices are for tourist visa applications. Business and other
            visa types may vary.{" "}
            <Link href="/contact" className="text-qatar-maroon hover:underline">
              Contact us
            </Link>{" "}
            for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
}
