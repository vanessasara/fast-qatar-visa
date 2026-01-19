"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@fastqatarvisa.com",
    href: "mailto:info@fastqatarvisa.com",
    description: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+974 1234 5678",
    href: "tel:+97412345678",
    description: "Mon-Sun, 24/7",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+974 1234 5678",
    href: "https://wa.me/97412345678",
    description: "Quick responses",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24/7 Available",
    href: null,
    description: "Always here to help",
  },
  {
    icon: MapPin,
    label: "Office Location",
    value: "Doha, Qatar",
    href: null,
    description: "West Bay Area",
  },
];

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
      <p className="mt-2 text-gray-600">
        Reach us directly through any of these channels.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-qatar-maroon/10">
              <detail.icon className="h-6 w-6 text-qatar-maroon" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-lg font-semibold text-gray-900 transition-colors hover:text-qatar-maroon"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-gray-900">
                  {detail.value}
                </p>
              )}
              <p className="text-sm text-gray-500">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 24/7 Support Badge */}
      <div className="mt-8 rounded-lg bg-qatar-gold/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-qatar-gold">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-qatar-gold-700">
              24/7 Support Available
            </p>
            <p className="text-sm text-qatar-gold-600">
              We&apos;re always here when you need us
            </p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8 overflow-hidden rounded-lg">
        <div className="relative h-48 w-full bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115531.14254523788!2d51.43353889726563!3d25.28544570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4f26!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}
