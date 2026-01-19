"use client";

import Image from "next/image";
import { Calendar, Users, Award, Globe } from "lucide-react";
import { IMAGES } from "@/lib/images";

const stats = [
  {
    icon: Calendar,
    value: "5+",
    label: "Years in Business",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Visas Processed",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
  },
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.about.collaboration}
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-qatar-gold/20" />
          </div>

          {/* Content */}
          <div>
            {/* Label */}
            <span className="text-sm font-semibold uppercase tracking-wider text-qatar-gold">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Trusted Partner for Qatar Visa Services
            </h2>

            {/* Story Paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Fast Qatar Visa Center was founded in 2019 with a simple
                mission: to make Qatar visa processing accessible, transparent,
                and hassle-free for travelers around the world. What started as
                a small team of visa experts has grown into a trusted name in
                the industry.
              </p>
              <p className="leading-relaxed">
                Over the years, we&apos;ve helped thousands of tourists, business
                professionals, and families obtain their Qatar visas quickly and
                efficiently. Our deep understanding of Qatar&apos;s immigration
                requirements, combined with our commitment to customer service,
                sets us apart from the competition.
              </p>
              <p className="leading-relaxed">
                We believe that travel should be exciting, not stressful. That&apos;s
                why we&apos;ve streamlined the visa application process, invested in
                secure technology, and built a team of dedicated professionals
                who are available 24/7 to assist you.
              </p>
              <p className="leading-relaxed">
                Looking ahead, we&apos;re committed to expanding our services,
                embracing new technologies, and continuing to exceed the
                expectations of every traveler who trusts us with their visa
                needs.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-qatar-maroon/10">
                    <stat.icon className="h-6 w-6 text-qatar-maroon" />
                  </div>
                  <div className="text-2xl font-bold text-qatar-maroon">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
