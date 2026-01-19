"use client";

import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

export default function TrackHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-qatar-maroon">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-qatar-maroon">Track Application</span>
        </nav>

        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-qatar-maroon/10">
            <Search className="h-8 w-8 text-qatar-maroon" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Track Your Application
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Enter your reference number to check your visa application status in
            real-time. Stay updated on every step of the process.
          </p>
        </div>
      </div>
    </section>
  );
}
