"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.about.team}
          alt="Our Professional Team"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-qatar-gold">About</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          About Fast Qatar Visa Center
        </h1>

        {/* Mission Statement */}
        <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          We&apos;re committed to making Qatar visa processing simple, fast, and
          stress-free for travelers worldwide. Your journey begins with us.
        </p>
      </div>
    </section>
  );
}
