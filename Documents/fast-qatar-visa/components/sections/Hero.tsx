"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, TrendingUp, Headphones, BadgeCheck } from "lucide-react";
import { IMAGES } from "@/lib/images";

const trustBadges = [
  {
    icon: Award,
    text: "10+ Years Experience",
  },
  {
    icon: TrendingUp,
    text: "98% Success Rate",
  },
  {
    icon: Headphones,
    text: "24/7 Expert Support",
  },
  {
    icon: BadgeCheck,
    text: "Government Approved",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] h-[calc(100vh-120px)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.dohaSkylline}
          alt="Doha Qatar Skyline"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-12">
          {/* Main Heading */}
          <h1 className="animate-fade-in text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Fast & Reliable{" "}
            <span className="text-qatar-gold">Qatar Visa</span>{" "}
            Processing
          </h1>

          {/* Subtitle */}
          <p className="mt-6 animate-fade-in-up text-lg leading-relaxed text-gray-200 opacity-0 animation-delay-200 sm:text-xl md:text-2xl">
            Get your Qatar visa approved in 24-48 hours with our expert assistance.
            Serving travelers worldwide for over 10 years.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex animate-fade-in-up flex-col gap-4 opacity-0 animation-delay-300 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-qatar-maroon px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-qatar-maroon-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-qatar-maroon focus:ring-offset-2"
            >
              Apply for Visa Now
            </Link>
            <Link
              href="/track"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-qatar-maroon focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Track Application
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex animate-fade-in-up flex-wrap gap-6 opacity-0 animation-delay-400">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-white"
              >
                <badge.icon className="h-5 w-5 text-qatar-gold" />
                <span className="text-sm font-medium sm:text-base">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
