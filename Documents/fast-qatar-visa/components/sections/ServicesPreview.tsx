"use client";

import Image from "next/image";
import Link from "next/link";
import { Plane, Briefcase, ArrowRightLeft, Users, ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description:
      "Perfect for leisure travel, sightseeing, and exploring Qatar's world-class attractions and cultural heritage.",
    image: IMAGES.services.tourist,
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "Business Visa",
    description:
      "Ideal for conferences, meetings, and business trips. Quick processing for busy professionals.",
    image: IMAGES.services.business,
    href: "/services",
  },
  {
    icon: ArrowRightLeft,
    title: "Transit Visa",
    description:
      "For layovers and connections through Doha. Make the most of your stopover in Qatar.",
    image: IMAGES.services.transit,
    href: "/services",
  },
  {
    icon: Users,
    title: "Family Visa",
    description:
      "Bring your loved ones to Qatar. Simplified process for family reunification and visits.",
    image: IMAGES.services.family,
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Visa Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose the visa type that suits your travel needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-qatar-gold"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-qatar-maroon text-white shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-qatar-gold transition-colors hover:text-qatar-gold-600"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
