import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, Clock, Users, Globe } from "lucide-react";
import { IMAGES } from "@/lib/images";

const highlights = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Users, label: "Expert Team" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Globe, label: "150+ Countries" },
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.about.collaboration}
          alt="Professional team collaborating on visa services"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-qatar-maroon/90 via-black/70 to-black/60" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[60vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-qatar-gold font-medium">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
          <span className="font-medium text-qatar-gold">About Us</span>
        </nav>

        {/* Title with decorative element */}
        <div className="relative">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-qatar-gold">
            Your Trusted Visa Partner
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Fast Qatar Visa Center
          </h1>
        </div>

        {/* Mission Statement */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
          With over a decade of experience in Qatar visa processing, we&apos;ve helped
          thousands of travelers, workers, and families achieve their Qatar dreams.
          Our mission is to make visa processing simple, transparent, and successful.
        </p>

        {/* Highlight badges */}
        <div className="mt-10 flex flex-wrap gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <item.icon className="h-5 w-5 text-qatar-gold" />
              <span className="text-sm font-medium text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
