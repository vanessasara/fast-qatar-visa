"use client";

import {
  Shield,
  Zap,
  Eye,
  Award,
  Heart,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description:
      "We handle your personal information with the utmost care and confidentiality. Your trust is our foundation.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Time is valuable. We process applications quickly without compromising on accuracy or attention to detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We keep you informed at every step of your visa application journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in everything we do, from customer service to document processing.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to ensure a positive experience.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We operate with honesty and ethical standards, building long-term relationships based on mutual respect.",
  },
];

export default function Values() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-qatar-gold hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-qatar-maroon/10 text-qatar-maroon transition-colors group-hover:bg-qatar-maroon group-hover:text-white">
                <value.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
