"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { IMAGES } from "@/lib/images";

const quickContacts = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+974 12345678",
    href: "tel:+97412345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fastqatarvisa.com",
    href: "mailto:info@fastqatarvisa.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Now",
    href: "https://wa.me/97412345678",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7 Support",
    href: null,
  },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.contact.customerService}
          alt="Professional customer support team ready to assist"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-qatar-maroon/95 via-qatar-maroon/85 to-qatar-maroon/70" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[50vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-qatar-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-qatar-gold">Contact</span>
        </nav>

        {/* Title */}
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-qatar-gold">
          We&apos;re Here to Help
        </span>
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Get in Touch
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Our expert team is ready to assist with your visa queries 24/7. Whether you need
          help with applications, documents, or have questions about our services, we&apos;re
          just a call or message away.
        </p>

        {/* Quick Contact Options */}
        <div className="mt-10 flex flex-wrap gap-4">
          {quickContacts.map((contact) => (
            contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-qatar-gold"
              >
                <contact.icon className="h-5 w-5 text-qatar-gold" />
                <div>
                  <span className="text-xs text-white/70">{contact.label}</span>
                  <p className="text-sm font-semibold text-white">{contact.value}</p>
                </div>
              </a>
            ) : (
              <div
                key={contact.label}
                className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm"
              >
                <contact.icon className="h-5 w-5 text-qatar-gold" />
                <div>
                  <span className="text-xs text-white/70">{contact.label}</span>
                  <p className="text-sm font-semibold text-white">{contact.value}</p>
                </div>
              </div>
            )
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
            className="fill-muted"
          />
        </svg>
      </div>
    </section>
  );
}
