"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Briefcase,
  ArrowRightLeft,
  Users,
  ArrowRight,
  IdCard,
  Laptop,
  Clock,
} from "lucide-react";
import { IMAGES } from "@/lib/images";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ui/scroll-animation";

const services = [
  {
    icon: Camera,
    title: "Tourist Visa",
    description: "Explore Qatar's rich culture and modern attractions",
    processing: "2-3 days",
    image: IMAGES.services.tourist,
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "Business Visa",
    description: "Attend conferences, meetings, and business opportunities",
    processing: "24-48 hours",
    image: IMAGES.services.business,
    href: "/services",
  },
  {
    icon: ArrowRightLeft,
    title: "Transit Visa",
    description: "Smooth layovers and connections through Doha",
    processing: "12-24 hours",
    image: IMAGES.services.transit,
    href: "/services",
  },
  {
    icon: Users,
    title: "Family Visa",
    description: "Bring your loved ones to Qatar",
    processing: "3-5 days",
    image: IMAGES.services.family,
    href: "/services",
  },
  {
    icon: IdCard,
    title: "Work Visas",
    description: "Employment visas for various job categories",
    badge: "Multiple Options",
    image: IMAGES.work.workPermit,
    href: "/services/work",
    highlight: true,
  },
  {
    icon: Laptop,
    title: "Freelance Visa",
    description: "Independent professional work permits",
    processing: "5-7 days",
    badge: "New",
    image: IMAGES.work.freelance,
    href: "/services/work/freelance",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Our Visa Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive visa solutions for every travel need
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Link href={service.href} className="block h-full">
                <div
                  className={`group relative h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    service.highlight
                      ? "ring-2 ring-qatar-gold hover:ring-qatar-gold"
                      : "hover:ring-2 hover:ring-qatar-gold"
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {service.highlight && (
                        <Badge className="bg-qatar-gold text-white border-0">
                          Popular
                        </Badge>
                      )}
                      {service.badge && (
                        <Badge className="bg-qatar-maroon text-white border-0">
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-qatar-maroon shadow-lg">
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

                    {/* Processing Time */}
                    {service.processing && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 text-qatar-gold" />
                        <span>Processing: {service.processing}</span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-qatar-gold transition-colors group-hover:text-qatar-gold-600">
                      {service.highlight ? "Explore Work Visas" : "Learn More"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-qatar-maroon px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-qatar-maroon-800 hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
