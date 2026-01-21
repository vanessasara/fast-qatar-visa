"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";

const officeInfo = {
  name: "Qatar Office (Headquarters)",
  address: "Office 303, Abdul Jaleel Abdul Ghani Building",
  street: "Al Matar Street, Doha, Qatar",
  phone: "+974 12345678",
  email: "info@fastqatarvisa.com",
  whatsapp: "+97412345678",
  hours: "24/7 Support Available",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5687389835403!2d51.52843897613!3d25.286061677655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA5LjgiTiA1McKwMzEnNTEuOCJF!5e0!3m2!1sen!2sqa!4v1635000000000!5m2!1sen!2sqa",
};

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our team is always ready to assist you, any time of day or night",
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Support",
    description: "Reach us via phone, email, WhatsApp, or visit our office",
  },
  {
    icon: MapPin,
    title: "Central Location",
    description: "Conveniently located in the heart of Doha for easy access",
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-qatar-gold/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-qatar-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-qatar-gold" />
            Visit Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Office Location
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Stop by our office or reach out through any of our communication channels
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Office Details */}
          <div className="space-y-8">
            {/* Office Card */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
              {/* Office Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={IMAGES.about.office}
                  alt="Fast Qatar Visa Center Office in Doha"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qatar-maroon/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{officeInfo.name}</h3>
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-qatar-maroon/10">
                    <MapPin className="h-5 w-5 text-qatar-maroon" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{officeInfo.address}</p>
                    <p className="text-gray-600">{officeInfo.street}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-qatar-maroon/10">
                    <Phone className="h-5 w-5 text-qatar-maroon" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href={`tel:${officeInfo.phone.replace(/-/g, "")}`}
                      className="text-qatar-gold hover:underline"
                    >
                      {officeInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-qatar-maroon/10">
                    <Mail className="h-5 w-5 text-qatar-maroon" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href={`mailto:${officeInfo.email}`}
                      className="text-qatar-gold hover:underline"
                    >
                      {officeInfo.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-qatar-maroon/10">
                    <Clock className="h-5 w-5 text-qatar-maroon" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Working Hours</p>
                    <p className="text-qatar-gold font-medium">{officeInfo.hours}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <a
                    href={`tel:${officeInfo.phone.replace(/-/g, "")}`}
                    className="flex-1"
                  >
                    <Button
                      variant="primary"
                      className="w-full"
                      leftIcon={<Phone className="h-4 w-4" />}
                    >
                      Call Now
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/${officeInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      leftIcon={<MessageCircle className="h-4 w-4" />}
                    >
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-qatar-gold/10">
                    <feature.icon className="h-6 w-6 text-qatar-gold" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="mt-1 text-xs text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              {/* Map Embed */}
              <div className="relative h-[500px] w-full bg-gray-100">
                <iframe
                  src={officeInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fast Qatar Visa Center Location"
                  className="absolute inset-0"
                />
              </div>

              {/* Map Footer */}
              <div className="bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-qatar-maroon" />
                    <span className="text-sm font-medium text-gray-700">
                      Al Matar Street, Doha
                    </span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=Al+Matar+Street+Doha+Qatar`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-qatar-gold hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-qatar-maroon/5 to-qatar-gold/5 p-8 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Note:</span> Office visits are available by appointment.
            For faster service, we recommend applying online or contacting us via phone/WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
