"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function ContactHero() {
  return (
    <section className="relative h-[35vh] min-h-[280px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.contact.customerService}
          alt="Customer Support"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-qatar-maroon/90 to-qatar-maroon/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-qatar-gold">Contact</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Get In Touch
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Have questions? Our team is ready to assist you 24/7. We&apos;re here to
          help with all your Qatar visa inquiries.
        </p>
      </div>
    </section>
  );
}
