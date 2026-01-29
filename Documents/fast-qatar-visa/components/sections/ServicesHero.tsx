import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function ServicesHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.services.passport}
          alt="Visa Services"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-qatar-maroon/90 to-qatar-maroon/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-white font-medium">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
          <span className="text-qatar-gold font-medium">Services</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Our Visa Services
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Comprehensive visa solutions for all your Qatar travel needs. From
          tourist visas to business permits, we handle it all with expertise and
          care.
        </p>
      </div>
    </section>
  );
}
