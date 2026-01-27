"use client";

import {
  Shield,
  Zap,
  Award,
  HeadphonesIcon,
  Lock,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We operate with complete honesty and ethical standards. Every interaction is guided by transparency, building long-term relationships based on mutual respect and trust.",
    color: "bg-blue-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest quality standards in everything we do. From document processing to customer service, we strive for perfection in every detail.",
    color: "bg-amber-500",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Time is valuable. Our streamlined processes ensure fast and efficient visa processing without compromising on accuracy or attention to detail.",
    color: "bg-green-500",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock to assist you. Whether it's a question or urgent matter, expert help is always just a call away.",
    color: "bg-purple-500",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Your data protection and privacy are paramount. We use bank-level encryption and secure processes to safeguard all your personal information.",
    color: "bg-red-500",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "We've earned the trust of thousands of clients worldwide. Our proven track record and government authorization reflect our commitment to reliable service.",
    color: "bg-teal-500",
  },
];

export default function Values() {
  return (
    <section className="bg-gradient-to-b from-muted to-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-qatar-maroon/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-qatar-maroon">
            <span className="h-1.5 w-1.5 rounded-full bg-qatar-maroon" />
            What We Stand For
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The principles that guide everything we do and define who we are as a company
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative top accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-qatar-maroon to-qatar-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-qatar-maroon/10 text-qatar-maroon transition-all duration-300 group-hover:bg-qatar-maroon group-hover:text-white group-hover:shadow-lg">
                <value.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {value.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-qatar-gold/5 transition-transform duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            These values are at the heart of every visa application we process
          </p>
        </div>
      </div>
    </section>
  );
}
